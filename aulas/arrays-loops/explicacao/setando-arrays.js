const array = ['fernanda', 'paula', 'raquel', 'taiane'];

const x = 3;

console.log(array); // [ 'fernanda', 'paula', 'raquel', 'taiane' ]

array[0] = 'item 1';
array[3] = 'item 3' ;
array[2] = 'item 4' ;
array[1] = 2 ;
array[3] = 4 ;

console.log(array); // [ 'item 1', 2, 'item 4', 4 ]

console.log(array[x]); // 4

