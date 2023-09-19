let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.splice(1, 2, 'f');
console.log(array);

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.splice(1, 0, 'f');
console.log(array);

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.splice(1, 0, 'f', 'b','c');
console.log(array);

array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.splice(2, 0, 'b','c');
console.log(array);