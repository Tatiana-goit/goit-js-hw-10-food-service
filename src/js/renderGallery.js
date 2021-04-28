import refs from "../js/refs";
import menu from "../menu.json";
import menuTpl from "../templates/menu-items.hbs";


const markup = createGallery(menu);
refs.menu.insertAdjacentHTML('beforeend', markup.join(""));

function createGallery(menu) {
    return menu.map(menuTpl);
}

