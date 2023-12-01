// O formato dessa solução pressupõe a utilização do console para os testes, visto que existe algum tipo de interação para ligar, desligar e acelerar. Recomendo para o teste, abrir o console pelo live server através do navegador, e então criar um carro para os testes, ou então utilizar os dois modelos que deixarei prontos na base desse código. Se seu carro for anterior a 2010, recomendo fazer o testes de liga e desliga mais de uma vez :)

class Carro {
    constructor (modelo, ano) {
        this.modelo = modelo,
        this.ano = ano,
        this.status = 'desligado',
        this.velocidade = 0;
    }

    ligar() {
        const anoCarro = this.ano;
        if (anoCarro < 2010) {
            const ignicaoAleatoria = (Math.random()) * 10;
            if (this.status === 'ligado'){
                console.log('O carro já está ligado.')
            } else if (ignicaoAleatoria < 5) {
                console.log('O carro não pegou, vire a ignição novamente.');
            } else {
                this.status = 'ligado';
                console.log('O carro foi ligado.');
            }
        } else {
            this.status = 'ligado';
            console.log('O carro foi ligado.');
        }
    }

    desligar() {
        if (this.status === 'desligado') {
            console.log('O carro já está desligado.');
        } else if (this.velocidade !== 0) {
            console.log('Você deve desacelerar antes de desligar o carro.')
        }else {
            this.status = 'desligado';
            console.log('O carro foi desligado.')
        }
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`Você está a ${this.velocidade}Km/h`)
    }

    frear() {
        if (this.velocidade === 0 || this.status === 'desligado') {
            console.log('Seu carro não está andando.')
        } else {
            this.velocidade -=10;
            console.log(`Você reduziu a velocidade de seu carro para ${this.velocidade}`)
        }
    }
}

const chevette = new Carro('Chevette', 1990);
const hb20 = new Carro('HB20', 2023);

console.log('Atualmente temos dois modelos de carros disponíves:')
console.log(`${chevette.modelo} ou ${hb20.modelo}`);
console.log('Você pode escolher um dos dois ou adicionar outros carros, através do comando "const <nomedocarro> = new Carro(modelodocarro, anodocarro).');
console.log('Os comandos disponíveis são "nomedocarro.ligar()", "nomedocarro.desligar()", "nomedocarro.acelerar()" e "nomedocarro.frear()"');
console.log('Fique a vontade para esperar os veículos.')
