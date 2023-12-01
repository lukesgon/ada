class Pessoa {
    constructor (nome, idade, cidade) {
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    };

    calcularIdadeBissextos (ano) {
        const anoAtual = ano;
        const anoNascimento = anoAtual - this.idade;
        let anosBissextos = 0;
        let anoAferir = anoNascimento

        while (anoAferir <= anoAtual) {
            if ((anoAferir % 4 === 0 && anoAferir % 100 !== 0) || anoAferir % 400 === 0) {
                anosBissextos++;
                anoAferir++;
            } else {
                anoAferir++;
            }
        }
        return anosBissextos
    }
};

const pessoa1 = new Pessoa('João', 72, 'Pelotas');

console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos e já presenciou ${pessoa1.calcularIdadeBissextos(2023)} anos bissextos.`);