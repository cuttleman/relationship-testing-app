import { resultCases } from "./resultCases";
import htmlToImage from "html-to-image";

const selectBtn = document.querySelectorAll(".button");
const first = document.querySelector(".slide:nth-child(1)");
const last = document.querySelector(".slide:nth-child(14)");
const loadedMain = document.querySelector("main");
const loadingAni = document.getElementById("jsResorceLoading");
const images = document.querySelectorAll("img");
const resultScreen = document.querySelector(".result");

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
      }, 4000);
    }
    // result image convert
    if (selectNums.length === 12) {
      setTimeout(() => {
        resultCases(selectNums);
      }, duration);
    }
    //
    if (resultScreen.id === "active") {
      const imgDownLink = document.querySelector(
        ".sharedSNS > .sharedImage > a"
      );
      setTimeout(() => {
        const resultImage = document.querySelector(".show");
        htmlToImage.toPng(resultImage).then(function (dataUrl) {
          imgDownLink.download = "userType.png";
          imgDownLink.href = dataUrl;
        });
      }, 1200);
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
  console.warn(
    `
    %c저작권%c이 등록되어있는 작가의 일러스트입니다.
    무단 도용시 %c법적 책임%c을 물을 수 있습니다.
    `,
    "color: red; font-size: 20px; font-weight:bold",
    "color: black; font-size: 15px; font-weight:bold;",
    "color: red; font-size: 20px; font-weight: bold;",
    "color: black; font-size: 15px; font-weight:bold;"
  );
  document.documentElement.addEventListener(
    "touchstart",
    touchStartPrevent,
    false
  );
  document.documentElement.addEventListener("touchend", touchEndPrevent, false);

  window.addEventListener("load", () => {
    for (let i = 0; i < images.length; i++) {
      images[i].src = images[i].dataset.src;
    }
    setTimeout(() => {
      loadedMain.style.display = "flex";
      loadingAni.style.display = "none";
    }, 500);
  });

  nextSlideEvent();

  for (let i = 0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener("click", (event) =>
      nextSlideEvent(600, event)
    ); // 딜레이 속도, 클릭이벤트
  }
};

init();
