console.log("Simple Array Sum");

function qtdNumbers(a){

    for(i = 0; i < a.length; i++){

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

}

function main() {
    // VEM do HACKER RANK
    // var n = parseInt(readLine());
    // ar = readLine().split(' ');
    // ar = ar.map(Number);
    // var result = simpleArraySum(n, ar);
    // process.stdout.write("" + result + "\n");
}