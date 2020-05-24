const selectBtn = document.querySelectorAll(".buttons");
const first = document.querySelector(".slide:nth-child(1)");

const nextSlideEvent = (duration = 0, opacityDuration = 0, isSlide = false) => {
  // 매 함수 호출시마다 브라우저 width 길이를 업뎃함 -> 애니메이션 변수로 사용하기떄문
  const WINDOW = window.innerWidth;
  const PREV = "prev";
  const ACTIVE = "active";
  const NEXT = "next";
  const activeEl = document.getElementById(ACTIVE);
  const nextEl = document.getElementById(NEXT);
  const prevEl = document.getElementById(PREV);
  if (!activeEl) {
    first.id = ACTIVE;
    first.style.zIndex = 1;
    first.style.opacity = 1;
    first.style.pointerEvents = "initial";
    first.nextElementSibling.id = NEXT;
  } else {
    if (prevEl) {
      prevEl.removeAttribute("id");
    }
    activeEl.id = PREV;
    nextEl.id = ACTIVE;
    first.removeAttribute("style");
    activeEl.animate(
      // 실행 시점에선 nextEl은 Prev 상태의 Element를 가리킴
      {
        transform: isSlide ? [`translateX(0)`, `translateX(-${WINDOW}px)`] : [],
        zIndex: [1, 1],
        opacity: [1, 0],
        pointerEvents: ["initial", "none"],
      },
      { duration: duration ? duration : 0, fill: "forwards" }
    );
    nextEl.animate(
      // 실행 시점에선 nextEl은 현재 Active 상태의 Element를 가리킴
      {
        transform: isSlide ? [`translateX(${WINDOW}px)`, `translateX(0)`] : [],
        zIndex: [1, 2],
        opacity: [0, 1],
        pointerEvents: ["none", "initial"],
      },
      {
        duration: duration ? duration : 0,
        fill: "forwards",
        delay: opacityDuration,
      }
    );
    if (!nextEl.nextElementSibling) {
      first.id = NEXT;
    } else {
      nextEl.nextElementSibling.id = NEXT;
    }
  }
};

nextSlideEvent();
selectBtn.forEach(
  (button) =>
    button.addEventListener("click", () => nextSlideEvent(600, 1000, false)) // 애니메이션 속도, 딜레이시간, 슬라이드 온오프(기본 fasle)
);
// setInterval(() => nextSlideEvent(1000), 3500);
