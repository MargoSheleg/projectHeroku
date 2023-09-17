const products = document.querySelector("#products");
const prodDropdown = document.querySelector(".dropDownGridElProducts");
const gridProds = document.querySelectorAll(".gridProd");

const marketplace = document.querySelector("#marketplace");
const marketDropdown = document.querySelector(".dropDownGridElMarketplace");
// const gridElementsA = document.querySelectorAll(".gridElements > a");
const input = document.querySelector("input");
const label = document.querySelector("label");

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

marketplace.addEventListener("mouseover", () => {
  marketDropdown.style.display = "grid";
  marketplace.style.opacity = "1";
});

marketplace.addEventListener("mouseout", () => {
  setTimeout(() => {
    marketDropdown.style.display = "none";
    marketplace.style.opacity = ".5";
  }, 500);
});

input.addEventListener("click", () => {
  input.style.backgroundColor = "white";
});

input.addEventListener("mouseout", () => {
  input.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
});

input.addEventListener("input", (event) => {
  if (event.value !== "") {
    label.style.display = "none";
  } else {
    label.style.display = "inline";
  }
});
