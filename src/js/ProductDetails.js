// import { products } from "../js/Products.js";
import { state } from "./model.js";
import { renderCards } from "../js/renderCards.js";
var prodID = localStorage.getItem("id");
let Product = state.products[prodID];
let prodImgDiv = document.getElementById("prodImg");
prodImgDiv.src = Product.imgURL0;
// productDiv.alt = Product.title;
let prodNameDiv = document.getElementById("prodName");
prodNameDiv.innerText = Product.title;
let prodPriceDiv = document.getElementById("prodPrice");
prodPriceDiv.innerText += " "+Product.price+" $";
let prodDescDiv = document.getElementById("prodDesc");
prodDescDiv.innerText = Product.description;
let prodCategoryDiv = document.querySelector("#prodCategory h4");;
prodCategoryDiv.innerText += " " + Product.category;


  // Render after click on the pagination buttons
  let page = 1;
  let numberOfCardsPerPage = 4
  renderCards(page, numberOfCardsPerPage);

  const pagSec = document.getElementById("paginationSection");
  pagSec.addEventListener("click", function (event) {
    console.log(event.target);
    if (event.target.nodeName == "A") {
      pagSec.innerHTML = "";
      if (event.target.textContent === "Previous") {
        if (page === 1) {
          page = 1;
        } else {
          page--;
        }
      } else if (event.target.textContent === "Next") {
        if (page === pagesCount) {
          page = pagesCount;
        } else {
          page++;
        }
      } else {
        page = parseInt(event.target.textContent);
      }

      // startCard = (page - 1) * numberOfCardsPerPage + 1;
      // endCard = page * numberOfCardsPerPage;
      // if (endCard > productsCount) {
      //   endCard = productsCount;
      // }
    }
    renderCards(page, numberOfCardsPerPage);
  });


const wishIcon = document.querySelector(".wish-icon i");
wishIcon.addEventListener("click", function () {
  if (wishIcon.classList.contains("fa-heart-o")) {
      wishIcon.classList.remove("fa-heart-o");
      wishIcon.classList.add("fa-heart");
  } else {
      wishIcon.classList.remove("fa-heart");
      wishIcon.classList.add("fa-heart-o");
  }
});