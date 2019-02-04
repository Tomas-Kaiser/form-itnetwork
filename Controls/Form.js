class Form extends SimplexControl {
   constructor(element) {
      super(element)
      this.form = [
         {
            mainMenu: 'Výuka',
            subMenu: ['Nevím jak začít programovat', 'Nevím jak dále postupovat ve výuce', 'Něco v kurzu nefunguje', 'Mám zájem o individuální výuku', 'Mám zájem o prezenční výuku']
         },
         {
            mainMenu: 'Platby',
            subMenu: ['Fakturace', 'Zjištění stavu platby', 'Stornování platby']
         },
         {
            mainMenu: 'Propagace',
            subMenu: ['Chceme reklamu na ITnetwork']
         },
         {
            mainMenu: 'Práce',
            subMenu: ['Chci práci v IT', 'Hledáme zaměstnance']
         },
         {
            mainMenu: 'Systém',
            subMenu: ['Nahlásit chybu', 'Navrhnout funkci nebo vylepšení']
         }
      ];

      this._addUnorderList();
      this._addListItems();
   }

   _addUnorderList() {
      // Create unorder list for main menu
      let menuItems = this.element.append('<ul class="main-menu"></ul>').getNewElements();

      // Iterate through array this.mainMenu and create list itmes in it
      for (const menu of this.form) {
         menuItems.append(`<li id='${menu.mainMenu.toLowerCase()}' class="main-li">${menu.mainMenu}<p>Paragraph</p></li>`).getNewElements();
      }
   }

   _addListItems() {
      for (const item of this.form) {
         // Select list item from mainMenu
         let selectMainMenuLi = this.element.select(`#${item.mainMenu.toLocaleLowerCase()}`);
         selectMainMenuLi.append('<ul class="sub-menu-ul hidden"></ul>').getNewElements();

         // Select li of parent ul
         let selectSubMenuUl = selectMainMenuLi.children.last;

         // iterate array subMenu
         for (let subItem of item.subMenu) {
            selectSubMenuUl.append(`<li>${subItem}<p>Paragraph</p><button>click</button></li>`);
         }

         // Add even listener for mainMenu & active for Main list item
         selectMainMenuLi.onClick(() => {
            this.removeActive(); // when click another main li removes old content

            selectSubMenuUl.toggleClass('hidden');
            selectSubMenuUl.addClass('active');

            selectMainMenuLi.addClass('menu-li-active'); // list item active color white
         });

         // Stop proapgation for nested li
         selectSubMenuUl.onClick((sender, e) => {
            e.stopPropagation();
         });
      }
   }

   removeActive() {
      let selectActive = this.element.select('.active');
      let selectActiveLi = this.element.select('.menu-li-active');

      if (selectActive.hasClass('active') && selectActiveLi.hasClass('menu-li-active')) {
         selectActive.removeClass('active');
         selectActive.addClass('hidden');

         selectActiveLi.removeClass('menu-li-active');

      }
   }
}