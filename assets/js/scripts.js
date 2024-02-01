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

let accordionBtn = Array.from(document.getElementsByClassName('accordion-btn'));
let accordionContent = Array.from(document.getElementsByClassName('accordion-content'));

accordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    accordionContent.forEach((items) => { items.classList.remove('active') });
    accordionBtn.forEach((items) => { items.classList.remove('active') });
    item.classList.add('active');
    item.nextElementSibling.classList.add('active');
  })
})

// service slider tab

let SlideHover = Array.from(document.getElementsByClassName('slide-hover'));
let serviceMnu = Array.from(document.getElementsByClassName('serviceMnu'));
let serviceMnu2 = Array.from(document.getElementsByClassName('serviceMnu2'));
let slideContent = Array.from(document.getElementsByClassName('slide-content'));
let cleanContent = Array.from(document.getElementsByClassName('clean-content'));
let tailorContent = Array.from(document.getElementsByClassName('tailor-content'));
let SlideHover2 = Array.from(document.getElementsByClassName('slide-hover2'));
let slideBtn = Array.from(document.getElementsByClassName('slide-btn'));
let slideContent2 = Array.from(document.getElementsByClassName('slide-content2'));

serviceMnu.forEach((tab) => {
  tab.addEventListener('click', function () {
    let tabId = tab.dataset.service;
    cleanContent.forEach((content) => {
      let contentId = content.dataset.service;
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
serviceMnu.forEach((tab) => {
  tab.addEventListener('click', function () {
    let tabId = tab.dataset.service;
    SlideHover2.forEach((content) => {
      let contentId = content.dataset.service;
      if (tabId === contentId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    })
  })
})
serviceMnu2.forEach((tab) => {
  tab.addEventListener('click', function () {
    let tabId = tab.dataset.service2;
    tailorContent.forEach((content) => {
      let contentId = content.dataset.service2;
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
serviceMnu2.forEach((tab) => {
  tab.addEventListener('click', function () {
    let tabId = tab.dataset.service2;
    SlideHover.forEach((content) => {
      let contentId = content.dataset.service2;
      if (tabId === contentId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    })
  })
})
SlideHover.forEach((tab) => {
  tab.addEventListener('click', function () {
    SlideHover.forEach((tabs) => { tabs.classList.remove('active') });
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
  tab.addEventListener('click', function () {
    SlideHover2.forEach((tabs) => { tabs.classList.remove('active') });
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
Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery2"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery3"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery4"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery5"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery6"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery7"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery8"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery9"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery10"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery11"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery12"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery13"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery14"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery15"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery16"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery17"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery18"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery19"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery20"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery21"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery22"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery23"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery24"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery25"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery26"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery27"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery28"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery29"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery30"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery31"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery32"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery33"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery34"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery35"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery36"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery37"]', {
  // Your custom options for a specific gallery
});
Fancybox.bind('[data-fancybox="gallery38"]', {
  // Your custom options for a specific gallery
});
// faq tab

let faqsTab = Array.from(document.getElementsByClassName('faqsTab'));
let faqTabContent = Array.from(document.getElementsByClassName('faqTabContent'));

faqsTab.forEach((tab) => {
  tab.addEventListener('click', function () {
    faqsTab.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    faqTabContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.remove('d-none');
        content.classList.add('d-flex');
      } else {
        content.classList.add('d-none');
        content.classList.remove('d-flex');
      }
    })
  })
})

// datapicker
$(function () {
  $('input[name="date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'), 10)
  });
});