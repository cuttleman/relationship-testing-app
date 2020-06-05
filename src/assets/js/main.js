import { resultCases } from "./resultCases";

const selectBtn = document.querySelectorAll(".button");
const first = document.querySelector(".slide:nth-child(1)");
const last = document.querySelector(".slide:nth-child(14)");
const loadedMain = document.querySelector("main");
const loadingAni = document.getElementById("jsResorceLoading");

const selectNums = [];
const nextSlideEvent = (duration = 0, event = null) => {
  if (event) {
    const { id: parent } = event.target.parentNode.dataset;
    const { id: child } = event.target.dataset;
    if (parent) {
      selectNums.push(parent);
    } else if (child) {
      selectNums.push(child);
    }
  }
  // 매 함수 호출시마다 브라우저 width 길이를 업뎃함 -> 애니메이션 변수로 사용하기떄문
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
    last.id = PREV;
    first.nextSibling.id = NEXT;
  } else {
    if (prevEl) {
      prevEl.removeAttribute("id");
    }
    activeEl.id = PREV;
    nextEl.id = ACTIVE;
    if (!nextEl.nextSibling) {
      first.id = NEXT;
    } else {
      nextEl.nextSibling.id = NEXT;
    }

    first.removeAttribute("style");
    activeEl.removeAttribute("style");
    const loadingScreen = nextEl.className.includes("loading");

    // select 버튼 이벤트 nesting 오류 fix
    setTimeout(() => {
      nextEl.style.pointerEvents = "initial";
    }, duration + 500);
    // loading finish animation
    if (loadingScreen) {
      const loadingEl = document.getElementById("jsLoadingAnimation");
      const resultGoEl = document.getElementById("jsResultBtn");
      setTimeout(() => {
        loadingEl.innerHTML = "<span>분석 완료</span>";
        resultGoEl.style.opacity = "1";
        resultGoEl.style.pointerEvents = "initial";
      }, 4000);
    }
    // result image convert
    if (selectNums.length === 12) {
      setTimeout(() => {
        resultCases(selectNums);
      }, duration);
    }
  }
};

const touchStartPrevent = (event) => {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
};

let lastTouchEnd = 0;
const touchEndPrevent = (event) => {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
};

const init = () => {
  document.documentElement.addEventListener(
    "touchstart",
    touchStartPrevent,
    false
  );
  document.documentElement.addEventListener("touchend", touchEndPrevent, false);

  window.addEventListener("load", () => {
    setTimeout(() => {
      loadedMain.style.display = "flex";
      loadingAni.style.display = "none";
    }, 1500);
  });

  nextSlideEvent();
  selectBtn.forEach(
    (button) =>
      button.addEventListener("click", (event) => nextSlideEvent(600, event)) // 애니메이션 속도, 클릭이벤트
  );
};

init();
