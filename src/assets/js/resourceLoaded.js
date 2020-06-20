const images = document.querySelectorAll("img");
const loadedMain = document.querySelector("main");
const loadingAni = document.getElementById("jsResorceLoading");

const loadHandler = () => {
  let imageLoaded = false;
  for (let i = 0; i < images.length; i++) {
    images[i].src = images[i].dataset.src;
    if (i === images.length - 1) {
      imageLoaded = true;
    }
  }
  if (imageLoaded) {
    setTimeout(() => {
      loadedMain.style.display = "flex";
      loadingAni.style.display = "none";
    }, 300);
  }
};

export const resourceLoaded = () =>
  window.addEventListener("load", loadHandler);
