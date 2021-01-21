function clipboardValue(element, value) {
   let time;
   let prevText = element.textContent;

   element.addEventListener("click", async () => {
      await navigator.clipboard.writeText(value);
      element.textContent = "Copied";
      time = setTimeout(() => (element.textContent = prevText), 900);
   });

   return {
      destroy() {
         element.removeEventListener("click", async () => {
            await navigator.clipboard.writeText(value);
            element.textContent = "Copied";
            time = setTimeout(() => (element.textContent = prevText), 900);
         });

         clearTimeout(time);
      },
   };
}
