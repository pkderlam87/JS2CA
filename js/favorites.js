import { getExistingFavorite } from "../js/components/getExistFavorite.js";
import { displayMessage } from "../js/utils/displayMessage.js";
import { createHTML } from "./common/createHTML.js";
const articlesContainer = document.querySelector(".articles");

const favorites = getExistingFavorite();

if (favorites.length === 0) {
    displayMessage("noResults", "Don't have favorite articles yet", ".message-container");
}
articlesContainer.innerHTML = "";
favorites.forEach((favorite) => {
    createHTML("fas", favorite);
});