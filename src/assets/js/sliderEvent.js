import { resultCases } from "./resultCases";

const selectBtn = document.querySelectorAll(".button");
const first = document.querySelector(".slide:nth-child(1)");
const last = document.querySelector(".slide:nth-child(14)");

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
    const loadingScreen = document.querySelector(".loading");

    // select 버튼 이벤트 nesting 오류 fix
    setTimeout(() => {
      nextEl.style.pointerEvents = "initial";
    }, duration + 200);

    // loading finish animation
    if (loadingScreen.id === "active") {
      const loadingEl = document.getElementById("jsLoadingAnimation");
      const resultGoEl = document.getElementById("jsResultBtn");
      setTimeout(() => {
        loadingEl.innerHTML = "<span>분석 완료</span>";
        resultGoEl.style.opacity = "1";
        resultGoEl.style.pointerEvents = "initial";
      }, 2800);
    }
    // result image convert
    if (selectNums.length === 12) {
      setTimeout(() => {
        resultCases(selectNums);
      }, duration);
    }
  }
};

export const sliderEvent = () => {
  nextSlideEvent(); // 첫페이지 로드
  for (let i = 0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener("click", (event) =>
      nextSlideEvent(600, event)
    ); // 딜레이 속도, 클릭이벤트
  }
};
