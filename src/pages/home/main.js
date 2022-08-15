export default () => {
    const container = document.createElement('div');
    
    const template = `
    <h1 class="text">SPA Calendario de tarefas</h1>
   `;

    container.innerHTML = template;

    return container;

}