import refs from "../js/refs";
import menu from "./menu.json";
import menuTpl from "../templates/menu-items.hbs";

function createGallery(menu) {
    // return gallery.map(gallery => cardTpl(gallery));
    return menu.map(menuTpl);
}

export default function renderGallary () {
    const markup = createGallery(menu);
    refs.menu.insertAdjacentHTML('beforeend', markup.join(""));
}
