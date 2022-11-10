const btnMenu = document.getElementById("menu-icon");
btnMenu.addEventListener("click", function (e) {
  e.target.parentElement.nextElementSibling.childNodes[1].classList.toggle(
    "show-links"
  );
});
// les lauréats
// function findBinary(decimal, resultat = "") {
//   if (Math.trunc(decimal) === 0) return resultat;

//   resultat = (Math.trunc(decimal) % 2) + resultat;
//   return findBinary(Math.trunc(decimal) / 2, resultat);
// }

// function addBinary(a, b) {
//   let c = a + b;
//   return findBinary(c, "");
// }

// console.log(findBinary(121));
