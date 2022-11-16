import Scroll from "./modules/scroll.js";
import Accordion from "./modules/accordion.js"
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";


import initAnimeScroll from "./modules/anime-scroll.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initSchedule from "./modules/schedules.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoins from "./modules/fetch-bitcoins.js";

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

initAnimeScroll();
initTooltip();
initDropdownMenu();
initMenuMobile();
initSchedule();
initFetchAnimais();
initFetchBitcoins();
