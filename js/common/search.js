import { createHTML } from "./createHTML.js";
import { displayMessage } from "../utils/displayMessage.js";
const articlesContainer = document.querySelector(".articles");
const messageContainer = document.querySelector(".message-container");

export function search(cssClass, json) {

    console.log(json);
    const searchContainer = document.querySelector("#searchInput");
    console.log(searchContainer);
    searchContainer.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();
        console.log(searchValue);
        const filteredArticles = json.filter(function (article) {
            if (article.title.toLowerCase().includes(searchValue)) {
                return true;
            }
        });
        console.log(filteredArticles);
        articlesContainer.innerHTML = "";
        messageContainer.innerHTML = "";
        if (filteredArticles.length === 0) {
            displayMessage("noResults", "There isn't this title.", ".message-container");
        }
        filteredArticles.forEach((filtered) => {
            if (filteredArticles.length > 0) {
                displayMessage("results", `We found ${filteredArticles.length} results`, ".message-container");
                createHTML(cssClass, filtered);
            } if (!searchValue) {
                messageContainer.style.display = "none";
            }
        });
    }
}