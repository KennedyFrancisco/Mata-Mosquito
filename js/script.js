let altura = 0;
let largura = 0;
let vida = 1;
let tempo = 10;

let criarMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace("?" , "")

if (niveç === "normal") {
    //1500
    criarMosquito = 1500
} else if (nivel === "dificil") {
    //1000
    criarMosquito = 1000
} else if (nivel === "chucknorris") {
    //750
    criarMosquito = 750
}

function ajustaTamanhoPalcoJogo() { 
    altura = window.innerHeight 
    largura = window.innerWidth

    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function() {
    
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criarMosquito)
        window.location.href = "vitoria.html"
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica() {

    // Remove o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if(vida > 3) {
            window.location.href = "fim-de-jogo.html"
        } else {
            document.getElementById('v' + vida).src="js/coracao_vazio.png"

            vida++
        }
    }   

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    if (posicaoX < 0) {
        posicaoX = 0
    } else {
        posicaoX = posicaoX
    }

    if (posicaoY < 0) {
        posicaoY = 0
    } else {
        posicaoY = posicaoY
    }

    console.log(posicaoX, posicaoY)

    // Criar elemento HTML
    let mosquito = document.createElement('img')
    mosquito.src = "js/mosca2.png"
    mosquito.className = tamanhoAleatoria() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = "mosquito"
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)

    ladoAleatorio()
}
let criarMosquito = setInterval(function() {
    posicaoRandomica()
}, criarMosquitoTempo)

function tamanhoAleatoria() {
    let classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
