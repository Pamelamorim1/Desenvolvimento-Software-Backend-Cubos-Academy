const frutas = ["PêRA", "MAÇã", "MamãO", "banaNA", "AbacaXI"];

const modificandoString = (arrayItens) => {
    let count = 0;

    const arrayUpper = arrayItens.map((Element) => {
        const valorAtualizado = `${count} - ${Element[0].toUpperCase() + Element.slice(1,Element.length).toLowerCase()}`;
        count++;
        return valorAtualizado;
    });
    console.log(arrayUpper);
}

modificandoString(frutas);