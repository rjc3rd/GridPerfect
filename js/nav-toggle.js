function navToggle() {
  const toggleContainer = document.getElementById("toggleContainer")
  const toggleMenu = document.getElementById("toggleMenu");

  if (toggleContainer.style.flexWrap === "wrap") {
    toggleContainer.style.flexWrap = "nowrap";
  } else {
    toggleContainer.style.flexWrap = "wrap";
  }

  if (toggleMenu.style.display === "flex") {
    toggleMenu.style.display = "none";
  } else {
    toggleMenu.style.display = "flex";
  }
}
