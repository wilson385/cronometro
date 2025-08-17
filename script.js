   const body = document.querySelector("body")
function contagem () {

    setTimeout(function() {
        body.style.backgroundImage = "url('assets/azul.jpg')"
    }, 1000)

tempo = setInterval (function(){
    const numero = document.querySelector("h1").innerHTML
    const soma = parseInt(numero) + 1
    document.querySelector("h1").innerHTML = soma

 }, 1000)


}

function paraContagem () {
    clearInterval(tempo)

}