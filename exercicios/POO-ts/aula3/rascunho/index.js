const userData = [];

class User {

    static idUser = 0;

    constructor(name, nick, password) {
        this.name = name,
        this.nick = nick,
        this.password = password;
        User.idUser++
    };
};

document.addEventListener('DOMContentLoaded',() => {
    const introduction = document.createElement('article');

    const header1 = document.createElement('h1');
    header1.innerText = 'Sistema de Cadastro de Pessoas v0.1'

    const introParagraph1 = document.createElement('p');
    introParagraph1.innerText = "Seja bem vindo ao nosso sistema de cadastro."
    
    const introParagraph2 = document.createElement('p');
    introParagraph2.innerText = 'Para começar, por favor se direcione ao botão "Cadastro", na barra de navegação localizada no topo da página.'

    introduction.appendChild(header1);
    introduction.appendChild(introParagraph1);
    introduction.appendChild(introParagraph2);

    contentSection.appendChild(introduction);
});

const contentSection = document.getElementById('content');
let formSignUp;

const btnDone = document.createElement('button');
btnDone.textContent = 'Cadastrar';
btnDone.setAttribute('id', 'btnSignUpDone');

const signUpArticle = document.createElement('article');
signUpArticle.id = 'sing-up';

formSignUp = document.createElement('form');
formSignUp.setAttribute('id', 'form-signup')

const labelName = document.createElement('label')
labelName.setAttribute('for', 'name');
labelName.textContent = 'Nome Completo';

const inputName = document.createElement('input');
inputName.setAttribute('id', 'name');
inputName.setAttribute('name', 'name');
inputName.setAttribute('type', 'text');
inputName.setAttribute('placeholder', 'Por favor, insira seu nome completo');
inputName.setAttribute('autocomplete', 'off');

const labelNick = document.createElement('label')
labelNick.setAttribute('for', 'nick');
labelNick.textContent = 'Apelido';

const inputNick = document.createElement('input');
inputNick.setAttribute('id', 'nick');
inputNick.setAttribute('name', 'nick');;
inputNick.setAttribute('type', 'text');
inputNick.setAttribute('placeholder', 'Por favor, insira seu apelido de acesso.');
inputNick.setAttribute('autocomplete', 'off');

const labelPass = document.createElement('label');
labelPass.setAttribute('for', 'password');
labelPass.textContent = 'Senha';

const inputPass = document.createElement('input')
inputPass.setAttribute('id', 'password');
inputPass.setAttribute('name', 'password');
inputPass.setAttribute('type', 'password');
inputPass.setAttribute('placeholder', 'Insira sua senha de acesso.');
inputPass.setAttribute('autocomplete', 'off');


const btnSignUp = document.getElementById('singup');

btnSignUp.addEventListener('click', () => {
    contentSection.innerHTML = '';

    formSignUp.appendChild(labelName);
    formSignUp.appendChild(inputName);
    formSignUp.appendChild(labelNick);
    formSignUp.appendChild(inputNick);
    formSignUp.appendChild(labelPass);
    formSignUp.appendChild(inputPass);
    formSignUp.appendChild(btnDone);

    signUpArticle.appendChild(formSignUp);
    
    contentSection.appendChild(signUpArticle);

})

const formSignUpElement = document.getElementById('form-singup');

btnDone.addEventListener('click', (event) => {
    event.preventDefault();
    
    const name = inputName.value;
    const nick = inputNick.value;
    const password = inputPass.value
    const newUser = new User(name, nick, password);

    userData[User.idUser - 1] = newUser;

    const paragraphDone = document.createElement('p');
    paragraphDone.textContent = `Seja bem vindo(a) ${name}, seu cadastro foi realizado com sucesso!`;
    signUpArticle.appendChild(paragraphDone);
    
    inputName.value= '';
    inputNick.value= '';
    inputPass.value= '';
    console.log(userData);
});
