/*
Case Sensitive = reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por id: getElementById()
por nome: getEmentsByName()
por Classes: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto =document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = '70%'
email.style.width = '70%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3 ) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color =  'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML= 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >=100) {
        txtAssunto.innerHTML = 'Digite no maximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOK == true) {
        alert ('Formulario enviado com sucesso!')
    } else {
        alert ('Preencha o formulario corretamente antes de enviar...')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}