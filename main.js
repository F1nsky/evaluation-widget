const starsWrapper = document.querySelector(".stars");
const stars = document.querySelectorAll(".stars a");
const modalWrapper = document.querySelector(".wrapper");
const closeModalButtons = document.querySelectorAll(".close-button, .cancel-button");

//rating panel

if (localStorage.getItem("clickedStar") !== null) {
  starsWrapper.classList.add("disabled");
  stars.forEach((otherStar, OtherIdx) => {
    if (OtherIdx <= localStorage.getItem("clickedStar")) {
      otherStar.classList.add("active"); 
    }
  });
}

stars.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    starsWrapper.classList.add("disabled");
    stars.forEach((otherStar, OtherIdx) => {
      if (OtherIdx <= clickedIdx) {
        otherStar.classList.add("active");
        if (clickedIdx <= 3) {
          modalWrapper.classList.add("active");
        }
      }
    });
    localStorage.setItem("clickedStar", clickedIdx);
  });
});

//popup

closeModalButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalWrapper.classList.remove("active");
  });
});
