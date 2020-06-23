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
  const defaultMeta = document.querySelector("meta[property='og:image']");

  const sharedImage = document.querySelector(".resultImage");
  const img = document.createElement("img");

  if (one > two && one > three && one > four) {
    main.classList.add("typeOne");
    img.id = "resultSharedImage";
    typeOne.classList.add("show");
    img.src = "https://hbird1005.dothome.co.kr/images/sharedImages/type1.png";
    sharedImage.appendChild(img);
    defaultMeta.content =
      "https://hbird1005.dothome.co.kr/images/sharedImages/type1.png";
  } else if (two > one && two > three && two > four) {
    main.classList.add("typeTwo");
    img.id = "resultSharedImage";
    typeTwo.classList.add("show");
    img.src = "https://hbird1005.dothome.co.kr/images/sharedImages/type2.png";
    sharedImage.appendChild(img);
    defaultMeta.content =
      "https://hbird1005.dothome.co.kr/images/sharedImages/type2.png";
  } else if (three > one && three > two && three > four) {
    main.classList.add("typeThree");
    img.id = "resultSharedImage";
    typeThree.classList.add("show");
    img.src = "https://hbird1005.dothome.co.kr/images/sharedImages/type3.png";
    sharedImage.appendChild(img);
    defaultMeta.content =
      "https://hbird1005.dothome.co.kr/images/sharedImages/type3.png";
  } else if (four > one && four > two && four > three) {
    main.classList.add("typeFour");
    img.id = "resultSharedImage";
    typeFour.classList.add("show");
    img.src = "https://hbird1005.dothome.co.kr/images/sharedImages/type4.png";
    sharedImage.appendChild(img);
    defaultMeta.content =
      "https://hbird1005.dothome.co.kr/images/sharedImages/type4.png";
  } else {
    if (three === two || three === four) {
      main.classList.add("typeThree");
      img.id = "resultSharedImage";
      typeThree.classList.add("show");
      img.src = "https://hbird1005.dothome.co.kr/images/sharedImages/type3.png";
      sharedImage.appendChild(img);
      defaultMeta.content =
        "https://hbird1005.dothome.co.kr/images/sharedImages/type3.png";
    } else if (two === one || two === four) {
      main.classList.add("typeTwo");
      img.id = "resultSharedImage";
      typeTwo.classList.add("show");
      img.src = "https://hbird1005.dothome.co.kr/images/sharedImages/type2.png";
      sharedImage.appendChild(img);
      defaultMeta.content =
        "https://hbird1005.dothome.co.kr/images/sharedImages/type2.png";
    } else if (one === four) {
      main.classList.add("typeFour");
      img.id = "resultSharedImage";
      typeFour.classList.add("show");
      img.src = "https://hbird1005.dothome.co.kr/images/sharedImages/type4.png";
      sharedImage.appendChild(img);
      defaultMeta.content =
        "https://hbird1005.dothome.co.kr/images/sharedImages/type4.png";
    } else if (one === three) {
      main.classList.add("typeOne");
      img.id = "resultSharedImage";
      typeOne.classList.add("show");
      img.src = "https://hbird1005.dothome.co.kr/images/sharedImages/type1.png";
      sharedImage.appendChild(img);
      defaultMeta.content =
        "https://hbird1005.dothome.co.kr/images/sharedImages/type1.png";
    } else {
      main.classList.add("typeThree");
      img.id = "resultSharedImage";
      typeThree.classList.add("show");
      img.src = "https://hbird1005.dothome.co.kr/images/sharedImages/type3.png";
      sharedImage.appendChild(img);
      defaultMeta.content =
        "https://hbird1005.dothome.co.kr/images/sharedImages/type3.png";
    }
  }
};
