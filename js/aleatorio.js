const nomesHerois = ["Valerius", "Lyra", "Kaelen", "Thorne", "Aria"];
const reliquiasPerdidas = ["o Amuleto do Sol", "a Espada de Cristal", "o Grimório das Sombras", "o Escudo Ancião"];

function elementoAleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

const nomeHeroi = elementoAleatorio(nomesHerois);
const reliquia = elementoAleatorio(reliquiasPerdidas);
