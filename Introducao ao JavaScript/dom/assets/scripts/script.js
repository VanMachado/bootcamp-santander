const btn = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

const darkModeClass = 'dark-mode';
const lightModeClass = 'light-mode';

function changeMode() {
    changeClasses();
    changeText();
}

//Essa parte é responsável por fazer a mudança de classe para o "Dark-mode"
function changeClasses() {
    btn.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

//Essa parte é responsável por mudar o texto através de uma checagem de estado
function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)) {
        btn.innerHTML= lightMode;
        h1.innerHTML = `${darkMode} ON`;
        return;
    }

    btn.innerHTML = darkMode;
    h1.innerHTML = `${lightMode} ON`;
}

btn.addEventListener('click', changeMode);