function statusNetwork(element) {
	element.textContent = navigator.onLine ? "online 🔥" : "offline ⛔";

	window.addEventListener("online", () => {
		element.textContent = "online 🔥";
	});

	window.addEventListener("offline", () => {
		element.textContent = "offline ⛔";
	});

	return {
		destroy() {
			window.removeEventListener("online", () => {
				element.textContent = "online 🔥";
			});

			window.removeEventListener("offline", () => {
				element.textContent = "offline ⛔";
			});
		},
	};
}
