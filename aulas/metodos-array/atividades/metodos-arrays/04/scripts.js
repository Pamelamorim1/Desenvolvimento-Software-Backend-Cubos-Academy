const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function filaAtendimento (arrayPacientes, tipoDeOperacao, nomePaciente) {
    const indicePaciente = arrayPacientes.indexOf(nomePaciente);
    if (tipoDeOperacao === 'agendar') {
        arrayPacientes.splice(indicePaciente, 1);
        arrayPacientes.push(nomePaciente);
        console.log(`Paciente: ${nomePaciente} será agendado(a). Lista atualizada: ${arrayPacientes.join(', ')}.`);
    } if (tipoDeOperacao === 'atender') {
        arrayPacientes.shift();
        console.log(`Lista atualizada: ${arrayPacientes.join(', ')}.`);
    }
}

filaAtendimento(pacientes, 'atender', pacientes[1]);