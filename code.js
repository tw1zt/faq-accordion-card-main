const question = document.getElementsByTagName("h3");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    const isActive = !this.classList.contains("active");
    const allQuestions = document.getElementsByTagName("h3");
    for (let j = 0; j < allQuestions.length; j++) {
      allQuestions[j].classList.remove("active");
    }

    if (isActive) {
      this.classList.toggle("active");
    }
  });
}
