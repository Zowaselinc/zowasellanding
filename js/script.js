$(".blog-active").slick({
	dots: true,
	arrows: false,
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
});

// get all zowasel benefit buttons and associated information
let benefitBtns = document.querySelectorAll(".zowa-benefits");
let benefitDetails = document.querySelectorAll(".zowa-benefits-details");

// remove the hide class from the first benefit content by default
const hideAllBenefitContent = () => {
	for (let i = 0; i < benefitDetails.length; i++) {
		benefitDetails[i].classList.add("d-none");
		console.log(benefitDetails[i]);
	}
};
hideAllBenefitContent();

benefitDetails[0].classList.remove("d-none");
// make the details of the clicked benefit button visible
for (let i = 0; i < benefitBtns.length; i++) {
	benefitBtns[i].addEventListener("click", () => {
		hideAllBenefitContent();
		benefitDetails[i].classList.remove("d-none");
	});
}