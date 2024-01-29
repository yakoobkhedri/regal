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
  }
});
var brands = new Swiper(".brands", {
  loop: true,
  autoplay: true,
  slidesPerView: 2.7,
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
var services = new Swiper(".services", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 32,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 48,
    },
    992: {
      slidesPerView: 6,
    },
    1200: {
      slidesPerView: 7,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

// service slider tab

let SlideHover=Array.from(document.getElementsByClassName('slide-hover'));
let slideContent=Array.from(document.getElementsByClassName('slide-content'));
let SlideHover2=Array.from(document.getElementsByClassName('slide-hover2'));
let slideContent2=Array.from(document.getElementsByClassName('slide-content2'));

SlideHover.forEach((tab) => {
  tab.addEventListener('click', function() {
    SlideHover.forEach((tabs) => {tabs.classList.remove('active')});
    tab.classList.add('active');
      let tabId = tab.dataset.id;
      slideContent.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.classList.remove('d-none');
              content.classList.add('d-block');
          } else {
              content.classList.add('d-none');
              content.classList.remove('d-block');
          }
      })
  })
})
SlideHover2.forEach((tab) => {
  tab.addEventListener('click', function() {
    SlideHover2.forEach((tabs) => {tabs.classList.remove('active')});
    tab.classList.add('active');
      let tabId = tab.dataset.id;
      slideContent2.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
            content.classList.remove('d-none');
            content.classList.add('d-block');
        } else {
            content.classList.add('d-none');
            content.classList.remove('d-block');
          }
      })
  })
})
  // gallery Fancybox
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
    
  });