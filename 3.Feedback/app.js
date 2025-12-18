const panel = document.querySelector("#panel");
const ratings = document.querySelectorAll(".rating");
const ratingContainer = document.querySelector(".rating-container");

const sendBtn = document.querySelector("#sendBtn");

let selectedRatings = "Satisfied";

ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    console.log(e.target.parentNode.classList.contains("rating"));
    removeActive();

    e.target.parentNode.classList.add("active");

    selectedRatings = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
  <div class="heart-icon">💖</div>
  <strong>Thank you!</strong>
  <p>Feedback : ${selectedRatings}</p>
  `;
});

function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
