// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Rating value handler
const rating_value = document.querySelector("#rating-value");
const stars = document.querySelectorAll(".star");

// Show saved rating before login
if (rating_value) {
  let previousStar = rating_value.getAttribute("value");
  for (let i = 0; i < previousStar; i++) {
    stars[i].classList.add("checked");
  }

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      let rating = this.getAttribute("id");
      let score = rating - 1;
      for (let i = 0; i < 5; i++) {
        if (i <= score) stars[i].classList.add("checked");
        else stars[i].classList.remove("checked");
      }
      rating_value.setAttribute("value", rating);
    });
  });
}

// Auto-hide flash messages
setTimeout(() => {
  document.querySelectorAll(".flash-message").forEach((msg) => {
    msg.style.display = "none";
  });
}, 4000);

// Tax toggle logic
let toggler = document.querySelector(".form-check-input");
if (toggler) {
  toggler.addEventListener("click", () => {
    let listingTaxes = document.querySelectorAll(".tax-info");
    for (let listing of listingTaxes) {
      listing.classList.toggle("hide-tax");
    }
  });
}

// Average star logic (safe)
let halfStars = document.querySelectorAll(".fa-star-half");
let averageStar = document.querySelector(".average-star");

if (averageStar) {
  let averageValue = averageStar.dataset.averageRating * 2 || 0;
  for (let i = 0; i < averageValue && i < halfStars.length; i++) {
    halfStars[i].classList.add("checked");
  }
}

// Fill rating bars
document.querySelectorAll(".bar-filled").forEach((bar) => {
  if (bar.dataset.width) {
    bar.style.width = `${bar.dataset.width}%`;
  }
});
