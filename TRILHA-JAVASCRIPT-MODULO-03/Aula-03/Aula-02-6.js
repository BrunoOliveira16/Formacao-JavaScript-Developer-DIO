// Join
//Exemplo 01
const lista = [1, 2, 3]
console.log(lista.join('/')) //Saída: 1/2/3

//Exemplo 02
const pessoa = [{ name: 'Bruno' }, { name: 'Bianca' }, { name: 'Bernardo' }]
console.log(pessoa.map((e)=> e.name).join(', ')) //Saída: Bruno, Bianca, Bernardo

//Exemplo 03
const pessoas = [{ name: 'Bruno' }, { name: 'Bianca' }, { name: 'Bernardo' }, {name: 'Marcelo'}, {name: 'Pamela'}, {name: 'Lessandra'}]
console.log(
    pessoas.map((e)=> e.name)
        .filter((e)=> e.startsWith('B'))
        .join('; ')
) //Saída: Bruno; Bianca; Bernardo

//Ecemplo 04
const elementosEmHtml = pessoas
    .filter((e)=> e.name.startsWith('B'))
    .map(e => `<li>${e.name}</li>`)
    .join('')
console.log(elementosEmHtml) //Saída: <li>Bruno</li><li>Bianca</li><li>Bernardo</li>