class Autor {
    constructor(nome, nacionalidade) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
    }

    exibirDetalhes() {
        console.log(`O(a) Autor(a) ${this.nome} é ${this.nacionalidade}.`);
    }
}

class Livro {
    constructor(titulo, anoPublicacao, autor) {
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
        this.autor = autor;
    }

    detalhesLivro() {
        console.log(`O livro ${this.titulo} foi lançado no ano de ${this.anoPublicacao} sob autoria de ${this.autor}.`);
        this.autor.exibirDetalhes();
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    listarLivros() {
        for (const livro of this.livros) {
            console.log(livro.detalhesLivro());
        }
    }

    buscarLivrosPorAutor(autor) {
        const livrosAutor = this.livros.filter((livro) => livro.autor.nome === autor.nome);

        if (livrosAutor.length === 0) {
            console.log('Não foram encontrados livros deste autor.');
        } else {
            for (const livro of livrosAutor) {
                console.log(livro.detalhesLivro());
            }
        }
    }
}

const biblioteca = new Biblioteca();

