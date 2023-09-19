// Callback Every - Verifica se a validação está correta e retorna um valor lógico.

const arrayNum = [1,2,3,4,5];

const callbackNum = arrayNum.every((elemento) => {
    return elemento < 6;
});

// console.log(callbackNum);

const arrayFrut = ['Pera', 'Laranja', 'Melancia'];

const callbackFrut = arrayFrut.every(function(elemento){
    return elemento !== 'Laranja';
});
console.log(callbackFrut);