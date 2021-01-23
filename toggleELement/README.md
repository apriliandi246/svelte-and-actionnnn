## Toggle your element (hide or show it) 😎

<br>

```html
<script>
   let isHide = false;

   function toggleELement(element) {
      return {
         update(newProps) {
            newProps
               ? (element.style.display = "none")
               : (element.style.display = "");
         },
      };
   }
</script>

<h1 use:toggleELement>Hello World</h1>

<button>{isHide}</button>
```
