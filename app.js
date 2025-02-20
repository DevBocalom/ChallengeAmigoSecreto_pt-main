//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomes = [];

function exibirTexoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}
function adicionarAmigo(){
    let listaNomes = document.getElementById('amigo').value;
    if (listaNomes === '') {
        exibirTexoNaTela('listaAmigos', nomes.join('<br>')+'<br>Favor adicionar um nome válido !!');
    }else{
        if (nomes.includes(listaNomes)){
            exibirTexoNaTela('listaAmigos', nomes.join('<br>')+'<br>O nome digitado já está na lista, favor verificar !!');
        }else{
            nomes.push(listaNomes);
            document.getElementById('amigo').value = '';
            exibirTexoNaTela('listaAmigos', nomes.join('<br>'));
        }
    }
}
function sortearAmigo(){
    let ganhador = parseInt(Math.floor(Math.random()*nomes.length));
    exibirTexoNaTela('listaAmigos', '');
    exibirTexoNaTela('resultado', 'O amigo secreto sorteado é ' + nomes[ganhador]);
}



