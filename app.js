let amigos = []

function adicionarAmigo() {
    const nomeAmigo = document.querySelector(".input-name").value
    document.querySelector(".input-name").value = ""
    if (amigos.includes(nomeAmigo)) {
        alert(nomeAmigo + " ja foi adicionado");
        return
    }

    if (!nomeAmigo) {
        return
    }

    amigos = [...amigos, nomeAmigo]
    const listaAmigos = document.querySelector(".name-list")
    const elementoAmigo = document.createElement("p")
    elementoAmigo.textContent = `${amigos.length}. ${nomeAmigo}`
    listaAmigos.appendChild(elementoAmigo)

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const resultado = document.createElement("p")

function sortearAmigo() {
    if (!amigos.length) {
        alert("Nenhum amigo para sortear. Adicione alguém primeiro")
    }

    const listaResultado = document.querySelector(".result-list")
    const amigoSorteado = amigos[getRandomInt(amigos.length)]
    resultado.textContent = "Amigo sorteado: " + amigoSorteado
    listaResultado.appendChild(resultado)
}