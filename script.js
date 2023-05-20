//lav så teksten gradvist bliver fra lines til text ligesom typewriteren

//lav en charlie tango style transition. Kinda Done
const h2 = document.querySelector("h2");

h2.addEventListener("mouseenter", showFullLogo);

function showFullLogo() {
  allSpans = document.querySelectorAll(".hidden");
  allSpans.forEach((element) => {
    element.style.display = "inline";
  });

  const navigationBar = document.querySelector(".ulNav");
  navigationBar.style.marginRight = "558px";
}

//fortsæt med at lave videre på det nedenunder så den skifter position i gridet og fader indtil den når midten!
// window.addEventListener("DOMContentLoaded", animateAbout);

// function animateAbout() {
//   const aboutContainer = document.querySelector(".about-container");

//   const gridPositions = ["1/2", "2/3", "4/5", "5/6", "3/4"];

//   aboutContainer.style.gridColumn = gridPositions[0];
// }
