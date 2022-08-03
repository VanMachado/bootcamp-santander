//Função para mostrar os alunos aprovados
const alunos = [
    {
        nome: "Jorge",
        nota: 5,
        turma: "1B",
    },

    {
        nome: "Pedro",
        nota: 8,
        turma: "1C",
    },

    {
        nome: "Wagner",
        nota: 7,
        turma: "1B",
    }
];

function aprovados (array, media) {       
    let alunosAprovados = [];
    
    for(let i = 0; i < array.length; i++ ){
        const {nome, nota} = array[i];

        if(nota >= media){
            alunosAprovados.push(nome);            
        }
    }
    console.log(`Alunos aprovados: ${alunosAprovados}`);    
}

aprovados(alunos, 6);