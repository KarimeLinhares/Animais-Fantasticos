import Scroll from "./modules/scroll.js";
import Accordion from "./modules/accordion.js"

import initAnimeScroll from "./modules/anime-scroll.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
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


initAnimeScroll();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initSchedule();
initFetchAnimais();
initFetchBitcoins();
