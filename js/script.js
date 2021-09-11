//  webp

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('webp');
	} else {
		document.querySelector('html').classList.add('no-webp');
	}
});



const sliderRow = document.querySelector('.slider__row-photo')
const slides = sliderRow.querySelectorAll('.slider__photo')
const slidesCount = sliderRow.querySelectorAll('.slider__photo').length

const btnL = document.querySelector('.slider__nav-left')
const btnR = document.querySelector('.slider__nav-right')

const dots = document.querySelectorAll('.slider__status')
const thumbs = document.querySelectorAll('.slider__thumb')

btnL.addEventListener('click', () => { changeSlide('left') })
btnR.addEventListener('click', () => { changeSlide('right') })
let count = 1;

function changeSlide(el) {

	// длина одного слайда
	const widthSlide = document.querySelector('.slider__photo').offsetWidth

	console.log(count);

	if (el === 'left') {

		if (count > 1) {
			count--
			let newSlidePos = (count - 1) * widthSlide
			sliderRow.style.left = `-${newSlidePos}px`
		}
		else if (count === 1) {
			count = slidesCount
			let newSlidePos = (count - 1) * widthSlide
			sliderRow.style.left = `-${newSlidePos}px`
		}

	}


	else if (el === 'right') {

		if (count < slidesCount) {
			count++
			let newSlidePos = (count - 1) * widthSlide
			sliderRow.style.left = `-${newSlidePos}px`
		}
		else if (count = slidesCount) {
			count = 1
			sliderRow.style.left = '0px'
		}

	}
	setDots()
}

function setDots() {

	dots.forEach(el => {
		el.classList.remove('active')
	})
	dots[count - 1].classList.add('active')
}

thumbs.forEach(el => {
	el.addEventListener('click', () => {
		for (i = 0; i < thumbs.length; i++) {
			if (el === thumbs[i]) {
				count = i;
				console.log(count);
				changeSlide('right')
				return
			}
		}
	})
})

