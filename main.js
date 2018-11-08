let input = document.getElementsByClassName("search");
let searchhint = document.getElementsByClassName("search-hint");
let button = document.getElementsByClassName("svg-button");
let mobile = document.getElementsByClassName("drop-down-mobile");
let isOpen = false;

// show hide search hint
for (let i = 0; i < input.length; i++) {
  for (let i = 0; i < searchhint.length; i++) {
    input[i].addEventListener("focus", () => {
      searchhint[i].style.display = "none";
    });

    input[i].addEventListener("focusout", () => {
      searchhint[i].style.display = "block";
    });
  }
}

// show hide mobile drop down
button[0].addEventListener("click", () => {
  if (isOpen === false) {
    // mobile[0].classList.remove("hide-lg");
    mobile[0].style.height = "0";
    isOpen = true;
  } else {
    // mobile[0].classList.add("hide-lg");
    mobile[0].style.height = "400px";
    isOpen = false;
  }
});
