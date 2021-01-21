function hideOrShow(element) {
   return {
      update(newProps) {
         if (newProps) {
            element.style.display = "none";
         } else {
            element.style.display = "";
         }
      },
   };
}
