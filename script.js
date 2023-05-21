let mobileIsTrue = false;

let screenSize = window.innerWidth;

if (screenSize < 350) {
  mobileIsTrue = true;
}

//lav så teksten gradvist bliver fra lines til text ligesom typewriteren

//lav en charlie tango style transition. Kinda Done
const h2 = document.querySelector("h2");

h2.addEventListener("mouseenter", showFullLogo);

function showFullLogo() {
  allSpans = document.querySelectorAll(".hidden");
  allSpans.forEach((element) => {
    if (mobileIsTrue === false) {
      element.style.display = "inline";
      const navigationBar = document.querySelector(".ulNav");
      navigationBar.style.marginRight = "558px";
    }
  });
}

const burgerMenu = document.querySelector(".burger");
burgerMenu.addEventListener("click", toggleMenu);
const menu = document.querySelector(".ulNav");

//burger menu activation
function toggleMenu() {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

  //arbejd på så den lukker når man klikker linksne!
  const menuLists = document.querySelectorAll(".ulNav li");
  menuLists.forEach((listItem) => {
    listItem.addEventListener("clicked", () => {
      const clickedList = true;
      if (clickedList) {
        menu.style.display = "none";
      }
    });
  });
}

//fortsæt med at lave videre på det nedenunder så den skifter position i gridet og fader indtil den når midten!
// window.addEventListener("DOMContentLoaded", animateAbout);

// function animateAbout() {
//   const aboutContainer = document.querySelector(".about-container");

//   const gridPositions = ["1/2", "2/3", "4/5", "5/6", "3/4"];

//   aboutContainer.style.gridColumn = gridPositions[0];
// }
