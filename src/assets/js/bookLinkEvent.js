const link = document.getElementById("clipBoardBtn");

const handleTrigger = () => {
  if (typeof window.open == "function") {
    setTimeout(() => {
      window.open("https://book.naver.com/bookdb/book_detail.nhn?bid=16385789");
    }, 1600);
  } else {
    setTimeout(() => {
      window.location.href =
        "https://book.naver.com/bookdb/book_detail.nhn?bid=16385789";
    }, 1600);
  }
  return false;
};

export const bookLinkEvent = () =>
  link.addEventListener("click", handleTrigger);
