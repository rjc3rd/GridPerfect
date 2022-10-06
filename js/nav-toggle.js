function navToggle() {
  const toggleMenu = document.getElementById("toggleMenu");
  const toggleContainer = document.getElementById("toggleContainer")

  if (toggleMenu.style.display === "flex") {
    toggleMenu.style.display = "none";
  } else {
    toggleMenu.style.display = "flex";
  }

  if (toggleContainer.style.flexWrap === "wrap") {
    toggleContainer.style.flexWrap = "nowrap";
  } else {
    toggleContainer.style.flexWrap = "wrap";
  }
}
