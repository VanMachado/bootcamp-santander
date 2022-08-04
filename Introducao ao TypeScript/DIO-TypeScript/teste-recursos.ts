//Exemplo de funções
function soma(a: number, b: number) {
    return a + b;
}

function redirection(usuario: IUsuario | IADmin) {
    if('cargo' in usuario){
        //Redireciono para área de admin
    } else {
        //Redireciono para área de user
    }
}

//Outra maneira de fazer seria assim adicionando "?" no atributo "cargo" em usuario
function redirection2(usuario: IUsuario) {
    if(!usuario.cargo){
        //Redireciono para área de admin
    }
    
    //Redireciono para área de user   
}

//Exemplo de Interfaces
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
}

interface IFelinos extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    domestico: boolean;
    porte: 'pequeno' | 'medio' | 'grande';
}

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'surpervisor';
}

interface IADmin extends IUsuario {
    cargo: 'gerente' | 'surpervisor';
}

const animal : IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre'
}

const felino : IFelinos = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true
}

//Uso do type
type IDomestico = IFelinos | ICanino;

const animal2 : IDomestico = {
    nome: 'Peter Jackson',
    tipo: "terrestre",
    porte: "medio",    
    domestico: true
}