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
