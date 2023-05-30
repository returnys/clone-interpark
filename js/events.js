/**
 * 작성자 : 손용수
 * 연락처 : aaa@aaa.net;
 * 작성일 : 23-05-22
 * 기능 : 이벤트 리스트 슬라이드 코드
 * 업데이트 : 각 event 리스트 목록 출력 함수화 작업
 */
window.addEventListener("load", function () {
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
  eventsXhttp.open("GET", "data/eventsdata.json");
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
});
