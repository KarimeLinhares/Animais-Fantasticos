/* eslint-disable no-restricted-globals */
import outsideClick from "./outside-click.js";

export default class MenuMobile {
  // argumentos
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = 'active';

    // define touchstart e click como argumento padrão de events caso o usuário não define
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.openMenu = this.openMenu.bind(this);
  }
  
  openMenu() {
    event.preventDefault();
    // adiciona a classe ativa 
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);

    // remove a classe ativa
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach(evento => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}