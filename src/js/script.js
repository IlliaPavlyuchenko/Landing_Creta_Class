//const body = document.querySelector('body');

const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	loop: true,
	spaceBetween: 40,
	// Navigation arrows
	navigation: {
		nextEl: '.learningSliderNext',
		prevEl: '.learningSliderPrev',
	},

	pagination: {
		el: '.learningSliderPag',
		clickable: true,
	},
});

function tabs(tabsBlockSelector) {
	const tabsNavAll = document.querySelectorAll(`${tabsBlockSelector} [data-tab]`);
	const tabsContentAll = document.querySelectorAll(`${tabsBlockSelector} [data-tab-content]`);

	tabsNavAll.forEach(tabNav => {
		tabNav.addEventListener('click', event => {
			// Check if the tab is already active
			if (tabNav.classList.contains('active')) return;
			// Remove the active class from all tabs and content

			tabsNavAll.forEach(nav => nav.classList.remove('active'));
			tabsContentAll.forEach(content => content.classList.remove('active'));

			// Add the active class to the current tab
			tabNav.classList.add('active');

			// Find the corresponding content
			const targetContentId = event.currentTarget.dataset.tab;
			const targetContent = document.querySelector(`#${targetContentId}`);

			// Check if the content exists
			if (targetContent) {
				targetContent.classList.add('active');
			} else {
				console.error(`Content with id="${targetContentId}" not found!`);
			}
		});
	});
}

tabs('.tabsBlock1');