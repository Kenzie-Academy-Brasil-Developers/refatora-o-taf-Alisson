// Implemente aqui as funções
const areCandidateResultsValid1=areCandidateResultsValid1()
if (gender === male){

function validAbs(abs) {
    if (abs >= 41) 
    return passed=true 
    }

function validSwin(swim) {
    if (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30)
    return passed=true 
    }

function validHeight(height){
    if (height >= 1.70)    
    return passed=valid
    }

function validBarTest(bartest){
    if (barReps >=6 || barSeconds >= 15)
    return passed=valid
    } 

function validRun(runtest){
    if (runDistance >= 3000 && runTime <= 720 || runDistance >= 5000 && runTime <= 1200)
    return passed=true
    }
}

console.log(areCandidateResultsValid1)

///////////////////////////////

const areCandidateResultsValid2=areCandidateResultsValid2()
if (gender === female){

function absPass(abs){
    if (abs >= 41)
    return passed=true
}

function swinPass(swim){
    if (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30) 
    return passed=true
}

function barTestPass(bartest){
    if (barReps >= 6 || barSeconds >= 15)
    return passed = true
}

function runPass(run){
    if (runDistance >= 4000 && runTime <= 900 || runDistance >= 6000 && runTime <= 1320)
    return passed = true
}
}
console.log(areCandidateResultsValid2)




// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateResultsValid = areCandidateResultsValid(
    process.argv[2], // Genero
    process.argv[3], // Altura
    process.argv[4], // Repetições de barra
    process.argv[5], // Tempo de barra em segundos
    process.argv[6], // Abdominais
    process.argv[7], // Distancia percorrida em metros
    process.argv[8], // Tempo total da corrida em segundos
    process.argv[9], // Distancia do nado em metros
    process.argv[10], // Tempo total de nado em segundos
    process.argv[11], // Tempo total de mergulho em segundos
);
//if (gender === "male" && height >= 1.70 && (barReps >= 6 || barSeconds >= 15) && abs >= 41 &&
//(runDistance >= 3000 && runTime <= 720 || runDistance >= 5000 && runTime <= 1200) && (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30)){
//    passed=true
//} else if(gender === "female" && height >= 1.60 && (barReps >= 5 || barSeconds >= 12) && abs >= 41 &&
//(runDistance >= 4000 && runTime <= 900 || runDistance >= 6000 && runTime <= 1320) && (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30)){
//    passed=true
// Chame aqui a função que mostra o resultado no console
