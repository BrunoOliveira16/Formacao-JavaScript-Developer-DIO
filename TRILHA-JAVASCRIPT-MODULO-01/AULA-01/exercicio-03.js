/*
*   Exercicio 03
*   Código Condição de pagamento:
*   - À vista Débito, recebe 10% de desconto;
*   - À vista no Dinheiro ou PIX, recebe 15% de desconto;
*   - Em duas vezes, preço normal de etiqueta sem juros;
*   - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*   Tabela de Pagamentos 
*       1 - Débito
*       2 - Dinehiro
*       3 - PIX
*       4 - Parcelar em 2x
*       5 - Parcelar acima de 2x
*/

// Solução utilizando if/else
let produto = 100;
let tipoPagamento = 3

if (tipoPagamento === 1) {
    let precoFinal = produto - (produto * 0.1);
    console.log(precoFinal)
} else if (tipoPagamento === 2 | tipoPagamento === 3) {
    let precoFinal = produto - (produto * 0.15);
    console.log(precoFinal)
} else if (tipoPagamento === 4) {
    let precoFinal = produto;
    console.log(precoFinal)
} else if (tipoPagamento === 5){
    let precoFinal = produto + (produto * 0.1);
    console.log(precoFinal)
} else {
    console.log('Valor incorreto para pagamento, por favor selecione 1, 2, 3, 4 ou 5.')
}

// Solução utilizando o Switch
switch(tipoPagamento){
    case 1:  
        precoFinal = produto - (produto * 0.1);
        console.log(precoFinal)
        break
    case 2:
        precoFinal = produto - (produto * 0.15);
        console.log(precoFinal)
        break
    case 3:
        precoFinal = produto - (produto * 0.15);
        console.log(precoFinal)
        break
    case 4:
        precoFinal = produto;
        console.log(precoFinal)
        break
    case 5:
        precoFinal = produto + (produto * 0.1);
        console.log(precoFinal)
    default:
    console.log('Valor incorreto para pagamento, por favor selecione 1, 2, 3, 4 ou 5.')
}