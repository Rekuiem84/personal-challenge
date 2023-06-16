const background = document.querySelector(".background");
const generateButton = document.querySelector(".background .button");

// generate random rgb color
function generateColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const rgbColor = `${r}, ${g}, ${b}`;
	return rgbColor;
}

function updatePage() {
	color = generateColor();
	background.style.backgroundColor = "rgb(" + color + ")";
	updateCardColorCodes(color);
}

generateButton.addEventListener("click", () => {
	updatePage();
});

window.addEventListener("keydown", (e) => {
	if (e.code === "Space") {
		// check if generateButton is NOT focused so that pressing spacebar doesn't trigger the button twice
		if (document.activeElement !== generateButton) {
			updatePage();
		}
	}
});

// copy color code on click and display copy message
const colorCodes = document.querySelectorAll(".color-code");
const copyMessage = document.querySelector(".copy-message");
const copyMessageColorType = document.querySelector(".copy-message span");

colorCodes.forEach((colorCode) => {
	colorCode.addEventListener("click", () => {
		navigator.clipboard.writeText(colorCode.innerText);

		const colorType = colorCode.getAttribute("data-code");
		copyMessageColorType.innerText = colorType;
		copyMessage.classList.add("visible");
		setTimeout(() => {
			copyMessage.classList.remove("visible");
		}, 3000);
	});
});

// convert rgb "r, g, b" to hex "rrggbb"
function rgbToHex(rgb) {
	let color = rgb.split(",");
	// if the r, g, or b value is less than 16, its hex value will be single digit, so add a 0 in front of the hex value
	// padStart() adds a 0 in front of the string if the string length is less than 2
	const r = parseInt(color[0]).toString(16).padStart(2, "0");
	const g = parseInt(color[1]).toString(16).padStart(2, "0");
	const b = parseInt(color[2]).toString(16).padStart(2, "0");
	color = `${r}${g}${b}`;
	return color;
}

// convert hex "rrggbb" to rgb "r, g, b" (not needed here)
function hexToRgb(hex) {
	const color = hex.split("");
	const r = parseInt(color[0] + color[1], 16);
	const g = parseInt(color[2] + color[3], 16);
	const b = parseInt(color[4] + color[5], 16);
	return `${r}, ${g}, ${b}`;
}

// update color codes on card
const HEXCodeElement = document.querySelector("#code-hex");
const RGBCodeElement = document.querySelector("#code-rgb");

function updateCardColorCodes(color) {
	RGBCodeElement.innerText = color;
	HEXCodeElement.innerText = rgbToHex(color);
}
