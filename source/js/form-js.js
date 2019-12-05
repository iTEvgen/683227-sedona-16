var search__form = document.querySelector(".hotel-search");
var search__btn = search__form.querySelector(".button__show");
var search_show = search__form.querySelector(".search__modal");
var close = search__form.querySelector(".modal__button");

search__btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  search_show.classList.toggle("search__modal--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  search_show.classList.remove("search__modal--show");
});
