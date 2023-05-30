/**
 * 작성자 : 손용수
 * 연락처 : aaa@aaa.net;
 * 작성일 : 23-05-22
 * 기능 : 이벤트 리스트 슬라이드 코드
 * 업데이트 : 각 event 리스트 목록 출력 함수화 작업
 */
window.addEventListener("load", function () {
  // events Swiper
  fetch("data/eventsdata.json")
    .then((res) => res.json())
    .then((result) => makeEventsSlide(result))
    .catch((err) => console.log(err));
  function makeEventsSlide(_data) {
    let swEventsHtml = ``;
    for (let i = 0; i < _data.good_count; i++) {
      let obj = _data[`good_${i + 1}`];
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
