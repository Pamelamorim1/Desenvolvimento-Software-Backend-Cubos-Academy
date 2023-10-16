let email = "aluno@cubos.academy";

function validarEmail(email) {
    const validarAroba = email.indexOf('@');
    if (validarAroba != -1) {
        const validarPonto = email.lastIndexOf('.');
        const validacao = validarPonto !== -1 && validarPonto !== email.length - 1 && email[0] !== '.'? true : false; 
        if (validacao) {
            console.log('Email válido');
        } else {
            console.log('E-mail inválido')
        }
    }
}


validarEmail(email);

email = "jose@cubos.academy.br";
validarEmail(email);

email = "jose.messias@cubos.academy";
validarEmail(email);

email = "jose.messias@cubos.io";
validarEmail(email);

email = "jose@cubos";
validarEmail(email);

email = "jose.messias@cubos";
validarEmail(email);

email = "jose.messias@.";
validarEmail(email);

email = "jose.@cubos";
validarEmail(email);

email = ".@";
validarEmail(email);

email = "@.";
validarEmail(email);

email = "jose.messias@cubos.";
validarEmail(email);

email = ".messias@cubos.";
validarEmail(email);

email = ".messias@cubos";
validarEmail(email);