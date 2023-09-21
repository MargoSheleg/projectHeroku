export function prodMouseOver() {
  prodDropdown.style.display = "grid";
  products.style.opacity = "1";
}

export function prodMouseOut() {
  setTimeout(() => {
    prodDropdown.style.display = "none";
    products.style.opacity = ".5";
  }, 500);
}

export function marketMouseOver() {
  marketDropdown.style.display = "grid";
  marketplace.style.opacity = "1";
}

export function marketMouseOut() {
  setTimeout(() => {
    marketDropdown.style.display = "none";
    marketplace.style.opacity = ".5";
  }, 500);
}
