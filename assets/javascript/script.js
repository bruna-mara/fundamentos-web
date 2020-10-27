/* VARIAVEIS EM JAVA SCRIPT
var- escopo global. variavel que pode ser referenciada em qualquer lugar do codigo
let - escopo local. variavel que so pode ser referenciada dentro do escopo em que ela se encontra.
por boas praticas utiliza-se sempre o let. é uma atualização do ECMAScript. 
const - escopo global. variavel de valor inalteravel, valor constante. pouco usavel.
**No JavaScript as variaveis não são tipadas como no Java(int, string,boolean,varchar etc..)**
*/


/* formas de acessar o DOM: 
Case Sensitive = reconhece letras maiusculas e minusculas.
por Tag: getElementByTagName()
por Id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName() - a classe pode ser usada em varias tags, por isso busca varios elementos - getElementS
por seletor: querySelector()
as mais usadas sao getElementById e por seletor- sendo a melhor pratica para selecionar..ultima atualização.  
*/

/* DECLARANDO VARIAVEIS PARA ACESSAR O DOM */
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

/* AUMENTANDO O TAMANHO DO INPUT NOS FORMULARIO DA PAG CONTATO PELO JAVA SCRIPT
da pra alterar um elemento em CSS pelo JS pq la na pagina contato temos o input type id/nome/email/assunto*/
nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

/* JS é uma linguagem orientada a funções (blocos de codigo) e tudo o que for feito sera atraves de funções*/

/* INSERINDO BLOCOS DE CODIGO NO JS
FUNCTION PODE SER COM NOME OU NAO MAS POR BOA PRATICAS USA-SE NOMES*/

/* UMA FUNÇÃO PRECISA SER VALIDADA/REFERENCIADA ATRAVÉS DE UM EVENTO PARA FUNCIONAR- VERIFICAR FORM PAGINA CONTATO*/
    function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome Válido' 
        txtNome.style.color = 'green'
        nomeOk = true
    }   
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'E-mail Válido' 
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 100){
      txtAssunto.innerHTML = 'Limite de caracteres excedido. Max: 100 caracteres.'
      txtAssunto.style.color = 'red'
      txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar')
    }
}
function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}
function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '400px'
}


 