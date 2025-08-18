   const body = document.querySelector("body")
   let number = 0
function contagem () {

    setTimeout(function() {
        body.style.backgroundImage = "url('assets/azul.jpg')"
    }, 1000)

    tempo = setInterval (function(){
     number = number + 1; // altera a let e soma ela
     document.querySelector("h1").innerHTML = number; // troca o conteúdo do <h1> pelo valor da variável number.

 }, 1000)


}

function paraContagem () {
    clearInterval(tempo)
    

}