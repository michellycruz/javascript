let number = document.querySelector("input#inum")
let lista = document.querySelector("select#ilista")
let resultado = document.querySelector("div#res")
let valores = []


function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inList(n){

}


function adicionar(){
    if(isNumber(number.value) && !inList(number.value)){

    } else{
        alert("Resultado inválido ou o número já se encontra na lista")
    }
}