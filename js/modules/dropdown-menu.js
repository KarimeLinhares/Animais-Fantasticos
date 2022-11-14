import outsideClick from "./outside-click.js";

export default function initDropdownMenu() {
  
  // seleciona os submenus
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    // função que adiciona a classe ativo ao menu, para mantê-lo ativo
    function handleClick(event) {
      event.preventDefault();
      this.classList.toggle('active');
      outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('active');
      })
    } 
  
  // adiciona evento ao click de mouse, ou toque no mobile
  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    })
  })
}