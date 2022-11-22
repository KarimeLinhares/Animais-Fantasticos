import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  // argumentos
  constructor(dropdownMenus, events) {
    // seleciona os submenus
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define touchstart e click como argumento padrão de events caso o usuário não define
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'active';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }
  
  // função que adiciona a classe ativo ao menu, para mantê-lo ativo
  // ativa o dropdownmenu e adiciona a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  // adiciona os eventos ao dropdownmenu
  // adiciona evento ao click de mouse, ou toque no mobile
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }
 
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }

}