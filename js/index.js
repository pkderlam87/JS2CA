import { url } from "./components/api.js";
import { getExistingFavorite } from "../js/components/getExistFavorite.js";
import { saveFavorites } from "./components/saveFavorites.js";
import { displayMessage } from "./utils/displayMessage.js";
import { createHTML } from "../js/common/createHTML.js";
import { search } from "./common/search.js";
const articlesContainer = document.querySelector(".articles");
const articlesUrl = url + "articles";
const favoritesArticles = getExistingFavorite();

(async function creatingHTML() {
    try {
        const response = await fetch(articlesUrl);
        const json = await response.json();
        articlesContainer.innerHTML = "";
        let cssClass = "";
        json.forEach(function (articles) {
            cssClass = "far";
            const doesObjectExist = favoritesArticles.find(function (favorites) {
                return parseInt(favorites.id) === articles.id;
            });
            if (doesObjectExist) {
                cssClass = "fa";
            }
            createHTML(cssClass, articles);
            const favorites = document.querySelectorAll(".buttons i");
            favorites.forEach((button) => {
                button.addEventListener("click", handleClick);
            });
        });
        search(json, cssClass);
    } catch (error) {
        console.log(error);
        displayMessage("error", "Something went wrong with the API call", ".message-container");
    }
})();
function handleClick(button) {
    console.log(button);
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.article;
    const author = this.dataset.author;
    const summary = this.dataset.summary;
    const currentFavorites = getExistingFavorite();

    const articleExists = currentFavorites.find(function (favorite) {
        return favorite.id === id;
    });

    if (articleExists === undefined) {
        const article = { id: id, title: title, author: author, summary: summary };
        currentFavorites.push(article);
        saveFavorites(currentFavorites);
    } else {
        const newFavorite = currentFavorites.filter((favorite) => favorite.id !== id);
        saveFavorites(newFavorite);
    }
}

