// clientes
const patricia = { nome: "Patricia", carrinho: [] };
const carlos = { nome: "Carlos", carrinho: [] };
const renato = { nome: "Renato", carrinho: [] };
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] };

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

jose.carrinho.push(tv, caboUsb, caboUsb);
console.log(jose)

carlos.carrinho.push(notebook, notebook);
console.log(carlos);

patricia.carrinho.push(teclado, caboUsb, caboUsb, carregador, mouse, monitor);
console.log(patricia);

renato.carrinho.push(webcam, webcam, webcam, webcam, webcam);
console.log(renato);

roberto.carrinho.push(webcam, caboUsb, caboUsb, monitor);
console.log(roberto);




