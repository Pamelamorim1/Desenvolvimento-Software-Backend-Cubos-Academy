const disjuntores = [
    false,
    true,
    true,
    false,
    true,
    true,
    false,
    false,
    false,
    true,
  ];
let i = 0;

for (let identificador of disjuntores){
    if(identificador){
        console.log(i);
    }
    i++;
}