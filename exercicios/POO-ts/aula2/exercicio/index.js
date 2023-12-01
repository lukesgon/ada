console.log('Hello World!')

class Biblioteca {
    constructor() {
        this.livros = [];
    };

    adicionarLivro(livro) {
        this.livros.push(livro);
    };

    listarLivros(livro) {
        for (livro of this.livros) {
            console.log(livro);
        }
    };

    listarLivrosAutor(nomeAutor) {
        const livrosDoAutor = this.livros.filter(livro => livro.autor === nomeAutor);
    
        console.log(livrosDoAutor);
    };
};

class Livro {
    constructor(titulo, ano, autor){
        this.titulo = titulo,
        this.ano = ano,
        this.autor = autor
    };

    detalhesLivro() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Ano de Publicação: ${this.ano}`);
        console.log(`Autor: ${this.autor}`);
        this.autor.exibirDetalhes();
    };
};

class Autor {
    constructor(nome, nacionalidade) {
        this.nome = nome,
        this.nacionalidade = nacionalidade
    };

    exibirDetalhes(nomeAutor) {
        console.log(`${this.nome} é ${this.nacionalidade}, sendo de sua autoria:`)
        biblioteca.listarLivrosAutor(nomeAutor)
    }
};

const autor1 = new Autor('J. K. Rowling', 'britânica');
const livro1 = new Livro('Harry Potter e a Pedra Filosofal', 1993, 'J. K. Rowling');
const livro2 = new Livro('Harry Potter e a Câmara Secreta', 1996, 'J. K. Rowling');
const biblioteca = new Biblioteca;

