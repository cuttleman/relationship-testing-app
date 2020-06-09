const main = document.querySelector("main");
const typeOne = document.querySelector(".type.type-one");
const typeTwo = document.querySelector(".type.type-two");
const typeThree = document.querySelector(".type.type-three");
const typeFour = document.querySelector(".type.type-four");

export const resultCases = (selectNums = []) => {
  const one = selectNums.filter((num) => num === "1").length;
  const two = selectNums.filter((num) => num === "2").length;
  const three = selectNums.filter((num) => num === "3").length;
  const four = selectNums.filter((num) => num === "4").length;

  const sharedImage = document.querySelector(".resultImage");
  const img = document.createElement("img");

  if (one > two && one > three && one > four) {
    main.classList.add("typeOne");
    typeOne.classList.add("show");
    img.src =
      "https://front-juno.github.io/images-fonts/images/%EA%B4%80%ED%83%9C%EA%B8%B0/%EA%B3%B5%EC%9C%A0%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%ED%98%951.png";
    sharedImage.appendChild(img);
  } else if (two > one && two > three && two > four) {
    main.classList.add("typeTwo");
    typeTwo.classList.add("show");
    img.src =
      "https://front-juno.github.io/images-fonts/images/%EA%B4%80%ED%83%9C%EA%B8%B0/%EA%B3%B5%EC%9C%A0%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%ED%98%952.png";
    sharedImage.appendChild(img);
  } else if (three > one && three > two && three > four) {
    main.classList.add("typeThree");
    typeThree.classList.add("show");
    img.src =
      "https://front-juno.github.io/images-fonts/images/%EA%B4%80%ED%83%9C%EA%B8%B0/%EA%B3%B5%EC%9C%A0%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%ED%98%953.png";
    sharedImage.appendChild(img);
  } else if (four > one && four > two && four > three) {
    main.classList.add("typeFour");
    typeFour.classList.add("show");
    img.src =
      "https://front-juno.github.io/images-fonts/images/%EA%B4%80%ED%83%9C%EA%B8%B0/%EA%B3%B5%EC%9C%A0%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%ED%98%954.png";
    sharedImage.appendChild(img);
  } else {
    if (three === one || three === two || three === four) {
      main.classList.add("typeThree");
      typeThree.classList.add("show");
      img.src =
        "https://front-juno.github.io/images-fonts/images/%EA%B4%80%ED%83%9C%EA%B8%B0/%EA%B3%B5%EC%9C%A0%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%ED%98%953.png";
      sharedImage.appendChild(img);
    } else if (two === one || two === four) {
      main.classList.add("typeTwo");
      typeTwo.classList.add("show");
      img.src =
        "https://front-juno.github.io/images-fonts/images/%EA%B4%80%ED%83%9C%EA%B8%B0/%EA%B3%B5%EC%9C%A0%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%ED%98%952.png";
      sharedImage.appendChild(img);
    } else if (one === four) {
      main.classList.add("typeFour");
      typeFour.classList.add("show");
      img.src =
        "https://front-juno.github.io/images-fonts/images/%EA%B4%80%ED%83%9C%EA%B8%B0/%EA%B3%B5%EC%9C%A0%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%ED%98%954.png";
      sharedImage.appendChild(img);
    } else {
      main.classList.add("typeThree");
      typeThree.classList.add("show");
      img.src =
        "https://front-juno.github.io/images-fonts/images/%EA%B4%80%ED%83%9C%EA%B8%B0/%EA%B3%B5%EC%9C%A0%EC%9D%B4%EB%AF%B8%EC%A7%80/%EC%9C%A0%ED%98%953.png";
      sharedImage.appendChild(img);
    }
  }
};
