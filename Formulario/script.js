const form = document.getElementById('form');
const username = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

//evento de clicar no botão
form.addEventListener('submit', (e) => {
    e.preventDefault(); //não recarregar a página ao enviar
    checkInputs();
})

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue == ""){
        setErrorFor(username,"O nome de usuário é obrigatório");
    }else {
        setSuccessrFor(username);
    }

    if(emailValue == ""){
        setErrorFor(email,'O E-mail é obrigatório');
    }else if(!checkEmail(emailValue)){
        setErrorFor(email,'Digite um E-mail válido')
    }else {
        setSuccessrFor(email)
    }

    if(passwordValue == ""){
        setErrorFor(password,'A senha é obrigatório');
    }else if(passwordValue.length < 7){
        setErrorFor(password,"A senha precisa ter no mínimo sete caracters")
    }else{
        setSuccessrFor(password)
    }

    if(passwordConfirmationValue == ""){
        setErrorFor(passwordConfirmation,"A confirmação de senha é obrigatória")
    }else if(passwordConfirmationValue != passwordValue){
        setErrorFor(passwordConfirmation,"As senhas não conferem")
    }
    else{
        setSuccessrFor(passwordConfirmation)
    }

    const formControls = form.querySelectorAll('.form-control')

    const formIsValid = [formControls].every(formControl => {
        return formControl.className = "form-control success"
    })

    if(formIsValid){
        console.log('O formulário está 100% válido')
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;//Retornar a div que é pai do input
    const small = formControl.querySelector("small");
    //adicionar a mensagem de erro
    small.innerText = message;
    //adicionar a classe de erro
    formControl.className = 'form-control error';
}

function setSuccessrFor(input){
    const formControl = input.parentElement //Retornar a div que é pai do input

    //adicionar a classe de sucesso
    formControl.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
