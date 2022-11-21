import Scroll from "./modules/scroll.js";
import Accordion from "./modules/accordion.js"
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import FetchAnimais from "./modules/fetch-animais.js";
import FetchBitcoins from "./modules/fetch-bitcoins.js";
import AnimeScroll from "./modules/anime-scroll.js";


import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initSchedule from "./modules/schedules.js";

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


initDropdownMenu();
initMenuMobile();
initSchedule();

FetchAnimais('../../animaisapi.json', '.numeros-grid')

FetchBitcoins('https://blockchain.info/ticker', '.coffee');

