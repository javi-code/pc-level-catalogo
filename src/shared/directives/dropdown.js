
export const dropdown = {
   bind(el) {
      let openDrop = 'show-dropdown'
      el.addEventListener('click', showDropdown)
      function showDropdown(){
         let list = el.nextElementSibling;
         if (list) {
            hideDropdown(list)
            list.classList.toggle(openDrop)
         }
      }
      function hideDropdown(lista) {
         var $dropdown = document.getElementsByClassName('dropdown')
         Object.keys($dropdown).forEach(i => {
            if ($dropdown[i] != lista) {
               $dropdown[i].classList.remove(openDrop);
            }
         })
      }
      window.onclick = function (e) {
         let limite = e.target.closest("." + openDrop)
         if (!e.target.closest('.toggle')) {
            if ( limite == null || !limite.hasAttribute('on') ) {
               hideDropdown(null)
            }
         }
      }
   },
}