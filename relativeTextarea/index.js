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
