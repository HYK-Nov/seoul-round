const navBgn = document.getElementById("nav-burger-beginner");
const navItm = document.getElementById("nav-burger-itermediate");
const navAdv = document.getElementById("nav-burger-advanced");
const bgnIcon = document.getElementById("nav-burger-beginner-icon");
const itmIcon = document.getElementById("nav-burger-itermediate-icon");
const advIcon = document.getElementById("nav-burger-advanced-icon");
const scrollBtn = document.getElementById("scroll-top");

navBgn?.addEventListener("click", () => {
  bgnIcon?.classList.toggle("-rotate-180");
});

navItm?.addEventListener("click", () => {
  itmIcon?.classList.toggle("-rotate-180");
});

navAdv?.addEventListener("click", () => {
  advIcon?.classList.toggle("-rotate-180");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn?.classList.remove("invisible");
  } else {
    scrollBtn?.classList.add("invisible");
  }
});

scrollBtn?.addEventListener("click", () => {
  window.scrollTo(0, 0);
});