const listaPalavras = ['pessego', 'kiwi', 'jabuticaba', 'pera', 'banana'];

function ordenarLista(array) {
    const listaOrdenada = array.sort((a, b) => a.length - b.length);
    return listaOrdenada
}

const resultado = ordenarLista(listaPalavras);
console.log(resultado);