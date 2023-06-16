//burger menu
const burgerMenu = document.querySelector(".burger-cont");
const colorSelection = document.querySelector(".color-selection-cont");

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("burger--active");
	colorSelection.setAttribute(
		"aria-hidden",
		colorSelection.getAttribute("aria-hidden") === "true" ? "false" : "true"
	);
});

//color selection
const cards = document.querySelector(".cards-cont");
const inputs = document.querySelectorAll(".color-selection-cont input");

inputs.forEach((input) => input.addEventListener("input", handleUpdate));

function handleUpdate() {
	cards.style.setProperty(`--${this.name}`, this.value);
}
