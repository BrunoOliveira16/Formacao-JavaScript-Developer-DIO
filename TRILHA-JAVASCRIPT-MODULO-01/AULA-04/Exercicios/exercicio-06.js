/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/
const notasAlunos = [2, 7, 3, 8, 10, 4];

for (let i = 0; i < notasAlunos.length; i++){
    const notaAluno = notasAlunos[i];
    if (notaAluno >= 10){
        console.log(notaAluno)
    }
}