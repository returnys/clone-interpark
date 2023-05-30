// html, css, js, image, font, video...
// 사용되는 리소스가 모두 로드가 완료되고 나서
// js를 실행하여야 정상적인 처리가 가능하다
window.onload = function () {
  // 모달창 처리
  let body = document.querySelector("body");
  body.classList.add("modal-active");
  let modal = document.querySelector(".modal");
  modal.onclick = function () {
    body.classList.remove("modal-active");
    this.style.display = "none";
  };
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
  pmxhttp.open("GET", "data/pmdata.json");
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
};
