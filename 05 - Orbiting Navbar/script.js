//burger menu
const burgerMenu = document.querySelector(".burger-cont");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("burger--active");
});

window.addEventListener("keydown", (e) => {
	if (e.code === "Space" || e.code === "Enter") {
		if (document.activeElement === burgerMenu) {
			burgerMenu.classList.toggle("burger--active");
		}
	}
});
