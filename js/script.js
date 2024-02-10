"use strict";
// SELECTION...
const cardPlace = document.querySelector(".card-space");
const innerContainer = document.querySelector(".inner-container");
const reviewContainer = document.querySelector(".review-container");
const reviewPlace = document.querySelector(".review-place");
// STATE VARIABLES...
let click = 0;
const data = [
  "sample",
  {
    name: "Eleanor Crisp",
    dataNumber: "1",
    job: "UX Design",
    review: `Dad buried in landslide! Jubilant throngs fill streets! Stunned. father inconsolable - demands recount!`,
  },
  {
    name: "Sue Shei",
    dataNumber: "2",
    job: "Public Relations",
    review: `The strength to change what I can, the inability to accept what can't and the incapacity to tell the difference.`,
  },
  {
    name: "Gordon Norman",
    dataNumber: "3",
    job: "Accountant",
    review: `Wormwood : Calvin, how about you? Calvin : Hard to say ma'am.I think my cerebellum has just fused.`,
  },
];
// FUNCTIONS...
const reviewHandler = function (number) {
  if (number > 3 || number < 1) number = click = 1;
  const html = `       
    <figure data-number="${data[number].dataNumber}" class="card transition active" >
      <img
        src="images/profile-sample-${number}.jpg"
        class="profile"
      />
      <figcaption>
        <h2>${data[number].name}</h2>
        <h4>${data[number].job}</h4>
        <blockquote>${data[number].review}</blockquote>
      </figcaption>
    </figure>`;
  reviewPlace.innerHTML = "";
  reviewPlace.insertAdjacentHTML("beforeend", html);
};
// EVENT HANDLERS...
innerContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("right-chev")) reviewHandler((click += 1));
  if (e.target.classList.contains("left-chev")) reviewHandler((click -= 1));
});
