// push - insere uma informação no final e pop - remove último valor.

const array = ['fernanda', 'paula', 'raquel', 'taiane'];

array.push('taina');
array.push('laina');
array.push('dina');

console.log(array); /*[
    'fernanda', 'paula',
    'raquel',   'taiane',
    'taina',    'laina',
    'dina'
]*/

array.pop()
array.pop()
array.pop()

console.log(array); // [ 'fernanda', 'paula', 'raquel', 'taiane' ]