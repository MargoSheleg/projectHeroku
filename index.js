import {
  products,
  prodDropdown,
  gridProds,
  marketplace,
  marketDropdown,
  input,
  label,
} from "./script/utils.js";

import {
  prodMouseOver,
  prodMouseOut,
  marketMouseOver,
  marketMouseOut,
} from "./script/functions.js";

products.addEventListener("mouseover", prodMouseOver());

products.addEventListener("mouseout", prodMouseOut());

gridProds.forEach((gridProd) => {
  gridProd.addEventListener(
    "mouseover",
    () => (prodDropdown.style.display = "grid")
  );
  gridProd.addEventListener("mouseout", () =>
    setTimeout(() => (prodDropdown.style.display = "none"), 500)
  );
});

marketplace.addEventListener("mouseover", marketMouseOver());

marketplace.addEventListener("mouseout", marketMouseOut());

input.addEventListener("click", () => (input.style.backgroundColor = "white"));

input.addEventListener(
  "mouseout",
  () => (input.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
);

input.addEventListener("input", (event) => {
  if (event.value !== "") {
    label.style.display = "none";
  } else {
    label.style.display = "inline";
  }
});
