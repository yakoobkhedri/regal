// swiper
var banner = new Swiper(".banner", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
var brands = new Swiper(".brands", {
  loop: true,
  autoplay: true,
  slidesPerView: 2.5,
  spaceBetween: 48,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    }
  },
});
var gallery = new Swiper(".gallery", {
  loop: true,
  autoplay: true,
  slidesPerView: 2,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});
// aos
AOS.init();

// accordion

let accordionBtn=Array.from(document.getElementsByClassName('accordion-btn'));
let accordionContent=Array.from(document.getElementsByClassName('accordion-content'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click',function () {
    accordionContent.forEach((items)=>{items.classList.remove('active')});
    accordionBtn.forEach((items)=>{items.classList.remove('active')});
    item.classList.add('active');
    item.nextElementSibling.classList.add('active');
  })
})