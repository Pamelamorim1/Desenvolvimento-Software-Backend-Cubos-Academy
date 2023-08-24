// shift - Remove elementos do array e unshift - adiciona

const array = [ 'fernanda', 'paula', 'raquel', 'taiane' ];

array.shift();
console.log(array); // [ 'fernanda', 'paula', 'raquel', 'taiane' ]

array.unshift('pam');
console.log(array); // [ 'pam', 'paula', 'raquel', 'taiane' ]

array.shift();
array.unshift('adicional 01', 'adicional 02');

console.log(array); //[ 'adicional 01', 'adicional 02', 'paula', 'raquel', 'taiane' ]

