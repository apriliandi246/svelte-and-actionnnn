## Clipboard your value 📄

<br>

```html
<script>
   const link = "https://svelte.dev/";

   function clipboardValue(element, value) {
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

<br>

### If you don't pass a parameter value, _use:clipboard_ will take your textContent as a value....
