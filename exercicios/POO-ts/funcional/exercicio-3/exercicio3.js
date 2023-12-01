const conjuntoNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function mediaNumerosImpares (array) {
    const numerosImpares = array.filter(valor => valor % 2 !== 0);
    const medidaNumeros = (numerosImpares.reduce((acc, valor) => acc + valor)) / numerosImpares.length;

    return medidaNumeros;
};

const resultado = mediaNumerosImpares(conjuntoNumeros);
console.log(resultado);