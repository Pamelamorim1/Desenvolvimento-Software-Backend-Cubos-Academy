const frutas = ['Kiwi', 'Uva', 'Melancia', 'Pêra', 'Melão'];
console.log('Fruta original:', frutas);

frutas.reverse();
console.log('Fruta invertida:', frutas.join(', '));

frutas.reverse().splice(0, 1);
frutas.splice(frutas.length -1, 1, 'Melão');
console.log('Fruta adicionando:', frutas);
