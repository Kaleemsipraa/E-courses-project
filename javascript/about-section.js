let cardSliderAboutSection = () => {
	let leftSlideBtn = document.querySelector("#slide-left");
	let rightSlideBtn = document.querySelector("#slide-right");
	let reviewsCardContainer = document.querySelector(".reviews-card-container");
	function updateButtonVisibility() {
		const maxScrollLeft =
			reviewsCardContainer.scrollWidth - reviewsCardContainer.clientWidth;
		if (reviewsCardContainer.scrollLeft === 0) {
			leftSlideBtn.style.opacity = "0";
		} else {
			leftSlideBtn.style.opacity = "1";
		}

		if (reviewsCardContainer.scrollLeft >= maxScrollLeft) {
			rightSlideBtn.style.opacity = "0";
		} else {
			rightSlideBtn.style.opacity = "1";
		}
	}

	leftSlideBtn.addEventListener("click", () => {
		reviewsCardContainer.scrollLeft -= 300;
		updateButtonVisibility();
	});
	rightSlideBtn.addEventListener("click", () => {
		reviewsCardContainer.scrollLeft += 300;
		updateButtonVisibility();
	});
	updateButtonVisibility() 
};
cardSliderAboutSection();