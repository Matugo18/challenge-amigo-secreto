//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome !== '') {
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = '';
    }
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const sorteio = [...amigos];
    const pares = [];

    while (sorteio.length > 1) {
        const amigo1 = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
        const amigo2 = sorteio.splice(Math.floor(Math.random() * sorteio.length), 1)[0];
        pares.push(`${amigo1} tirou ${amigo2}`);
    }

    if (sorteio.length === 1) {
        const ultimoAmigo = sorteio[0];
        const primeiroAmigo = amigos[0];
        pares.push(`${ultimoAmigo} tirou ${primeiroAmigo}`);
    }

    pares.forEach(par => {
        const li = document.createElement('li');
        li.textContent = par;
        resultado.appendChild(li);
    });
}
