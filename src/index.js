import './sass/main.scss';
import renderGallery from "./js/renderGallery";
import refs from "./js/refs";

const LIGHT = 'light-theme';
const DARK = 'dark-theme';


renderGallery();
refs.tumbler.addEventListener('change',  changeBackground);

function changeBackground () {
    if (refs.body.classList.contains(DARK)) {
        changeClass(DARK,LIGHT);
        // console.log(1);
    } else {
        changeClass(LIGHT,DARK);
        // console.log(2);
    }
}

function changeClass (last,main) {
    refs.body.classList.remove(last);
    refs.body.classList.add(main);
}


// console.log(refs.body);

