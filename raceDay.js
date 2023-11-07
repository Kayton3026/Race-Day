let raceNumber = Math.floor(Math.random() * 1000); 
const seRegistrouCedo = true; 
const idadeCorredor = 19; 

if (idadeCorredor > 18 && seRegistrouCedo) {
    raceNumber += 1000;
    console.log(`Número de corrida: ${raceNumber}`);
    console.log("Horário da corrida: 9h30");
} else if (idadeCorredor > 18 && !seRegistrouCedo) {
    console.log(`Número de corrida: ${raceNumber}`);
    console.log("Horário da corrida: 11h00");
} else if (idadeCorredor < 18) {
    console.log(`Número de corrida: ${raceNumber}`);
    console.log("Horário da corrida: 12h30");
} else {
    console.log("Corredor com 18 anos deve verificar a mesa de registro.");
}

