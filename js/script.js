import Scroll from "./modules/scroll.js";
import Accordion from "./modules/accordion.js"
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import AnimeScroll from "./modules/anime-scroll.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Schedule from "./modules/schedules.js";
import SlideNav from './modules/slide.js';

import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoins.js';


// inicializa o scroll
const scroll = new Scroll ('[data-menu="suave"] a[href^="#"]');
scroll.init();

// inicializa o acordeão
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

// inicializa o Tabnav
const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabnav.init();

// inicializa o modal de login
const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

// inicializa o tooltip
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

// inicializa animação de scroll
const scrollAnima = new AnimeScroll('[data-anime="scroll"]');
scrollAnima.init();

// inicializa o dropdown menu
const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

// inicializa o menu mobile
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

// inicializa o horário de funcionamento
const funcionamento = new Schedule('[data-semana]', 'aberto');
console.log(funcionamento);
funcionamento.init();

initFetchAnimais();
initFetchBitcoin();

// inicializa o carrossel
const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');

// adiciona o controle customizado
slide.addControl('.custom-controls');



