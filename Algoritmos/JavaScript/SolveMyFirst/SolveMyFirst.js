console.log("Entrando em JavaScript");

function solveMeFirst(a, b){
    return a + b;
}
function main(){
    var a = parseInt(document.getElementById('numberA').value);
    var b = parseInt(document.getElementById('numberB').value);
    var res = solveMeFirst(a, b);
    
    document.getElementById('resultado').innerHTML = res;
    console.log(res);
}
