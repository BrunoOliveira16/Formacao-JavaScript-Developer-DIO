import home from "./pages/home/main.js";

const main = document.querySelector('#root');

window.addEventListener('load', ()=> {
    main.appendChild(home());
});