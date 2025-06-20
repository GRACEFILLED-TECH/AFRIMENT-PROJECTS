function toggleDetails() {
  const info = document.getElementById("moreInfo");
  info.classList.toggle("hidden");
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});
