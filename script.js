const slides = document.querySelectorAll(".slide");

//First method (for)

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClasses()

      slide.classList.add("active")
  });
}
//Second method (forEach)
function clearActiveClasses () {
    slides.forEach((slide) => {
   slide.classList.remove("active");
    });
}