document.getElementById("country").addEventListener("change", function () {
  const label = document.querySelector('label[for="country"]');
  if (this.value) {
    label.style.transform = "translateY(-26px)";
    label.style.fontSize = "12px";
    label.style.color = "rgba(255, 255, 255, 0.9)";
    label.style.background =
      "linear-gradient(135deg, #4a9d8e 0%, #3a7968 100%)";
    label.style.padding = "2px 8px";
    label.style.borderRadius = "4px";
    label.style.fontWeight = "500";
  }
});
