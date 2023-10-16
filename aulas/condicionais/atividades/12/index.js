//Dia da Semana

const diaDaSemana = 6;
const listaDiasDaSemana = ['Segunda Feira', 'Terça Feira', 'Quarta Feira', 'Quinta Feira', 'Sexta Feira', 'Sábado', 'Domingo'];

if(diaDaSemana > 0 && diaDaSemana < 8){
  console.log(listaDiasDaSemana[diaDaSemana - 1]); //Sábado
} else {
  console.log('O dia da semana informado não é válido.')
}