
button.addEventListener("click", (event) => {
let paragraph = document.querySelectorAll("column");
let button = document.getElementsByClassName("learn-button");

if (paragraph.className == "open") {
          paragraph.className = "";
           button.innerHTML = "Show More"
        } else {
          paragraph.className = "open";
           button.innerHTML = "Show Less"
  }
});
