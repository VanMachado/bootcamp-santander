interface ICachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type cachorroLeitura = {
    readonly[k in keyof ICachorro]: ICachorro[k];
}

//O "Omit" deixa o item da interface em questão
class MeuCachorro implements Omit<cachorroLeitura, 'idade'> {
    nome;
    
    constructor(nome) {
        this.nome = nome;    
    }    
}

const dog = new MeuCachorro('Dagoberto');