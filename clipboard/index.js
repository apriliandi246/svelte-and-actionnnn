function clipboardValue(element, value) {
   let time;
   let textEl = element.textContent;

   element.addEventListener("click", async () => {
      await navigator.clipboard.writeText(value === undefined ? textEl : value);
      element.textContent = "Copied";
      time = setTimeout(() => (element.textContent = textEl), 700);
   });

   return {
      destroy() {
         element.removeEventListener("click", async () => {
            await navigator.clipboard.writeText(
               value === undefined ? textEl : value
            );
            element.textContent = "Copied";
            time = setTimeout(() => (element.textContent = textEl), 700);
         });

         clearTimeout(time);
      },
   };
}
