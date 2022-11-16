/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\n// função da lista do FAQ\r\nfunction initAccordion() {\r\n  // seleciona os tópicos do FAQ(1)\r\n  const accordionList = document.querySelectorAll('[data-anime=\"accordion\"] dt');\r\n  // constante de ativação\r\n  const activeClass = 'active';\r\n\r\n  // função que adiciona a classe 'active' aos tópicos e descrições no evento de 'click'(3)\r\n  function activeAccordion() {\r\n    this.classList.toggle(activeClass);\r\n    this.nextElementSibling.classList.toggle(activeClass);\r\n  }\r\n\r\n  // TESTE(5)\r\n  // Se houver itens no 'accordionList' a função será ativada\r\n  if(accordionList.length) {\r\n    // faz com que o primeiro tópico e descrição já fique ativo ao iniciar o código(4)\r\n    accordionList[0].classList.add(activeClass);\r\n    accordionList[0].nextElementSibling.classList.add(activeClass);\r\n\r\n    // adiciona evento de 'click',(2)\r\n    accordionList.forEach((item) => {\r\n      item.addEventListener('click', activeAccordion);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros () {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll('[data-numero]');\r\n\r\n    numeros.forEach((numero) => {\r\n      const total = +numero.innerText;\r\n      const incremento = Math.floor(total/100);\r\n      let start = 0;\r\n      const timer = setInterval(() => {\r\n        start += incremento;\r\n        numero.innerText = start;\r\n        if(start > total) {\r\n          numero.innerText = total;\r\n          clearInterval(timer);\r\n        }\r\n      }, 30 * Math.random());\r\n    });\r\n  }\r\n\r\n  let observer; \r\n\r\n  function handleMutation(mutation) {\r\n    if(mutation[0].target.classList.contains('active')) {\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    }\r\n  }\r\n  observer = new MutationObserver(handleMutation);\r\n\r\n  const observerTarget = document.querySelector('.numeros');\r\n\r\n  observer.observe(observerTarget, {attributes: true});\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/anime-scroll.js":
/*!************************************!*\
  !*** ./js/modules/anime-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimeScroll)\n/* harmony export */ });\n// função de animação das seções durante o scroll\r\nfunction initAnimeScroll() {\r\n  // seleciona as sections com 'js-scroll'(1)\r\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\r\n\r\n  // calcula o tamanho de 60% da tela\r\n  const halfWindow = window.innerHeight * 0.6;\r\n\r\n  // função que dispara o scroll(2)\r\n  function animeScroll() {\r\n    sections.forEach((section) => { \r\n      const sectionTop = section.getBoundingClientRect().top; // pega a distância do topo de cada elemento\r\n      const isSectionVisible = (sectionTop - halfWindow) < 0; // calcula se a seção está visível na tela do browser, se for true, adiciona a classe 'active', se não, remove a classe 'active'\r\n      if(isSectionVisible) { \r\n        section.classList.add('active');\r\n      } else {\r\n        section.classList.remove('active');\r\n      }\r\n    })\r\n  }\r\n\r\n  // TESTE(5)\r\n  // se houver itens na sections, o código vai funcionar\r\n  if(sections.length) {\r\n\r\n    // deixa a primeira seção ativada (4)\r\n    animeScroll();\r\n\r\n    // adiciona o evento no Scroll(3)\r\n    window.addEventListener('scroll', animeScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anime-scroll.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n  \r\n  // seleciona os submenus\r\n  const dropdownMenus = document.querySelectorAll('[data-dropdown]');\r\n\r\n    // função que adiciona a classe ativo ao menu, para mantê-lo ativo\r\n    function handleClick(event) {\r\n      event.preventDefault();\r\n      this.classList.toggle('active');\r\n      (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\r\n        this.classList.remove('active');\r\n      })\r\n    } \r\n  \r\n  // adiciona evento ao click de mouse, ou toque no mobile\r\n  dropdownMenus.forEach(menu => {\r\n    ['touchstart', 'click'].forEach(userEvent => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    })\r\n  })\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n\r\n  // função que cria os animais, e os transforma no HTML esperado\r\n  function createAnimal(animal) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('numero-animal');\r\n\r\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;\r\n    return div;\r\n  }\r\n  \r\n  // promise\r\n  async function fetchAnimais(url) {\r\n    try { // tente rodar\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJson = await animaisResponse.json();\r\n      const numerosGrid = document.querySelector('.numeros-grid');\r\n\r\n      // response\r\n      animaisJson.forEach(animal => {\r\n        const divAnimal = createAnimal(animal);\r\n        numerosGrid.appendChild(divAnimal);\r\n      })\r\n      ;(0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch(erro) { // se não conseguir, mostre o erro\r\n      console.log(erro);\r\n    }\r\n  }\r\n\r\n  fetchAnimais('./animaisapi.json');\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoins.js":
/*!**************************************!*\
  !*** ./js/modules/fetch-bitcoins.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoins)\n/* harmony export */ });\nfunction initFetchBitcoins() {\r\n  \r\n  // promise/response\r\n  fetch('https://blockchain.info/ticker')\r\n    .then(response => response.json())\r\n    .then(bitcoin => {\r\n      const coffeePrice = document.querySelector('.coffee');\r\n      coffeePrice.innerText = (20 / bitcoin.BRL.buy).toFixed(5);\r\n    }).catch (erro => console.log(Error(erro)));\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-bitcoins.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  \r\n  // tipos de evento\r\n  const eventos = ['click', 'touchstart'];\r\n\r\n  function openMenu() {\r\n    menuList.classList.add('active');\r\n    menuButton.classList.add('active');\r\n\r\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n      menuList.classList.remove('active');\r\n      menuButton.classList.remove('active');\r\n    });\r\n  }\r\n\r\n  if(menuButton) {\r\n    eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n\r\n  // selecionando o botão de abrir o modal(1)\r\n  const openButton = document.querySelector('[data-modal=\"open\"]');\r\n\r\n  // selecionando o botão de fechar o modal(1)\r\n  const closeButton = document.querySelector('[data-modal=\"close\"]');\r\n\r\n  // selecionando o container do modal(1)\r\n  const modalContainer = document.querySelector('[data-modal=\"container\"]');\r\n\r\n  // evento de 'click' sobre o botão de Login, abre o modal, sobre o botão de fechar, fecha o modal(3)\r\n  function toggleModal(event) {\r\n    event.preventDefault();\r\n    modalContainer.classList.toggle('active');\r\n  }\r\n  // evento de fechar o modal ao clicar fora dele(4)\r\n  function outModal(event) {\r\n    if(event.target === this) { // verifica se o clique foi no container ou no modal\r\n      toggleModal(event);\r\n    }\r\n  }\r\n    \r\n    // TESTE(5)\r\n    // Se os seletores existirem, o código vai funcionar\r\n    if(openButton && closeButton && modalContainer) {\r\n    \r\n    // adiconando eventos de 'click', abrir, fechar e clique fora do modal(2)\r\n    openButton.addEventListener('click', toggleModal);\r\n    closeButton.addEventListener('click', toggleModal);\r\n    modalContainer.addEventListener('click', outModal);\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n\r\n  function handleOutsideClick(event) {\r\n    if(!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach(userEvent => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      })\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if(!element.hasAttribute(outside)) {\r\n    events.forEach(userEvent => {\r\n\r\n      // impede que na fase de \"bubble\", que o listener seja ativo de imediato\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    })\r\n    element.setAttribute(outside, '');\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/schedules.js":
/*!*********************************!*\
  !*** ./js/modules/schedules.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSchedule)\n/* harmony export */ });\nfunction initSchedule() {\r\n  const schedule = document.querySelector('[data-semana]');\r\n  const weekDays = schedule.dataset.semana.split(',').map(Number);\r\n  const weekHour = schedule.dataset.horario.split(',').map(Number);\r\n\r\n  const dateNow = new Date();\r\n  const dayNow = dateNow.getDay();\r\n  const hourNow = dateNow.getHours();\r\n\r\n  const weekOpen = weekDays.indexOf(dayNow) !== -1;\r\n  const hourOpen = (hourNow >= weekHour[0] && hourNow < weekHour[1]);\r\n\r\n  if(weekOpen && hourOpen) {\r\n    schedule.classList.add('open');\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/schedules.js?");

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scroll)\n/* harmony export */ });\n// classe do scroll suave\r\nclass Scroll {\r\n\r\n  // argumentos\r\n  constructor(links, options) {\r\n    // seleciona todos os links internos(1)\r\n    this.innerLinks = document.querySelectorAll(links);\r\n    \r\n    // opções do scroll\r\n    if(options === undefined) {\r\n      this.options = {\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n      }\r\n    } else {\r\n      this.options = options;\r\n    }\r\n\r\n    // define o 'this' da função\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  // método que linka o item do navegador com a sua seção(3)\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href'); // pega o atributo do href\r\n    const section = document.querySelector(href);\r\n\r\n    // faz o movimento de scroll do item para a seção(4)\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  // loop que adiciona para cada link um evento de 'click'(2)\r\n  addLinkEvent() {\r\n    this.innerLinks.forEach((link) => {\r\n      link.addEventListener('click', this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n\r\n    // verifica se existe algo no 'link'\r\n    if(this.innerLinks.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\n// função de navegação da lista de animais\r\nfunction initTabNav() {\r\n  // seleciona as classes tabMenu e tabContent da lista de animais e sections da lista de descrições(1)\r\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li');\r\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section');\r\n\r\n  // função que ativa e desativa as sections, adicionando e removendo a classe 'active'(2)\r\n  function activeTab(index) {\r\n    tabContent.forEach((section) => {\r\n      section.classList.remove('active');\r\n    });\r\n    const direction = tabContent[index].dataset.anime;\r\n    tabContent[index].classList.add('active', direction);\r\n  }\r\n\r\n  // TESTE(5)\r\n  // se houver itens na tabMenu e/ou tabContent o código vai acontecer\r\n  if(tabMenu.length && tabContent.length) {\r\n\r\n    // faz com que o primeiro item da section sempre fique ativa ao iniciar a página, monstrando assim seu conteúdo mesmo não tendo sido clicado(4)\r\n    tabContent[0].classList.add('active');\r\n\r\n    // loop em que, para cada item da lista de animais, ao acontecer o evento de 'click', será adicionado a class 'active' a cada um dos itens que forem ativados(3)\r\n    tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener('click', () => {\r\n        activeTab(index);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip () {\r\n\r\n  // selecionar a imagem do mapa(1)\r\n  const toolTips = document.querySelectorAll('[data-tooltip]');\r\n\r\n  // sempre atualiza o local do mouse, permitindo o evento de a tooltip seguir o mouse\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.toolTipBox.style.top = `${event.pageY + 20}px`;\r\n      this.toolTipBox.style.left = `${event.pageX + 20}px`;\r\n    }\r\n  }\r\n\r\n  const onMouseLeave = {\r\n    \r\n    // consegue com que a tooltip seja removida, mesmo ele não estando dentro da função(5)\r\n    handleEvent() { \r\n      this.toolTipBox.remove();\r\n\r\n      // remove a lista de eventos(6)\r\n      this.element.removeEventListener('mouseleave', onMouseLeave);\r\n      this.element.removeEventListener('mousemove', onMouseMove);\r\n    }\r\n  }\r\n\r\n  // função que cria uma nova 'div', com uma uma nova classe, e o texto do aria-label(3)\r\n  // Ela é adicionada ao final do documento\r\n  function createTooltipBox(element) {\r\n    const toolTipBox = document.createElement('div')\r\n    const text = element.getAttribute('aria-label');\r\n    toolTipBox.classList.add('tooltip');\r\n    toolTipBox.innerText = text;\r\n    document.body.appendChild(toolTipBox);\r\n    return toolTipBox;\r\n  }\r\n\r\n  function onMouseOver() {\r\n    const toolTipBox = createTooltipBox(this);\r\n\r\n    // preenche o objeto 'onMouseMove' com a toolTipBox\r\n    onMouseMove.toolTipBox = toolTipBox;\r\n\r\n    // evento em que a tooltip segue o mouse \r\n    this.addEventListener('mousemove', onMouseMove);\r\n\r\n    // preenche o objeto 'onMouseLeave' com a toolTipBox\r\n    onMouseLeave.toolTipBox = toolTipBox;\r\n    onMouseLeave.element = this;\r\n\r\n    // adiciona o evento de mouse leave\r\n    this.addEventListener('mouseleave', onMouseLeave);   \r\n  }\r\n\r\n  // evento para cada vez que o mouse passar sobre a imagem(2)\r\n  toolTips.forEach((item) => {\r\n    item.addEventListener('mouseover', onMouseOver);\r\n  })\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll.js */ \"./js/modules/scroll.js\");\n/* harmony import */ var _modules_anime_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/anime-scroll.js */ \"./js/modules/anime-scroll.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_schedules_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/schedules.js */ \"./js/modules/schedules.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoins_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoins.js */ \"./js/modules/fetch-bitcoins.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// inicializa o scroll\r\nconst scroll = new _modules_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] ('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscroll.init();\r\n\r\n(0,_modules_anime_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_schedules_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_bitcoins_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;