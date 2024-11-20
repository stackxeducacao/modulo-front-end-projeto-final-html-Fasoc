        document.getElementById('formContato').addEventListener('submit', function(event) {
            event.preventDefault();
        
            let errorMessage = '';
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;

            if (!nome || !email || !mensagem) {
                errorMessage = 'Por favor, preencha todos os campos.';
            }

            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (email && !emailRegex.test(email)) {
                errorMessage = 'Por favor, insira um e-mail válido.';
            }

            if (errorMessage) {
                document.getElementById('error-message').textContent = errorMessage;
            } else {
                document.getElementById('formContato').submit(); 
            }
        });