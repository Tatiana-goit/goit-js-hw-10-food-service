import refs from "./refs";

const LIGHT = 'light-theme';
const DARK = 'dark-theme';


refs.tumbler.addEventListener('change',  changeBackground);

function changeBackground(evt) {
    evt.currentTarget.checked ? changeLightOnDark() : changeDarkOnLight();
}

function changeDarkOnLight () {
    updateDome (DARK,LIGHT,false);
    savedInlocalStorage(LIGHT);  
}

function changeLightOnDark () {
    updateDome (LIGHT,DARK,true);
    savedInlocalStorage(DARK);  
}

function updateDome (oldClass,newClass,state){
    refs.body.classList.remove(oldClass);
    refs.body.classList.add(newClass);
    refs.tumbler.checked = state;
}

function  savedInlocalStorage(themeName) {
    localStorage.setItem('theme', themeName);
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