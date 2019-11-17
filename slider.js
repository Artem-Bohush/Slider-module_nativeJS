function slider(slideClass, prevPhotoClass, nextPhotoClass, dotWrapperClass, dotClass) {
  const slides = document.querySelectorAll(`.${slideClass}`),
        prev = document.querySelector(`.${prevPhotoClass}`),
        next = document.querySelector(`.${nextPhotoClass}`),
        dotsWrap = document.querySelector(`.${dotWrapperClass}`),
        dots = document.querySelectorAll(`.${dotClass}`);

  let sliderIndex = 0;

  function showSlides(n) {
    if (n > slides.length - 1) {
      sliderIndex = 0;
    } else if (n < 0) {
      sliderIndex = slides.length - 1;
    }
    slides.forEach(item => item.style.display = 'none');
    dots.forEach(item => item.classList.remove('dot-active'));
    slides[sliderIndex].style.display = 'block';
    dots[sliderIndex].classList.add('dot-active');
  }
  showSlides(sliderIndex);

  function changeSlides(n) {
    showSlides(sliderIndex += n);
  }

  function showThisSlide(n) {
    showSlides(sliderIndex = n);
  }

  prev.addEventListener('click', () => changeSlides(-1));

  next.addEventListener('click', () => changeSlides(1));

  dotsWrap.addEventListener('click', event => {
    for (let i = 0; i < dots.length; i++) {
      if (event.target.classList.contains('dot') && event.target === dots[i]) {
        showThisSlide(i);
      }
    }
  });
}

export default slider;

// after importing the module - call function with passing corresponding classes to it
// slider('slider-item', 'prev', 'next', 'slider-dots', 'dot')
