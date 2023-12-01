const conjuntoNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function somaQuadradosPares(array) {
    const numerosPares = array.filter(numero => numero % 2 === 0);
    const numerosQuadrados = numerosPares.map(numero => numero ** 2);
    const somaQuadrados = numerosQuadrados.reduce((total, valor) => total + valor);
    return somaQuadrados;
}

resultado = somaQuadradosPares(conjuntoNumeros);

console.log(resultado);