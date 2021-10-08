// option 1
function clipboard(element, value) {
	let time;
	let textEl = element.textContent;

	element.addEventListener("click", async () => {
		await navigator.clipboard.writeText(value === undefined ? textEl : value);
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

// option 2
function clipboard(element, value) {
	let time;
	let textEl = element.textContent;

	element.addEventListener("click", () => {
		const el = document.createElement("textarea");
		el.value = value;
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
				el.value = value;
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
