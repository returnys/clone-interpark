// html, css, js, image, font, video...
// 사용되는 리소스가 모두 로드가 완료되고 나서
// js를 실행하여야 정상적인 처리가 가능하다
window.onload = function () {
  // 위로 이동하기
  // .gotopdmf js에 저장하자
  const goTop = document.querySelector(".gotop");
  // goTop 클릭을 처리한다
  goTop.addEventListener("click", function () {
    // 위로 슬라이딩 코드
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  // Initialize Swiper
  let promotionSwiper = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination: {
      el: ".sw-promotion-pg",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });
  // Shopping Swiper
  let shoppingSwiper = new Swiper(".sw-shopping", {
    slidesPerView: 5,
    spaceBetween: 10,
    grid: {
      rows: 2,
      fill: "row",
    },
    navigation: {
      nextEl: ".shopping .sw-next",
      prevEl: ".shopping .sw-prev",
    },
    breakpoints: {
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        // 화면당 3개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
  });
  // tour Swiper
  let tourSwiper = new Swiper(".sw-tour", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
    grid: {
      rows: 2,
      fill: "row",
    },
    breakpoints: {
      1024: {
        spaceBetween: 24,
        slidesPerView: 2,
        // 화면당 3개씩 슬라이드 이동
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 3,
        // 화면당 4개씩 슬라이드 이동
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
    },
  });
  //  ticket Swiper
  let ticketSwiper = new Swiper(".sw-ticket", {
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: ".ticket .sw-next",
      prevEl: ".ticket .sw-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });
  // live Swiper
  let liveSwiper = new Swiper(".sw-live", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: ".live .sw-next",
      prevEl: ".live .sw-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });
  // books Swiper
  let booksSwiper = new Swiper(".sw-books", {
    slidesPerView: 3,
    spaceBetween: 19,
    navigation: {
      nextEl: ".books .sw-next",
      prevEl: ".books .sw-prev",
    },
    grid: {
      rows: 4,
      fill: "row",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 27,
        slidesPerGroup: 5,
        grid: {
          rows: 1,
          fill: "row",
        },
      },
    },
  });
  // events Swiper
  let eventsSwiper = new Swiper(".sw-events", {
    slidesPerView: 3,
    spaceBetween: 27,
    navigation: {
      nextEl: ".event .sw-next",
      prevEl: ".event .sw-prev",
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 27,
      },
    },
  });
};
