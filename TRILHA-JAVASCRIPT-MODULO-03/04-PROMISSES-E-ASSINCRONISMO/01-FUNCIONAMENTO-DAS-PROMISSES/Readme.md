# 📌 **Funcionamento das Promises**
O objeto Promiserepresenta a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

Uma Promise é um proxy para um valor não necessariamente conhecido quando a promessa é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promessa para fornecer o valor em algum momento no futuro.

<br>

Uma Promise está em um destes estados:

- pendente: estado inicial, nem cumprido nem rejeitado.
- cumprido: significa que a operação foi concluída com sucesso.
- rejeitado: significa que a operação falhou.

<br>

O estado eventual de uma promessa pendente pode ser cumprido com um valor ou rejeitado com um motivo (erro). Quando uma dessas opções ocorre, os manipuladores associados enfileirados pelo método thende uma promessa são chamados. Se uma promessa já foi executada ou rejeitada quando um manipulador correspondente para anexado, o manipulador será chamado, portanto, não há condição de corrida entre a conclusão de uma operação assíncrona e a anexação de seus manipuladores.

Uma promessa é considerada resolvida se for entregue ou rejeitada, mas não pendente.

<br>

```
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
}, 1000)

promessaDeUmNumeroQualquer
    .then((value)=> {
        console.log(value)
    })
    .catch((error)=> {
        console.log(error)
    })
    .finally(()=> {
        console.log('finalizou!')
    })
```