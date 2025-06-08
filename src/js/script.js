//const body = document.querySelector('body');

const swiper = new Swiper('.swiper', {
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

	breakpoints: {
		640: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		1024: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
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

function accordion(accordionBlockSelector) {
	const accordionTitleAll = document.querySelectorAll(accordionBlockSelector + ' [data-accordion-title]');

	accordionTitleAll.forEach(function (item) {
		item.addEventListener('click', function () {
			if (item.classList.contains('active')) {
				item.classList.remove('active');
				return;
			} else {
				accordionTitleAll.forEach(function (i) {
					i.classList.remove('active');
				});
				item.classList.add('active');
			}
		});
	});
}

accordion('.accordionFaq');

const header = document.querySelector('.header');
const toggleClass = 'on_scroll';

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll > 50) {
		header.classList.add(toggleClass);
	} else {
		header.classList.remove(toggleClass);
	}
});

const video = document.getElementById('myVideo');

video.addEventListener('click', function () {
	video.play();
});

video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.load();
  });