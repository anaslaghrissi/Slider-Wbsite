let next = document.querySelector(".next");
let slider = document.querySelector(".slider");
let img_icon = document.querySelector(".img_icon");

const icons = [
  "images/naruto_icon.jpg",
  "images/one_pice_icon.jpg",
  "images/spider_icon2.jpg",
  "images/gon_icon3.jpg",
  "images/naruto_icon.png",
];

let currentIndex = 0;

next.addEventListener("click", function () {
  let slides = document.querySelectorAll(".slides");
  slider.appendChild(slides[0]);
  updateIcon();
});

function updateIcon() {
  currentIndex = (currentIndex + 1) % icons.length;
  img_icon.src = icons[currentIndex];
}
