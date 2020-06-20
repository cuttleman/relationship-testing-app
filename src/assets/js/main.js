import { getMobileOS } from "./getMobileOS";
import { sliderEvent } from "./sliderEvent";
import { resourceLoaded } from "./resourceLoaded";
import { bookLinkEvent } from "./bookLinkEvent";
import { touchStartPrevent, touchEndPrevent } from "./touchHandler";

const init = () => {
  // 이미지 저작권 경고문
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
  // 이미지 확대, 화면 드래그 prevent
  touchStartPrevent();
  touchEndPrevent();

  // 리소스 로딩 이벤트
  resourceLoaded();

  // 모바일 OS 체크
  getMobileOS();

  // 슬라이드 이벤트
  sliderEvent();

  // 책 링크 공유 이벤트
  bookLinkEvent();
};

init();
