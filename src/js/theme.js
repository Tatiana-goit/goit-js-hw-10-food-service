import refs from "./refs";

const LIGHT = 'light-theme';
const DARK = 'dark-theme';


refs.tumbler.addEventListener('change',  changeBackground);

function changeBackground(evt) {
    evt.currentTarget.checked ? changeLightOnDark() : changeDarkOnLight();
}

function changeDarkOnLight () {
    refs.body.classList.remove(DARK);
    refs.body.classList.add(LIGHT);
    localStorage.setItem('theme', LIGHT);
    refs.tumbler.checked = false;
}

function changeLightOnDark () {
    refs.body.classList.remove(LIGHT);
    refs.body.classList.add(DARK);
    localStorage.setItem('theme', DARK);
    refs.tumbler.checked = true;
}


currentTheme();

function currentTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === LIGHT || savedTheme === null) {
        changeDarkOnLight();
        return;
    }
  
    if (savedTheme === DARK) {
        changeLightOnDark ();
        return;
    }
}