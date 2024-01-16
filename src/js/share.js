"use strict";

const createBtn = document.querySelector(".js-create");
const created = document.querySelector(".js-click");
const tweet = document.querySelector(".created__btn");

console.log(tweet.href);

tweet.href = tweet.href + `Mira mi nueva tarjeta: ` + cardURL;
console.log(tweet.href);
function openCreate() {
  createBtn.classList.add("share__grey");
  created.classList.remove("hidden");
}

