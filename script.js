const products = document.querySelector("#products");
const prodDropdown = document.querySelector(".dropDownGridElProducts");
const gridProds = document.querySelectorAll(".gridProd");
// const gridElementsA = document.querySelectorAll(".gridElements > a");

products.addEventListener("mouseover", () => {
  prodDropdown.style.display = "grid";
  products.style.opacity = "1";
});

products.addEventListener("mouseout", () => {
  setTimeout(() => {
    prodDropdown.style.display = "none";
    products.style.opacity = ".5";
  }, 500);
});

gridProds.forEach((gridProd) => {
  gridProd.addEventListener("mouseover", () => {
    prodDropdown.style.display = "grid";
  });
  gridProd.addEventListener("mouseout", () => {
    setTimeout(() => {
      prodDropdown.style.display = "none";
    }, 500);
  });
});
