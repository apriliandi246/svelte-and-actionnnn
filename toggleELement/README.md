## Toggle your element (hide or show it) 😎

<br>

```html
<script>
   let isHide = false;

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
</script>

<h1 use:toggleELement="{isHide}">Hello World</h1>

<button>{isHide}</button>
```
