const arrow = document.querySelectorAll(".collapsible");

arrow.forEach((arr) =>
  arr.addEventListener("click", () => {
    arr.classList.toggle("collapsible-expand");
  })
);
