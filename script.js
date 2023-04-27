// Implemente aqui as funções

function validAbs(abs) {
        return abs >= 41    
}
function validHeight(height, gender){
    if (gender === "male"){
        return height >= 1.70
    }
    if (gender === "female"){
        return height >= 1.60
    }
    
}
function validSwim (swimTime, swimDistance, diveTime){
    return (swimTime <= 60 && swimDistance >= 100 || diveTime <=30)
    
}
function validBar (barReps, barTime, gender){
    if (gender === "male"){
    return barReps >= 6 || barTime >= 15
    } if (gender === "female"){
        return barReps >= 5 || barTime >= 12
    }
    
}
function validRun (runTime, runDistance, gender){
    if (gender === "male"){
        return runTime <= 720 && runDistance >= 3000 || runTime <= 1200 && runDistance >= 5000
    } if (gender === "female"){
        return runTime <= 900 && runDistance >= 4000 || runTime <= 1320 && runDistance >= 6000
    }
    
}
function areCandidateResultsValid(gender, height, barReps, barTime, abs, runDistance, runTime, swimDistance, swimTime, diveTime){
    const verifyAbs = validAbs(abs)
    const verifyHeight = validHeight(height, gender)
    const verifySwim = validSwim(swimTime, swimDistance, diveTime)
    const verifyBarTest = validBar(barReps, barTime, gender)
    const verifyRun = validRun(runTime, runDistance, gender)


   return verifyAbs && verifyHeight && verifySwim && verifyBarTest && verifyRun
    
}




// Chamando a função com os parametros recebidos via script de teste
// e atribuindo a variavel que devera ser mostrada no console
const areCandidateValid = areCandidateResultsValid(
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
function showMessage(message){
    console.log(message.toString().toUpperCase())
}
showMessage(areCandidateValid)