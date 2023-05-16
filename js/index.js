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
  // 1번. 백틱을 이용한 html 생성
  // 2번. json 데이터로 뽑아보기
  // .sw-promotion 에 출력할 html 저장
  // for 문을 이용한 데이터 html 생성
  // json 형태 : JavaScript Object Notaition 형식의 데이터
  // pmdata.json을 불러와서 배치한다.
  let swPromotionData;
  const pmxhttp = new XMLHttpRequest();
  pmxhttp.onreadystatechange = function (event) {
    const req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      // console.log(req.response);
      // 현재 전달된 문자들은 json이 아니다
      // req.response는 데이터 타입이 문자열이다
      // 문자열을 json 객체로 변경하는 작업을 해야한다
      swPromotionData = JSON.parse(req.response);
      makePromotionSlide();
    }
  };
  pmxhttp.open("GET", "pmdata.json");
  pmxhttp.send();
  function makePromotionSlide() {
    let swPromotionHtml = ``;
    for (let i = 0; i < swPromotionData.good_count; i++) {
      let obj = swPromotionData[`good_${i + 1}`];
      let html = `<div class="swiper-slide">
        <a href="${obj.link}">
          <img src="images/${obj.img}" alt="${obj.name}"></a>
      </div>`;
      swPromotionHtml += html;
    }
    // 위의 백틱 내용을 넣어줄 장소를 저장
    let swPromotionWrapper = document.querySelector(
      ".sw-promotion .swiper-wrapper"
    );
    swPromotionWrapper.innerHTML = swPromotionHtml;
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
  }

  // Shopping Swiper
  let swShoppingData;
  const shopXhttp = new XMLHttpRequest();
  shopXhttp.onreadystatechange = function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      swShoppingData = JSON.parse(req.response);
      makeShoppingSlide();
    }
  };
  shopXhttp.open("GET", "shoppingdata.json");
  shopXhttp.send();
  function makeShoppingSlide() {
    let swShoppingHtml = ``;
    for (let i = 0; i < swShoppingData.good_count; i++) {
      let obj = swShoppingData[`good_${i + 1}`];
      let temp = `
    <div class="swiper-slide">
      <a href="${obj.link}" class="good">
        <img src="images/${obj.pic}" alt="${obj.product}" />
        <div class="good-info">
          <ul class="good-info-list">
            <li>
              <b><span>${obj.ratio}%</span> ${obj.price}원</b>
            </li>
            <li><p>${obj.product}</p></li>
          </ul>
        </div>
      </a>
    </div>
    `;
      swShoppingHtml += temp;
    }
    let swShoppingWrapper = document.querySelector(
      ".sw-shopping .swiper-wrapper"
    );
    swShoppingWrapper.innerHTML = swShoppingHtml;
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
  }

  // tour Swiper
  let swTourData;
  const tourXhttp = new XMLHttpRequest();
  tourXhttp.onreadystatechange = function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      swTourData = JSON.parse(req.response);
      makeTourSlide();
    }
  };
  tourXhttp.open("GET", "tourdata.json");
  tourXhttp.send();
  function makeTourSlide() {
    let swTourHtml = ``;
    for (let i = 0; i < swTourData.tour_count; i++) {
      let obj = swTourData[`tour_${i + 1}`];
      let temp = `
      <div class="swiper-slide">
        <a href="${obj.link}" class="tour-link">
          <div class="tour-img">
            <img src="images/${obj.pic}" alt="${obj.alt}" />
          </div>
          <div class="tour-info">
            <ul class="tour-info-list">
              <li><span class="tour-cate">${obj.category}</span></li>
              <li>
                <span class="tour-title"
                  >${obj.title}</span
                >
              </li>
              <li>
                <span class="tour-place">${obj.place}</span>
              </li>
              <li>
                <span class="tour-price"><b>${obj.price}</b>원~</span>
              </li>
            </ul>
          </div>
        </a>
      </div>
      `;
      swTourHtml += temp;
    }
    let swTourWrapper = document.querySelector(".sw-tour .swiper-wrapper");
    swTourWrapper.innerHTML = swTourHtml;
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
  }

  //  ticket Swiper
  let swTicketData;
  const ticketXhttp = new XMLHttpRequest();
  ticketXhttp.onreadystatechange = function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      swTicketData = JSON.parse(req.response);
      makeTicketSlide();
    }
  };
  ticketXhttp.open("GET", "ticketdata.json");
  ticketXhttp.send();
  function makeTicketSlide() {
    let swTicketHtml = ``;
    for (let i = 0; i < swTicketData.good_count; i++) {
      let obj = swTicketData[`good_${i + 1}`];
      let temp = `
      <div class="swiper-slide">
        <a href="${obj.link}" class="ticket-link">
          <div class="ticket-img">
            <img src="images/${obj.pic}" alt="${obj.alt}" />
            <span class="ticket-rank">${obj.rank}</span>
          </div>
          <div class="ticket-info">
            <ul class="ticket-info-list">
              <li>
                <span class="ticket-title"
                  ><b>${obj.title}</b></span
                >
              </li>
              <li>
                <span class="ticket-hall">${obj.hall}</span>
              </li>
              <li>
                <span class="ticket-date"
                  >${obj.date}</span
                >
              </li>
              <li><span class="ticket-sale">${obj.sale}</span></li>
            </ul>
          </div>
        </a>
      </div>
      `;
      swTicketHtml += temp;
    }
    let swTicketWrapper = document.querySelector(".sw-ticket .swiper-wrapper");
    swTicketWrapper.innerHTML = swTicketHtml;
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
  }

  // live Swiper
  let swLiveData;
  const liveXhttp = new XMLHttpRequest();
  liveXhttp.onreadystatechange = function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      swLiveData = JSON.parse(req.response);
      makeLiveSlide();
    }
  };
  liveXhttp.open("GET", "livedata.json");
  liveXhttp.send();
  function makeLiveSlide() {
    let swLiveHtml = ``;
    for (let i = 0; i < swLiveData.good_count; i++) {
      let obj = swLiveData[`good_${i + 1}`];
      let temp = `
      <div class="swiper-slide">
        <a href="${obj.link}" class="live-link">
          <div class="live-img">
            <img src="images/${obj.pic}" alt="${obj.alt}" />
          </div>
          <div class="live-info">
            <div class="live-info-top">
              <span class="live-info-cate">${obj.category}</span>
              <p class="live-info-title">
                ${obj.title}
              </p>
            </div>
            <div class="live-info-main">
              <p class="live-info-date">${obj.date}</p>
              <p class="live-info-time">${obj.time}</p>
            </div>
            <div class="live-info-bottom clearfix">
              <div class="live-info-thumb">
                <img src="images/${obj.subpic}" alt="${obj.alt}" />
              </div>
              <div class="live-info-desc">
                <p class="live-info-desc-title">
                  ${obj.subtitle}
                </p>
                <p class="live-info-desc-price">
                  <em>${obj.ratio}</em><b>${obj.price}</b>원
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      `;
      swLiveHtml += temp;
    }
    let swLiveWrapper = document.querySelector(".sw-live .swiper-wrapper");
    swLiveWrapper.innerHTML = swLiveHtml;
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
  }

  // books Swiper
  let swBooksData;
  const booksXhttp = new XMLHttpRequest();
  booksXhttp.onreadystatechange = function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      swBooksData = JSON.parse(req.response);
      makeBooksSlide();
    }
  };
  booksXhttp.open("GET", "booksdata.json");
  booksXhttp.send();
  function makeBooksSlide() {
    let swBooksHtml = ``;
    for (let i = 0; i < swBooksData.good_count; i++) {
      let obj = swBooksData[`good_${i + 1}`];
      let temp = `
      <div class="swiper-slide">
        <a href="${obj.link}" class="books-link">
          <div class="books-img">
            <img src="images/${obj.pic}" alt="${obj.alt}" />
          </div>
          <div class="books-info">
            <p class="books-info-title">${obj.title}</p>
            <p class="books-info-price"><em>${obj.price}</em>원</p>
          </div>
        </a>
      </div>
      `;
      swBooksHtml += temp;
    }
    let swBooksWrapper = document.querySelector(".sw-books .swiper-wrapper");
    swBooksWrapper.innerHTML = swBooksHtml;
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
  }

  // events Swiper
  let swEventsData;
  const eventsXhttp = new XMLHttpRequest();
  eventsXhttp.onreadystatechange = function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      swEventsData = JSON.parse(req.response);
      makeEventsSlide();
    }
  };
  eventsXhttp.open("GET", "eventsdata.json");
  eventsXhttp.send();
  function makeEventsSlide() {
    let swEventsHtml = ``;
    for (let i = 0; i < swEventsData.good_count; i++) {
      let obj = swEventsData[`good_${i + 1}`];
      let temp = `
      <div class="swiper-slide">
        <a href="${obj.link}" class="events-link">
          <img src="images/${obj.pic}" alt="${obj.alt}" />
        </a>
      </div>
      `;
      swEventsHtml += temp;
    }
    let swEventsWrapper = document.querySelector(".sw-events .swiper-wrapper");
    swEventsWrapper.innerHTML = swEventsHtml;
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
  }
};
