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

<br>

```html
<script>
   let isHide = false;

   function toggleELement(element) {
      let nextElement;
      let parent = element.parentElement;
      let childs = element.parentElement.children;

      for (let i = 0; i < childs.length; i++) {
         if (childs[i] === element) {
            nextElement = childs[i].nextElementSibling;
         }
      }

      return {
         update(props) {
            if (props === true) element.remove();
            if (props === false) parent.insertBefore(element, nextElement);
         },
      };
   }
</script>

<h1 use:toggleELement="{isHide}">Hello World</h1>

<button on:click={() => isHide = !isHide}>{isHide}</button>
```
