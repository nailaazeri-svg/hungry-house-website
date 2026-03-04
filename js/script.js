const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

// Buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

// Toggle actions
searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  cartItem.classList.remove("active");
  navbar.classList.remove("active");
});

cartBtn.addEventListener("click", () => {
  cartItem.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
});

// Outside click control
document.addEventListener("click", (e) => {
  if (
    !e.composedPath().includes(searchBtn) &&
    !e.composedPath().includes(searchForm)
  ) {
    searchForm.classList.remove("active");
  }

  if (
    !e.composedPath().includes(cartBtn) &&
    !e.composedPath().includes(cartItem)
  ) {
    cartItem.classList.remove("active");
  }

  if (
    !e.composedPath().includes(menuBtn) &&
    !e.composedPath().includes(navbar)
  ) {
    navbar.classList.remove("active");
  }
});