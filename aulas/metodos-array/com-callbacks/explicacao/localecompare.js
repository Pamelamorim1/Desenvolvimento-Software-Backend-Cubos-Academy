const pessoas = ['Renata', 'Caio', 'Rebeca', 'natan'];

pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);