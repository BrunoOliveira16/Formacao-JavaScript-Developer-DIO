const container = document.querySelector('#root');

const renderPage = () => {
    const page = validatehash(window.location.hash);
    container.innerHTML = '';
    container.appendChild(routes[page]);
}

window.addEventListener('load', ()=> {
    renderPage();
    Init();
});