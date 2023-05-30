/**
 * 작성자 : 손용수
 * 연락처 : aaa@aaa.net;
 * 작성일 : 23-05-22
 * 기능 : 쇼핑몰 리스트 슬라이드 코드
 * 업데이트 : 각 shopping 리스트 목록 출력 함수화 작업
 */
window.addEventListener("load", function () {
  // Shopping Swiper
  // 메뉴를 실행 시 쇼핑 목록 slide 내용 변경
  function parseShopping(_menu) {
    // 전달된 매개변수 _menu에 따라서 관련된 json data를 불러들이고,
    if (_menu === "쎈딜") {
      fetch("data/shoppingdata.json")
        .then((res) => res.json())
        .then((result) => makeShoppingSlide(result))
        .catch((err) => console.log(err));
    } else if (_menu === "베스트") {
      fetch("data/shoppingdata1.json")
        .then((res) => res.json())
        .then((result) => makeShoppingSlide(result))
        .catch((err) => console.log(err));
    } else if (_menu === "오늘만특가") {
      fetch("data/shoppingdata2.json")
        .then((res) => res.json())
        .then((result) => makeShoppingSlide(result))
        .catch((err) => console.log(err));
    } else if (_menu === "어린이날") {
      fetch("data/shoppingdata3.json")
        .then((res) => res.json())
        .then((result) => makeShoppingSlide(result))
        .catch((err) => console.log(err));
    }
  }
  // html을 만들어서 slide를 만들어준다
  parseShopping("쎈딜");
  // swiper 슬라이드는 만들기 전에 삭제하자
  let shoppingSwiper;
  function makeShoppingSlide(_data) {
    let swShoppingHtml = ``;
    for (let i = 0; i < _data.shopping_total; i++) {
      let obj = _data[`shopping_${i + 1}`];
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
    // 새로 생성전에 swiper API를 이용해서 삭제한다
    if (shoppingSwiper) {
      shoppingSwiper.destroy();
    }
    shoppingSwiper = new Swiper(".sw-shopping", {
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
  // 버튼 클릭 시 카테고리 변경
  // 대상이 1개인 경우 querySelector
  // 대상이 여러개인 경우 querySelectorAll
  const btns = document.querySelectorAll(".shopping .btns a");
  let cateName = ["쎈딜", "베스트", "오늘만특가", "어린이날"];
  btns[0].classList.add("btns-active");
  for (let i = 0; i < cateName.length; i++) {
    btns[i].onclick = function (event) {
      event.preventDefault();
      parseShopping(cateName[i]);
      // 버튼 포커스 초기화
      for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("btns-active");
      }
      // 포커스 적용
      this.classList.add("btns-active");
    };
  }
  btns[4].onclick = function (event) {};
});
