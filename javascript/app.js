let menuBtn = document.querySelector(".menu");
let navLinks = document.querySelector(".navlinks");
let links = document.querySelectorAll(".link");
let secText = document.querySelector(".sec-text");
let menu = document.querySelector(".menu i");
let oBtn = document.querySelectorAll(".o-btn");
menuBtn.addEventListener("click", () => {
	navLinks.classList.toggle("active");
	menu.classList.toggle("fa-solid");
	menu.classList.toggle("fa-x");
});
links.forEach((item) => {
	item.addEventListener("click", () => {
		navLinks.classList.toggle("active");
	});
});

const textLoad = () => {
	setTimeout(() => {
		secText.textContent = "Web development";
	}, 0);
	setTimeout(() => {
		secText.textContent = "Data Science";
	}, 3000);
	setTimeout(() => {
		secText.textContent = "Machine Learning";
	}, 6000);
	setTimeout(() => {
		secText.textContent = "Graphic designing";
	}, 9000);
};

textLoad();
setInterval(textLoad, 12000);


