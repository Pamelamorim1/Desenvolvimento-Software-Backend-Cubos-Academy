// Convertendo graus - Para converter para Fahrenheit basta escrever seu nome, caso não queira será convertido para Celsius.
let tipoDeConversao = 'Fahrenheit';
let grauFahrenheit = 73;
let grauCelsius = 25.89;

function conversaoDeGraus (tipoConversao, grauCelsius, grauFahrenheit) {
    if (tipoConversao === 'Fahrenheit') {
        const conversaoParaFahrenheit = ((grauFahrenheit - 32) * 5/9).toFixed(1);
        return  conversaoParaFahrenheit + '°C';
    } else {
        const conversaoParaCelsius = ((grauCelsius * 9/5) + 32).toFixed(1);
        return conversaoParaCelsius + '°F';
    } 
}

console.log(`Sua conversão de ${tipoDeConversao} foi de ${conversaoDeGraus(tipoDeConversao, grauCelsius, grauFahrenheit)}`);
