//Peneira no Vôlei
const alturaEmCm = 170;

function peneiraVolei(alturaEmCm) {
    if (alturaEmCm >= 180) {
        return 'APROVADO';
    } else {
        return 'REPROVADO';
    }
}

console.log(peneiraVolei(alturaEmCm)); //REPROVADO