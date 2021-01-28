function validateInput(element) {
   return {
      update(props) {
         if (props.pattern.test(props.value) === true) {
            element.style.border = "2px solid blue";
         } else {
            element.style.border = "2px solid red";
         }
      },
   };
}
