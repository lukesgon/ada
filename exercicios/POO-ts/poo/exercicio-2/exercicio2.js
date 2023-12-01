// Atividade 2

class Animal {
    constructor (nome, especie) {
        this.nome = nome,
        this.especie = especie
    }
}

class Mamifero extends Animal {
    amamentar() {
        console.log(`${this.nome} é um mamífero, portanto, é capaz de amamentar.`)
    }
}

class Ave extends Animal {
    voar() {
        console.log(`${this.nome} é uma ave, portando possívelmente voa.`);
    }
}

const animal1 = new Ave('Galinha', 'Galinácio');
const animal2 = new Mamifero('Lobo', 'Canídeo');

animal2.amamentar();
animal1.voar();