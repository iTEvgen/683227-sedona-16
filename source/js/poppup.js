var success = document.querySelector(".modal__success");
var failure = document.querySelector(".modal__failure");
var feedback = document.querySelector(".form");

var closee = failure.querySelector(".failure__button");
var close = success.querySelector(".success__button");
var nameOne = feedback.querySelector("[name=name]");
var nameTwo = feedback.querySelector("[name=surname]");
var nameThree = feedback.querySelector("[name=patronymic]");
var telephone = feedback.querySelector("[name=telephone]");
var e_mail = feedback.querySelector("[name=e-mail]");

feedback.addEventListener("submit", function (evt) {
  if (!nameOne.value || !nameTwo.value || !nameThree.value || !telephone.value || !e_mail.value) {
    evt.preventDefault();
    failure.classList.add("modal__failure--show")
  } else {
    evt.preventDefault();
    success.classList.add("modal__success--show")
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  success.classList.remove("modal__success--show");
});

closee.addEventListener("click", function (evt) {
  evt.preventDefault();
  failure.classList.remove("modal__failure--show");
});

