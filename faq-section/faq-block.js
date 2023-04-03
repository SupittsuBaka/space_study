const buttons = document.getElementsByClassName("accordion__item-button");
const answers = document.getElementsByClassName("accordion__item-content");

function showAnswers(index) {
  if (
    document.getElementsByClassName("accordion__item-content-block").length >
      0 &&
    document.getElementsByClassName("accordion__item-content-block")[0] !=
      answers[index]
  ) {
    document
      .getElementsByClassName("accordion__item-content-block")[0]
      .classList.toggle("accordion__item-content-block");
    let activeButton = document.getElementsByClassName(
      "accordion__item-minus"
    )[0];
    activeButton.classList.toggle("accordion__item-plus");
    activeButton.classList.toggle("accordion__item-minus");
  }

  answers[index].classList.toggle("accordion__item-content-block");
  buttons[index].classList.toggle("accordion__item-plus");
  buttons[index].classList.toggle("accordion__item-minus");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    showAnswers(i);
  });
}
