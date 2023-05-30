/**
 * 작성자 : 손용수
 * 연락처 : aaa@aaa.net;
 * 작성일 : 23-05-22
 * 기능 : 투어 리스트 슬라이드 코드
 * 업데이트 : 각 tour 리스트 목록 출력 함수화 작업
 */
window.addEventListener("load", function () {
  // tour Swiper
  // tour 데이터 파싱 및 슬라이드 제작
  function parseTour(_cate) {
    if (_cate === "망설이면 품절") {
      fetch("data/tourdata.json")
        .then((res) => res.json())
        .then((result) => makeTourSlide(result))
        .catch((err) => console.log(err));
    } else if (_cate === "패키지") {
      fetch("data/tourdata1.json")
        .then((res) => res.json())
        .then((result) => makeTourSlide(result))
        .catch((err) => console.log(err));
    } else if (_cate === "숙소") {
      fetch("data/tourdata2.json")
        .then((res) => res.json())
        .then((result) => makeTourSlide(result))
        .catch((err) => console.log(err));
    } else if (_cate === "해외숙소") {
      fetch("data/tourdata3.json")
        .then((res) => res.json())
        .then((result) => makeTourSlide(result))
        .catch((err) => console.log(err));
    }
  }
  parseTour("망설이면 품절");
  let tourSwiper;
  function makeTourSlide(_data) {
    let swTourHtml = ``;
    for (let i = 0; i < _data.tour_total; i++) {
      let obj = _data[`tour_${i + 1}`];
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
                  >${obj.title}</span>
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
    if (tourSwiper) {
      tourSwiper.destroy();
    }
    tourSwiper = new Swiper(".sw-tour", {
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
  let btns = document.querySelectorAll(".tour .btns a");
  let cateName = ["망설이면 품절", "패키지", "숙소", "해외숙소"];
  btns[0].classList.add("btns-active");
  for (let i = 0; i < cateName.length; i++) {
    btns[i].onclick = function (event) {
      event.preventDefault();
      parseTour(cateName[i]);
      for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("btns-active");
      }
      this.classList.add("btns-active");
    };
  }
});
