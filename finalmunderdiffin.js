"use strict";

let learnButton = document.getElementsByClassName("learn-button");

learnButton.addEventListener("click", function (event){
    console.log(document.getElementsByClassName('section-paragraph').style.color = "green");
});
