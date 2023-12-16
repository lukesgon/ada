const promptSync = require('prompt-sync')

const prompt = promptSync({sigint: true});

class Character {
    constructor(name, weapon, shield, belt) {
        this.name = name,
        this.level = 1,
        this.expertise = 0,
        this.weapon = weapon,
        this.shield = shield,
        this.armorClass = this.calculateArmorClass(),
        this.belt = belt,
        this.hp = this.calculateHP();
    };

    calculateArmorClass(){
        let calculate = this.shield.def + this.expertise + this.weapon.def
        
        if(calculate <= 0) {
            calculate = 0;
        }
        return calculate;
    }

    calculateHP() {
        return 20 * this.level;
    };

};

class Item {
    constructor(name, description) {
        this.name = name,
        this.description = description;
    };
};

class Weapon extends Item {
    constructor(name, description, type, atk, def){
        super(name, description),
        this.type = type,
        this.atk = atk,
        this.def = def;
        this.maxAtk = this.maxAtk();
    };

    maxAtk() {
        if(this.type === 'Machado'){
            if(this.atk === '1d6+3') {
                return 9;
            } else if(this.atk === '1d8+4') {
                return 12;
            } else if(this.atk === '1d12+5') {
                return 17;
            }
        } else if(this.type === 'Espada') {
            if(this.atk === '1d6') {
                return 6;
            } else if(this.atk === '1d8+2') {
                return 10;
            } else if(this.atk === '1d12+3') {
                return 15;
            }
        } else if(this.type === 'Martelo') {
            if(this.atk === '1d6-2') {
                let calculate = (Math.round(Math.random() * 6)) - 2;
                if(calculate <= 0){
                    calculate = 0
                }
                return calculate
            } else if(this.atk === '1d8-3') {
                let calculate = (Math.round(Math.random() * 8)) - 3;
                if(calculate <= 0){
                    calculate = 0
                }
                return calculate
            } else if(this.atk === '1d12-4') {
                let calculate = (Math.round(Math.random() * 12)) - 4;
                if(calculate <= 0){
                    calculate = 0
                }
                return calculate;
            }
        }
    }
    
    weaponAttack() {
        if(this.type === 'Machado'){
            if(this.atk === '1d6+3') {
                return 3 + (Math.round(Math.random() * 6));
            } else if(this.atk === '1d8+4') {
                return 4 + (Math.round(Math.random() * 8));
            } else if(this.atk === '1d12+5') {
                return 5 + (Math.round(Math.random() * 12));
            }
        } else if(this.type === 'Espada') {
            if(this.atk === '1d6') {
                return Math.round(Math.random() * 6);
            } else if(this.atk === '1d8+2') {
                return 2 + (Math.round(Math.random() * 8));
            } else if(this.atk === '1d12+3') {
                return 3 + (Math.round(Math.random() * 12));
            }
        } else if(this.type === 'Martelo') {
            if(this.atk === '1d6-2') {
                let calculate = (Math.round(Math.random() * 6)) - 2;
                if(calculate <= 0){
                    calculate = 0
                }
                return calculate
            } else if(this.atk === '1d8-3') {
                let calculate = (Math.round(Math.random() * 8)) - 3;
                if(calculate <= 0){
                    calculate = 0
                }
                return calculate
            } else if(this.atk === '1d12-4') {
                let calculate = (Math.round(Math.random() * 12)) - 4;
                if(calculate <= 0){
                    calculate = 0
                }
                return calculate;
            }
        }
    }
}

class Shield extends Item {
    constructor(name, description, def) {
        super(name, description),
        this.def = def;
    };
};

class Potion extends Item {
    constructor(name, description, regen, recharge) {
        super(name,description),
        this.regen = regen,
        this.recharge = recharge;
    };

    regen(level) {
        const result = (level * 8) * Math.round(Math.random());
    }
};

class Monster {
    static count = 0;

    constructor(name, level, atk, def, hp) {
        this.name = name + ' ' + Monster.count,
        this.level = level;
        this.atk = atk,
        this.def = def;
        this.hp = hp;

        Monster.count++
    }

    attack() {
        if(this.atk === '1d6+2') {
            return 2 + (Math.round(Math.random() * 6));
        } else if(this.atk === '1d8+3') {
            return 3 + (Math.round(Math.random() * 8));
        } else if(this.atk === '1d12+ 5') {
            return 5 + (Math.round(Math.random() * 12));
        } else if(this.atk === '1d8+2') {
            return 2 + (Math.round(Math.random() * 8));
        } else if(this.atk === '1d12+3') {
            return 3 + (Math.round(Math.random() * 12));
        } else {
            return 5 + (Math.round(Math.random() * 20));
        }
    }
}

class Dungeon {
    constructor(name, character){
        this.name = name,
        this.playerCharacter = character,
        this.monsters = [],
        this.boss = null;
    };

    respawnMonster() {
        if(this.playerCharacter.level === 1) {
            let accumulator = Math.round(Math.random() * 2);

            if (accumulator === 0) {
                accumulator = 1;
            }

            for(let i = 0; i < accumulator; i++) {
                const monster = new Monster('Goblin', this.playerCharacter.level, '1d6+2', 2);
                this.monsters.push(monster);
            }
        }

        if(this.playerCharacter.level === 2) {
            let accumulator = Math.round(Math.random() * 3);

            if (accumulator === 0) {
                accumulator = 1;
            }

            for(let i = 0; i < accumulator; i++) {
                const monster = new Monster('Orc', this.playerCharacter.level, '1d8+3', 4);
                this.monsters.push(monster);
            }
        }
        if(this.playerCharacter.level === 3) {
            let accumulator = Math.round(Math.random() * 5);

            if (accumulator === 0) {
                accumulator = 1;
            }

            for(let i = 0; i < accumulator; i++) {
                const monster = new Monster('Draugr', this.playerCharacter.level, '1d12+5', 8);
                this.monsters.push(monster);
            }
        }
    }

    respawnBoss() {
        const boss = new Monster('Goblin Shaman', this.playerCharacter.level, '1d8+2', 2);
        this.boss = boss;
    }

    enterTheDungeon() {
        if(this.playerCharacter.level === 1) {
            console.clear();
            let ready = false;

            console.log('Capítulo I - O Covil do Goblin Shaman');
            console.log(`\nO ano é 1033 desde a conjunção das esferas. ${character.name} cavalga sob uma forte tempestade para atender o chamado do vilarejo de Devon.`);
            console.log('\nEste é o primeiro teste do cavaleiro recém juramentado.');

            while(!ready) {
                const readyTest = Number(prompt('\n[Enter] Continuar...', 0))
                if(readyTest === 0) {

                    ready = true;
                }
            }
            
            console.log('\nSua missão: Confrontar hordas de goblins e por um fim a onda de desepero causada pelos ataques ordenados pelo Goblin Shaman, que nesse momento se esconde nas profundezas de suas masmorras.');

            ready = false;

            while(!ready) {
                const readyTest = Number(prompt('\n[Enter] Continuar...', 0))
                if(readyTest === 0) {

                    ready = true;
                }
            }

            console.clear();

            this.dungeonMenu();
        };
    };

    dungeonMenu() {
        let ready = false;
        while(!ready) {
            console.log('\n\n\nEscolha uma das seguintes opções:\n[0]Consultar a ficha de Personagem\n[1]Explorar\n[2]Confrontar o Boss\n[9]Finalizar a aventura.')
            const selectAction = Number(prompt('Responda: '))
            if(selectAction === 0) {
                console.clear();
                game.characterSheet();
            }else if(selectAction === 1) {
                console.clear();
                console.log('\nVocê explorou');
            }else if(selectAction === 2) {
                console.clear();
                console.log('\nVocê não tem expertise suficiente para confronta-lo.');
            }else if(selectAction === 9) {
                console.clear();
                console.log(`\n${this.playerCharacter.name} reconheceu sua incompetencia e não prosseguiu com sua jornada.\nA ordem dos cavaleiros rejeitou sua desonra e o exilou para sempre.\nFim de Jogo.`)
                ready = true;
            }else {
                console.clear();
                console.log('\nPor favor, escolha uma opção válida.\n')
            }
        }
    }
}

class Libs {
    constructor() {
        this.axes = [];
        this.swords = [];
        this.clubs = [];
        this.shields = [];
        this.regen = [];
    }

    loadWeapons() {
        const machadinha = new Weapon('Machadinha', 'Um pequeno machado, similar aqueles utilizados por lenhadores. Apesar disso, possui fio suficiente para causar algum dano às suas vítimas.', 'Machado', '1d6+3', -3);
        const machadoFerro = new Weapon('Machado de Ferro', 'Um machado mortal de gume simples, forjado em ferro e letal para seus inimigos.', 'Machado', '1d8+4', -4);
        const machadoBatalha = new Weapon('Machado de Batalha', 'Um machado pensado para a guerra. Seu gume duplo promete cortes limpos contra qualquer alvo, sem perder o estilo, contando um com cabo ricamente ornamentado por anões.', 'Machado', '1d12+5', -5);
        
        this.axes.push(machadinha, machadoFerro, machadoBatalha);
        
        const adaga = new Weapon('Adaga', 'Uma adaga simples, fácil de esconder, e que com a mesma facilidade pode fazer sangrar.', 'Espada', '1d6', 0);
        const espadaCurta = new Weapon('Espada Curta', 'Uma espada digna de qualquer aventureiro. Seu gume duplo, tamanho e peso equilibrados prometem torna-la uma fiel companheira em qualquer jornada.', 'Espada', '1d8+2', 2);
        const espadaBastarda = new Weapon('Espada Bastarda', 'Também conhecida como "espada de mão e meia", a Espada Bastarda é uma espada digna de reis. Tão impressionante quanto sua aparência, sua letalidade é suficiente para derrubar não apenas inimigos, mas hordas deles.', 'Espada', '1d12+3', 3);
        
        this.swords.push(adaga, espadaCurta, espadaBastarda);

        const porrete = new Weapon('Porrete', 'Um taco de madeira digno de um aprendiz de artes marciais.', 'Martelo', '1d6-2', 2);
        const clava = new Weapon('Clava', 'Uma arma contundente, feita de madeira nobre e contando com espinhos metálicos encrustrados, o que lhe confere uma aparência ameaçadora.', 'Martelo', '1d8-3', 3);
        const marteloBatalha = new Weapon('Martelo de Batalha', 'Um martelo feito em aço ornado, simplesmente impressionante. Seu tamanho aparentemente desprporcional deve lhe conferir a capacidade de simplesmente esmagar qualquer inimigo pelo caminho.', 'Martelo', '1d12-4', 5);

        this.clubs.push(porrete, clava, marteloBatalha);
    }

    loadShield() {
        const broquel = new Shield('Broquel', 'Um escudo pequeno e muito portátil, muito utilizado por infantaria leve e arqueiros.', 2);
        const escudoMadeira = new Shield('Escudo de Madeira', 'Um escudo redondo de madeira, ricamente entalhado pelos povos nórdicos', 4);
        const escudoOgival = new Shield('Escudo Ogival', 'Um escudo pesado, composto de ferro e aço. Possui um formato alongado, que possibilita o bloqueio de ataques pesados', 6);

        this.shields.push(broquel, escudoMadeira, escudoOgival);
    }

    loadRegen() {
        const elixir = new Potion('Elixir Abençoado', 'Um odre feito de porongo, que carrega sementes da árvore divina Yggdrasil, das quais perpetuamente verte um nectar encantado, capaz de curar a mais mortal das feridas.', `d8`, 3);

        this.regen.push(elixir);
    }

    loadAll() {
        this.loadWeapons();
        this.loadShield();
        this.loadRegen();
    }
}

class Game {
    constructor() {
        this.playerCharacter = null;
        this.dungeon1 = null;
        this.dungeon2 = null;
        this.dungeon3 = null;
    };

    load(){
        const lib = new Libs();
        lib.loadAll();
        return lib;
    };

    startMenu() {
        let ready = false;

        console.log("\nSeja bem vindo à Knight's Rise. Nos próximos instantes você poderá criar o seu personagem e desbravar esse novo mundo.")
        console.log('Entretanto, agora você precisa entender o funcionamento desse simples game. Basicamente tudo ocorre através de textos.')
        console.log('Tenha em mente que a ideia por trás dessa simplicidade, é referenciar as raízes do verdadeiro RPG, onde o foco sempre foi dar asas a sua imaginação.')

        while(!ready) {
            const readyTest = Number(prompt('\nVocê está pronto? Tecle [Enter] para começar...', 0))
            if(readyTest === 0) {
                ready = true;
            } else {
                ready = false;
            }
        }
    }

    createCharacter() {
        const name = prompt('Qual será o nome do seu personagem? ', 'Aragorn');
        const selectWeapon = Number(prompt('Qual será o seu tipo de arma? [0] Machados - [1] Espadas - [2] Martelos: ', 1));
        
        const weapon = () => {
            if(selectWeapon === 0){
                return lib.axes[0];
            } else if (selectWeapon === 1) {
                return lib.swords[0];
            } else {
                return lib.clubs[0];
            };
        };

        const shield = lib.shields[0];
        const belt = lib.regen[0];

        const playerCharacter = new Character(name, weapon(), shield, belt);

        this.playerCharacter = playerCharacter;

        game.characterSheet();
    };

    characterSheet() {
        console.log('\n Ficha de Personagem');
        console.log(` Nome:\t\t${this.playerCharacter.name}`);
        console.log(` Nível:\t\t${this.playerCharacter.level}`);
        console.log(` Expertise:\t${this.playerCharacter.expertise}`);
        console.log('\n\n Equipamentos:');
        console.log(` Arma:\t\t${this.playerCharacter.weapon.name}`);
        console.log(` \t\tAtk: ${this.playerCharacter.weapon.atk}`);
        console.log(` \t\tDef: ${this.playerCharacter.weapon.def}`);
        console.log(` \t\tDescrição: ${this.playerCharacter.weapon.description}`);
        console.log(`\n Escudo:\t${this.playerCharacter.shield.name}`);
        console.log(` \t\tDef: ${this.playerCharacter.shield.def}`);
        console.log(` \t\tDescrição: ${this.playerCharacter.shield.description}`);
        console.log(`\n Cinto:\t\t${this.playerCharacter.belt.name}`);
        console.log(` \t\tRegeneração: ${this.playerCharacter.level}${this.playerCharacter.belt.regen}`);
        console.log(` \t\tTempo de Recarga: ${this.playerCharacter.belt.recharge} turnos, ou após o fim do combate.`);
        console.log(` \t\tDescrição: ${this.playerCharacter.belt.description}`);
        console.log('\n\n Estatísticas');
        console.log(`\n Pontos de Vida(HP):\t ${this.playerCharacter.hp}`);
        console.log(` Dano máximo:\t\t ${this.playerCharacter.weapon.maxAtk + this.playerCharacter.expertise}`);
        console.log(` Defesa passiva:\t ${this.playerCharacter.armorClass}`);
    };

    createDungeon() {
        if(this.playerCharacter.level === 1){
            const dungeon = new Dungeon('Covil do Goblin Shaman', this.playerCharacter);
            this.dungeon1 = dungeon;
        } else if(this.playerCharacter.level === 2) {
            const dungeon = new Dungeon('Fortaleza do Orc Berserker', this.playerCharacter);
            this.dungeon2 = dungeon;
        } else if(this.playerCharacter.level === 3) {
            const dungeon = new Dungeon('Torre do Rei Lich', this.playerCharacter);
            this.dungeon3 = dungeon;
        }
    }

    startGame(){
    game.startMenu()
    game.createCharacter();
    game.createDungeon();   
    game.dungeon1.dungeonMenu();
    }
};

const game = new Game();
const lib = game.load();

game.startGame();

// game.createDungeon();
// game.dungeon1.respawnMonster();
// console.log(game.dungeon1.monsters);

