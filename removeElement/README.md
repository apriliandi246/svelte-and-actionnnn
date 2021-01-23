## Remove your element from DOM 🗑️

<br>

```html
<script>
   function removeElement(element) {
      element.addEventListener("click", () => element.remove());

      return {
         destroy() {
            element.removeEventListener("click", () => element.remove());
         },
      };
   }
</script>

<div use:removeElement>
   <h1>What is Lorem Ipsum?</h1>

   <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
   </p>
</div>
```
