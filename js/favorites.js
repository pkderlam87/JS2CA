import { getExistingFavorite } from "../js/components/getExistFavorite.js";
import { randomImages } from "./utils/images.js";
import { displayMessage } from "../js/utils/displayMessage.js";

const favorites = getExistingFavorite();

const booksContainer = document.querySelector(".books");

if (favorites.length === 0) {
    displayMessage("noResults", "No favorites yet", ".message-container");
}

favorites.forEach((favorite) => {
    booksContainer.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${randomImages(favorite.title)}" class="card-img-top" alt="${favorite.title}">
    <i class="far fa-heart"></i>
    <div class="card-body">
      <h5>${favorite.title}.</h5>
      <h6>Author: ${favorite.author}</h6>
    <p>Summary: ${favorite.summary}</p>
    </div>`;
});