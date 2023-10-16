// Após primeira fase da peneira
const alturaEmCm = 179;

function peneiraVolei (alturaEmCm){
    if (alturaEmCm >= 180){
        if (alturaEmCm <= 185){
            return 'LÍBERO';
        } else if (alturaEmCm > 185 && alturaEmCm <= 195){
            return 'PONTEIRO';
        } else if (alturaEmCm > 195 && alturaEmCm <= 205){
            return 'OPOSTO';
        } else {
            return 'CENTRAL';
            
        }
    } else {
        return 'REPROVADO';
    }
}

console.log(peneiraVolei(alturaEmCm));
