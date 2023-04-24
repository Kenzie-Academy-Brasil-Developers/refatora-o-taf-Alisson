// Implemente aqui as funções

function validAbs(abs) {
        if (abs >= 41){
            return true
        } 
        return false 
}
function validHeight(height, gender){
    if (height >= 1.70 && gender === "male"){
        return true
    } else if (height >= 1.60 && gender === "female"){
        return true
    }
    return false
}
function validSwim (swimTime, swimDistance, diveTime){
    if (swimTime <= 60 && swimDistance >= 100 || diveTime <=30){
        return true
    }
    return false
}
function validBarTest (barReps, barTime, gender){
    if (barReps >= 6 || barTime >= 15 && gender === "male"){
    return true
    } else if (barReps >= 5 || barTime >= 12 && gender === "female"){
        return true
    }
    return false
}
function validRun (runTime, runDistance, gender){
    if (runTime <= 720 && runDistance >= 3000 || runTime <= 1200 && runDistance >= 5000 && gender === "male"){
        return true
    } else if (runTime <= 900 && runDistance >= 4000 || runTime <= 1320 && runDistance >= 6000 && gender === "female"){
        return true
    }
    return false
}
function areCandidateResultsValid(gender, height, barReps, barTime, abs, runDistanc, runTime, swimDistance, swimTime, diveTime){
    const verifyAbs = validAbs(abs)
    const verifyHeight = validHeight(height, gender)
    const verifySwim = validSwim(swimTime, swimDistance, diveTime)
    const verifyBarTest = validBar(barReps, barTime, gender)
    const verifyRun = validRun(runTime, runDistance, gender)


    if (verifyAbs && verifyHeight && verifySwim && verifyBarTest && verifyRun){
        return true
    }
    return false
    
}




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
