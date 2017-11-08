console.log("Compare The Triplets");

//HACKER RANK
function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function
    var resultadoA = 0;
    var resultadoB = 0;

    if(a0 > b0){
        resultadoA += 1;
    }else if(b0 > a0){
        resultadoB += 1;
    }else{
        console.log("empate");
    }

    if(a1 > b1){
        resultadoA += 1;
    }else if(b1 > a1){
        resultadoB += 1;
    }else{
        console.log("empate");
    }

    if(a2 > b2){
        resultadoA += 1;
    }else if(b2 > a2){
        resultadoB += 1;
    }else{
        console.log("empate");
    }

    return resultadoA +  " " + resultadoB;
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));
}

// My Exercise

function GerarResultado(){
    
}