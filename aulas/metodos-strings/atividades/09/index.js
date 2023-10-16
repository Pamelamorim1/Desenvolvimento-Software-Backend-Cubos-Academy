const nome = 'Guido Cerqueira';

function geradorNickname(nome) {
    let nickName = '@';
    for (const n of nome) {
        if (nickName.length < 13 && n !== ' ') {
            nickName += n.toLowerCase();
        }
    }
    console.log(nickName);
}

geradorNickname(nome);
