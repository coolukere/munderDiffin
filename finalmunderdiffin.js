"use strict";
document.getElementById("learn-button").onclick = learnMore;

function learnMore() {
  let demo = document.getElementById("section-paragraph")
  demo.innerHTML = "Learn More Info On Next Page";
}
