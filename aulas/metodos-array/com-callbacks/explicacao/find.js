const usuarios = [{ nome: 'Ruan', idade: 19 },
{ nome: 'Rebeca', idade: 16 },
{ nome: 'Patricia', idade: 75 },
{ nome: 'Thomas', idade: 57 },
{ nome: 'Fabio', idade: 27 },];

const encontreUsuario = usuarios.find((Element) => {
    return Element.nome === 'Thomas';
}
);

console.log(encontreUsuario);
