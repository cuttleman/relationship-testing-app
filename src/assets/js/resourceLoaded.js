const images = document.querySelectorAll("img");
const loadedMain = document.querySelector("main");
const loadingAni = document.getElementById("jsResorceLoading");

const loadHandler = () => {
  for (let i = 0; i < images.length; i++) {
    images[i].src = images[i].dataset.src;
  }
  images[images.length - 1].addEventListener("load", () => {
    loadedMain.style.display = "flex";
    loadingAni.style.display = "none";
  });
};

export const resourceLoaded = () =>
  window.addEventListener("load", loadHandler);
