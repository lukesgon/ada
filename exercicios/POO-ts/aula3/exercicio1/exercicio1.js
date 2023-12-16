class SistemaDeLogin {
    constructor() {
        this.usuarios = [];
    };

    cadastrarUsuario(nome, senha) {
        try {
            if (!nome || nome.length < 4) {
                throw new Error('Nome de usuário invalido.');
            } else if (senha.length < 6) {
                throw new Error('A senha precisa ter ao menos 6 caracteres.');
            } else {return this.usuarios.push(
                {nome: nome,
                senha: senha,
                logado: false}
            ) };
        }
        catch (error) {
            console.error('Cadastramento invalido.Erro nas informações entradas.', error.message);
        }
    }

    realizarLogin (nome, senha) {
        const usuarioLogado = this.usuarios.findIndex(usuario => usuario.logado === true);
        this.usuarios.forEach(users => {
            try {
                if (users.nome !== nome || users.senha !== senha) {
                    throw new Error('Usuário e/ou senha inválida');
                } else if(usuarioLogado >= 0) {
                    throw new Error('Usuário local já logado. Saia para logar com uma nova conta.')
                } else {
                    users.logado = true;
                    console.log('Usuário Logado com sucesso.')
                }
            } catch (erro) {
                if (erro.message === 'Usuário e/ou senha inválida') {
                    console.error('Erro de Credenciais', 'Dados inseridos inválidos.');
                } else if (erro.message === 'Usuário local já logado. Saia para logar com uma nova conta.') {
                    console.error('Erro de Conexão', 'Usuário local já logado. Se deseja logar uma nova conta, por favor desconecte do sistema primeiro.');
                } else {
                    console.error('Erro não esperado:', erro.message);
                };
            }
        });
    }

    exibirMensagem() {
        this.usuarios.forEach(usuario => {
            if (usuario.logado) {
                console.log(`Seja bem vindo(a) ${usuario.nome}.`);
            }
        })
    }

    deslogar(){
        this.usuarios.forEach(usuarios => {
            const contadorLogado =this.usuarios.findIndex(usuario => usuario.logado === true);
            try {
                if (contadorLogado < 0) {
                    throw new Error('Erro: Não há usuário logado');
                } else {
                    usuarios.logado = false;
                    console.log('Usuário desconectado com sucesso.Até logo!');
                }
            } catch {
                console.error('Operação não realizada: Não há usuário logado.');
            }
        })
    }
}


const sistemaLogin = new SistemaDeLogin;

sistemaLogin.cadastrarUsuario('lucas', 123456);
sistemaLogin.deslogar();
sistemaLogin.realizarLogin('lucas', 123457);
sistemaLogin.realizarLogin('',123456);
sistemaLogin.realizarLogin('lucas', 123456);
sistemaLogin.exibirMensagem();
sistemaLogin.deslogar();
