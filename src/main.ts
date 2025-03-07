const navBgn = document.getElementById("nav-burger-beginner");
const navItm = document.getElementById("nav-burger-itermediate");
const navAdv = document.getElementById("nav-burger-advanced");
const bgnIcon = document.getElementById("nav-burger-beginner-icon");
const itmIcon = document.getElementById("nav-burger-itermediate-icon");
const advIcon = document.getElementById("nav-burger-advanced-icon");

navBgn?.addEventListener("click", () => {
  bgnIcon?.classList.toggle("-rotate-180");
});

navItm?.addEventListener("click", () => {
  itmIcon?.classList.toggle("-rotate-180");
});

navAdv?.addEventListener("click", () => {
  advIcon?.classList.toggle("-rotate-180");
});
