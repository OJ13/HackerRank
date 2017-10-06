console.log("Simple Array Sum");

var inp = [];

function qtdNumbers(a){

    for(i = 0; i < a ; i++){
        console.log(i);
        inp[i] = document.createElement("input");
        inp[i].type = "number"
        inp[i].id = "inp" + i;
        
        document.body.appendChild(inp[i]);
    }
}

function gerar(){
    
    var a = parseInt(document.getElementById("Qtdarray").value);

    if(a){
        document.getElementById("lblAviso").innerText = "";
        qtdNumbers(a);
    }else{
        document.getElementById("lblAviso").innerText = "Insira um número";
    }
}

function simpleArraySum(n, ar) {
    // Complete this function
    var result = 0;
    for(i = 0; i < n; i++){
        result = result + ar[i];
    }
    return result;
}

function main() {
    // VEM do HACKER RANK
    // var n = parseInt(readLine());
    // ar = readLine().split(' ');
    // ar = ar.map(Number);
    // var result = simpleArraySum(n, ar);
    // process.stdout.write("" + result + "\n");
    if(!inp){
        console.log(inp);
        document.getElementById('lblResultado').innerText = "Insira valores nas caixas"
    }else{
        console.log(inp);
        var result = simpleArraySum2(inp);
        console.log(result);
        document.getElementById('lblResultado').innerText = result;
    }
}

function simpleArraySum2(ar){

    var resultado = 0;
    for(var i = 0; i < ar; i++){
        
        resultado = resultado + ar[i].value;
    }    
}