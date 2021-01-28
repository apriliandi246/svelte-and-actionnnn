## Validate your input ✋

<br>

### ❗ Just customize if you neet more....

```html
<script>
   let email = "";
   let username = "";
   let password = "";

   const patterns = {
      password: /^[\w@-]{6,}$/,
      username: /^[\S*]{5,12}$/i,
      email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
   };

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
</script>

<label for="username">Username</label>
<input type="text" id="username" autocomplete="off" bind:value={username}
use:validateInput={{ value: username, pattern: patterns.username }} />

<br />

<label for="email">Email</label>
<input type="text" id="email" autocomplete="off" bind:value={email}
use:validateInput={{ value: email, pattern: patterns.email }} />

<br />

<label for="password">Password</label>
<input type="password" id="password" autocomplete="off" bind:value={password}
use:validateInput={{ value: password, pattern: patterns.password }} />
```
