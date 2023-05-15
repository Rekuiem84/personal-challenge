const socials = document.querySelectorAll(".social-cont");
const background = document.querySelector(".socials-cont");
const colorWhite = "#fafafa";

socials.forEach((social) => {
	let socialIcon = social.firstElementChild;
	let color = socialIcon.getAttribute("data-color");

	social.addEventListener("mouseover", () => {
		socialIcon.style.backgroundColor = color;
		background.style.backgroundColor = color.toString() + "ee";
	});
});
socials.forEach((social) => {
	let socialIcon = social.firstElementChild;

	social.addEventListener("mouseout", () => {
		socialIcon.style.backgroundColor = colorWhite.toString() + "55";
		background.style.backgroundColor = colorWhite;
	});
});
