const pacientes = ['Jão', 'Kevely', 'Anderson', 'Romulo', 'Bruninho', 'Raldiney', 'Deise'];

function filaAtendimento(arrayPacientes, tipoDeOperacao, nomePaciente) {
    console.log('Tipo de operação: ' + tipoDeOperacao)
    if (tipoDeOperacao === 'agendar') {
        agendarPaciente(arrayPacientes, nomePaciente);
    }
    else if (tipoDeOperacao === 'atender') {
        atenderPaciente(arrayPacientes);
    } else {
        cancelarAtendimento(arrayPacientes, nomePaciente);
    }
}

function agendarPaciente(arrayPacientes, nomePaciente) {
    const indicePaciente = arrayPacientes.indexOf(nomePaciente);
    arrayPacientes.splice(indicePaciente, 1);
    arrayPacientes.push(nomePaciente);
    console.log(`Paciente: ${nomePaciente} será agendado(a). Lista atualizada: ${arrayPacientes.join(', ')}.`);
}

function atenderPaciente(arrayPacientes) {
    arrayPacientes.shift();
    console.log(`Lista atualizada: ${arrayPacientes.join(', ')}.`);
}

function cancelarAtendimento(arrayPacientes, nomePaciente) {
    const indicePaciente = arrayPacientes.indexOf(nomePaciente);
    arrayPacientes.splice(indicePaciente, 1);
    console.log(`Paciente: ${nomePaciente} cancelou a consulta. Lista atualizada: ${arrayPacientes.join(', ')}.`);
}

filaAtendimento(pacientes, 'agendar', pacientes[1]);