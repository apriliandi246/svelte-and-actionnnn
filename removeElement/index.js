function removeElement(element) {
   element.addEventListener("click", () => element.remove());

   return {
      destroy() {
         element.removeEventListener("click", () => element.remove());
      },
   };
}
