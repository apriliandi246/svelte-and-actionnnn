## Relative textarea height based on your value....

Demo : [Link](https://svelte.dev/repl/37f426fe4b844598afbea850af05fc0b?version=3.43.1)

<br>

```html
<script>
	function relativeTextarea(node) {
		node.addEventListener("input", (event) => {
			node.style.height = "4px";
			node.style.height = 4 + event.target.scrollHeight + "px";
		});

		return {
			destroy() {
				node.removeEventListener("input", (event) => {
					node.style.height = "4px";
					node.style.height = 4 + event.target.scrollHeight + "px";
				});
			},
		};
	}
</script>

<h1 use:statusNetwork>online 🔥</h1>
```
