import { url } from "./components/api.js";
import { randomImages } from "./utils/images.js";
import { getExistingFavorite } from "../js/components/getExistFavorite.js";
import { saveFavorites } from "./components/saveFavorites.js";
const booksContainer = document.querySelector(".books");

const articlesUrl = url + "articles";
const favoritesBooks = getExistingFavorite();

(async function createHTML() {
    try {
        const response = await fetch(articlesUrl);
        const json = await response.json();
        booksContainer.innerHTML = "";
        json.forEach(function (books) {
            let cssClass = "far";
            const doesObjectExist = favoritesBooks.find(function (favorites) {
                return parseInt(favorites.id) === books.id;
            });
            if (doesObjectExist) {
                cssClass = "fa";
            }
            booksContainer.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${randomImages(books.title)}" class="card-img-top" alt="${books.title}">
            <div class="buttons">
            <i class="${cssClass} fa-heart" data-id="${books.id}" data-book="${books.title}" data-author="${books.author}" data-summary="${books.summary}"></i>
            </div>
            <div class="card-body">
              <h5>${books.title}.</h5>
              <h6>Author: ${books.author}</h6>
            <p>Summary: ${books.summary}</p>
            </div>`;
            const favorites = document.querySelectorAll(".buttons i");
            favorites.forEach((button) => {
                button.addEventListener("click", handleClick);
            });
        });
    } catch (error) {
        console.log(error);
    }
})();
function handleClick(button) {
    console.log(button);
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const title = this.dataset.book;
    const author = this.dataset.author;
    const summary = this.dataset.summary;
    const currentFavorites = getExistingFavorite();

    const bookExists = currentFavorites.find(function (favorite) {
        return favorite.id === id;
    });

    if (bookExists === undefined) {
        const book = { id: id, title: title, author: author, summary: summary };
        currentFavorites.push(book);
        saveFavorites(currentFavorites);
    } else {
        const newFavorite = currentFavorites.filter((favorite) => favorite.id !== id);
        saveFavorites(newFavorite);
    }
}

