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
    img.id = "resultSharedImage";
    img.src =
      "https://mestuss.github.io/images-fonts/images/jeokdanghi/sharedImages/type-one.png";
    sharedImage.appendChild(img);
  } else if (two > one && two > three && two > four) {
    main.classList.add("typeTwo");
    typeTwo.classList.add("show");
    img.id = "resultSharedImage";
    img.src =
      "https://mestuss.github.io/images-fonts/images/jeokdanghi/sharedImages/type-two.png";
    sharedImage.appendChild(img);
  } else if (three > one && three > two && three > four) {
    main.classList.add("typeThree");
    typeThree.classList.add("show");
    img.id = "resultSharedImage";
    img.src =
      "https://mestuss.github.io/images-fonts/images/jeokdanghi/sharedImages/type-three.png";
    sharedImage.appendChild(img);
  } else if (four > one && four > two && four > three) {
    main.classList.add("typeFour");
    typeFour.classList.add("show");
    img.id = "resultSharedImage";
    img.src =
      "https://mestuss.github.io/images-fonts/images/jeokdanghi/sharedImages/type-four.png";
    sharedImage.appendChild(img);
  } else {
    if (three === two || three === four) {
      main.classList.add("typeThree");
      typeThree.classList.add("show");
      img.id = "resultSharedImage";
      img.src =
        "https://mestuss.github.io/images-fonts/images/jeokdanghi/sharedImages/type-three.png";
      sharedImage.appendChild(img);
    } else if (two === one || two === four) {
      main.classList.add("typeTwo");
      typeTwo.classList.add("show");
      img.id = "resultSharedImage";
      img.src =
        "https://mestuss.github.io/images-fonts/images/jeokdanghi/sharedImages/type-two.png";
      sharedImage.appendChild(img);
    } else if (one === four) {
      main.classList.add("typeFour");
      typeFour.classList.add("show");
      img.id = "resultSharedImage";
      img.src =
        "https://mestuss.github.io/images-fonts/images/jeokdanghi/sharedImages/type-four.png";
      sharedImage.appendChild(img);
    } else if (one === three) {
      main.classList.add("typeOne");
      typeOne.classList.add("show");
      img.id = "resultSharedImage";
      img.src =
        "https://mestuss.github.io/images-fonts/images/jeokdanghi/sharedImages/type-one.png";
      sharedImage.appendChild(img);
    } else {
      main.classList.add("typeThree");
      typeThree.classList.add("show");
      img.id = "resultSharedImage";
      img.src =
        "https://mestuss.github.io/images-fonts/images/jeokdanghi/sharedImages/type-three.png";
      sharedImage.appendChild(img);
    }
  }
};
