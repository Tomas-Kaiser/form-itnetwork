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
      let menuItems = this.element.append('<ul></ul>').getNewElements();

      // Iterate through array this.mainMenu and create list itmes in it
      for (const menu of this.form) {
         menuItems.append(`<li id='${menu.mainMenu.toLowerCase()}'>${menu.mainMenu}</li>`).getNewElements();
      }
   }

   _addListItems() {
      for (const item of this.form) {
         // Select list item from mainMenu
         let selectLi = this.element.select(`#${item.mainMenu.toLocaleLowerCase()}`);
         selectLi.append('<ul class="hidden"></ul>').getNewElements();
         
         // Select li of parent ul
         let selectSubMenuLi = selectLi.children;

         // iterate array subMenu
         for (let subItem of item.subMenu) {
            selectSubMenuLi.append(`<li>${subItem}</li>`)
         }
      }
   }
}