import { getExistingFavorite } from "../js/components/getExistFavorite.js";
import { displayMessage } from "../js/utils/displayMessage.js";
import { createHTML } from "./common/createHTML.js";
const articlesContainer = document.querySelector(".articles");
const clearButton = document.querySelector(".message-container");

const favorites = getExistingFavorite();

if (favorites.length === 0) {
    displayMessage("noResults", "Don't have favorite articles yet", ".message-container");
}
if (favorites.length > 0) {
    clearButton.innerHTML = `<button id="clearLocalStorage">Clear all</button>`;
    const clearLocalStorage = document.querySelector("#clearLocalStorage");
    clearLocalStorage.addEventListener("click", clearAllFromLocalStorage);
}
articlesContainer.innerHTML = "";
favorites.forEach((favorite) => {
    createHTML("fas", favorite);
});

function clearAllFromLocalStorage() {
    localStorage.clear();
    articlesContainer.innerHTML = "";
    displayMessage("noResults", "Don't have favorite articles yet", ".message-container");
}