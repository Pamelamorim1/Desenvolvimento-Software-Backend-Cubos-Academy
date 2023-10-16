const string = 'Pâmela Taiane';

function inverterString (string) {
    const resultado = string.split('').reverse();
    console.log('String invertida', String(resultado).replaceAll(',', ''));
}

inverterString(string);
