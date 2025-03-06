const navBgn = document.querySelector("#nav-burger-beginner");
const navItm = document.querySelector("#nav-burger-itermediate");
const navAdv = document.querySelector("#nav-burger-advanced");
const bgnIcon = document.querySelector("#nav-burger-beginner-icon");
const itmIcon = document.querySelector("#nav-burger-itermediate-icon");
const advIcon = document.querySelector("#nav-burger-advanced-icon");

if (navBgn !== null && bgnIcon !== null) {
  navBgn.addEventListener("click", () => {
    bgnIcon.classList.toggle("-rotate-180");
  });
}

if (navItm !== null && itmIcon !== null) {
  navItm.addEventListener("click", () => {
    itmIcon.classList.toggle("-rotate-180");
  });
}

if (navAdv !== null && advIcon !== null) {
  navAdv.addEventListener("click", () => {
    advIcon.classList.toggle("-rotate-180");
  });
}
