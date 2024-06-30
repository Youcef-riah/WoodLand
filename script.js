function scrollToTop() {
  window.scrollTo(0, 0);
}
ScrollReveal({ reset: true, distance: "60px", duration: 2000 });

ScrollReveal().reveal(".animation-contain");
ScrollReveal().reveal(" .text-animation", { origin: "right", duration: 1000 });
ScrollReveal().reveal(".image-animation", { origin: "left", duration: 1000 });
function changeBackground(type) {
  let imageUrl = "";
  switch (type) {
    case "lounge":
      imageUrl = "assets/pizza.jpg";
      break;
    case "dinningRoom":
      imageUrl = "assets/burgers.jpg";
      break;
    case "office":
      imageUrl = "assetes/working.jpg";
      break;
    case "bedroom":
      imageUrl = "assetes/heropic1.jpg";
      break;
    default:
      imageUrl = "assetes/heropic1.jpg";
  }
  // Get all elements with class "hero" (in case you have multiple)
  const heroSections = document.querySelectorAll(".bg-pic");

  // Loop through each hero section and set the background image
  heroSections.forEach((section) => {
    section.style.backgroundImage = `url(${imageUrl})`;
  });
}
