import menu from './menu.json';
import cardsTempls from './templates/menu-cards.hbs';
import './sass/main.scss';

const menuRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.body;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

defaultTheme();

if (bodyRef.classList.value === Theme.DARK) {
  checkboxRef.checked = true;
}

function createMenuMarkUp(menu) {
    return cardsTempls(menu);
}

function bodyThemeChange() {
    if (checkboxRef.checked) {
        bodyRef.classList.add(Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        bodyRef.classList.add(Theme.LIGHT);
        bodyRef.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

function defaultTheme() {
    if (localStorage === null) {
        bodyRef.classList.add(Theme.LIGHT);
    } else {
        const theme = localStorage.getItem('theme')
        bodyRef.classList.add(theme);
  }
}

menuRef.insertAdjacentHTML('beforeend', createMenuMarkUp(menu));
checkboxRef.addEventListener('change', bodyThemeChange);

