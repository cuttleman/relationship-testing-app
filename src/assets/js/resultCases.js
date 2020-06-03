const resultContainer = document.querySelector(".result");
const typeOne = document.querySelector(".type.type-one");
const typeTwo = document.querySelector(".type.type-two");
const typeThree = document.querySelector(".type.type-three");
const typeFour = document.querySelector(".type.type-four");

export const resultCases = (selectNums = []) => {
  const one = selectNums.filter((num) => num === "1").length;
  const two = selectNums.filter((num) => num === "2").length;
  const three = selectNums.filter((num) => num === "3").length;
  const four = selectNums.filter((num) => num === "4").length;
  if (one > two && one > three && one > four) {
    resultContainer.classList.add("type-one");
    typeOne.classList.add("show");
  } else if (two > one && two > three && two > four) {
    resultContainer.classList.add("type-two");
    typeTwo.classList.add("show");
  } else if (three > one && three > two && three > four) {
    resultContainer.classList.add("type-three");
    typeThree.classList.add("show");
  } else if (four > one && four > two && four > three) {
    resultContainer.classList.add("type-four");
    typeFour.classList.add("show");
  } else {
    if (one === two && one === three && one === four) {
      resultContainer.classList.add("type-three");
      typeThree.classList.add("show");
    } else if (one === two && one === four) {
      resultContainer.classList.add("type-two");
      typeTwo.classList.add("show");
    } else if (one === four) {
      resultContainer.classList.add("type-four");
      typeFour.classList.add("show");
    } else {
      // 나머지 경우의 수 한 곳에 몰아넣음
      resultContainer.classList.add("type-three");
      typeThree.classList.add("show");
    }
  }
};
