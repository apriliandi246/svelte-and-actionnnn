## Clipboard your value 📄

<br>

### ❗ If you don't pass a parameter value, _use:clipboard_ will take your textContent as a value....

```html
<script>
   const link = "https://svelte.dev/";

   function clipboard(element, value) {
      let time;
      let textEl = element.textContent;

      element.addEventListener("click", async () => {
         await navigator.clipboard.writeText(
            value === undefined ? textEl : value
         );

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
</script>

<button use:clipboard="{link}">{link}</button>
```

```html
<script>
   const link = "https://svelte.dev/";

   function clipboard(element, value) {
      let time;
      let textEl = element.textContent;

      element.addEventListener("click", () => {
         const el = document.createElement("textarea");
         el.value = value === undefined ? textEl : value;
         document.body.appendChild(el);
         el.select();
         document.execCommand("copy");
         document.body.removeChild(el);
         element.textContent = "Copied";
         time = setTimeout(() => (element.textContent = textEl), 700);
      });

      return {
         destroy() {
            element.removeEventListener("click", () => {
               const el = document.createElement("textarea");
               el.value = value === undefined ? textEl : value;
               document.body.appendChild(el);
               el.select();
               document.execCommand("copy");
               document.body.removeChild(el);
               element.textContent = "Copied";
               time = setTimeout(() => (element.textContent = textEl), 700);
            });

            clearInterval(time);
         },
      };
   }
</script>

<button use:clipboard="{link}">{link}</button>
```
