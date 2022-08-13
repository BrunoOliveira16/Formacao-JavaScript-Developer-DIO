export default () => {
    const container = document.createElement('div');

    const template = `
        <h2>Seja Bem-vindo</h2>
        <p>Aqui você pode realizar a organização de uma tarefa criando uma lista para ter um planejamento melhor.</p>`;

        container.innerHTML = template;

        return container;
}