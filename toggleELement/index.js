// option 1
function toggleELement(element) {
   return {
      update(props) {
         if (props === true) {
            element.style.display = "none";
         } else {
            element.style.display = "";
         }
      },
   };
}

// option 2
function toggleELement(element) {
   let nextElement;
   let parent = element.parentElement;
   let childs = element.parentElement.children;

   for (let index = 0; index < childs.length; index++) {
      if (childs[index] === element) {
         nextElement = childs[index].nextElementSibling;
      }
   }

   return {
      update(props) {
         if (props === true) element.remove();
         if (props === false) parent.insertBefore(element, nextElement);
      },
   };
}
