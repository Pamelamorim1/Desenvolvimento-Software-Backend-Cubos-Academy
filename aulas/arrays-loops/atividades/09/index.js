const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];
const pedido = 'pedido 15';

filaDePedidos.push(pedido);
console.log(filaDePedidos); // [ 'pedido 12', 'pedido 13', 'pedido 14', 'pedido 15' ]

filaDePedidos.shift();
console.log(filaDePedidos); // [ 'pedido 13', 'pedido 14', 'pedido 15' ]