const touchStarthandler = (event) => {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
};

let lastTouchEnd = 0;
const touchEndHandler = (event) => {
  const now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
};

export const touchStartPrevent = () =>
  document.documentElement.addEventListener(
    "touchstart",
    touchStarthandler,
    false
  );

export const touchEndPrevent = () =>
  document.documentElement.addEventListener("touchend", touchEndHandler, false);
