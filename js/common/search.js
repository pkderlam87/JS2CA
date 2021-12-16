import { createCards } from "../index.js";
import { displayMessage } from "../utils/displayMessage.js";
import { url } from "../components/api.js";
const articlesContainer = document.querySelector(".articles");
const messageContainer = document.querySelector(".message-container");
const articlesUrl = url + "articles";


(async function search() {
    try {
        const response = await fetch(articlesUrl);
        const json = await response.json();
        const searchContainer = document.querySelector("#searchInput");
        searchContainer.onkeyup = function (event) {
            const searchValue = event.target.value.trim().toLowerCase();
            if (searchValue !== "null") {
                const filteredArticles = json.filter(function (article) {
                    if (article.title.toLowerCase().includes(searchValue)) {
                        return true;
                    }
                });
                articlesContainer.innerHTML = "";
                messageContainer.innerHTML = "";
                if (filteredArticles.length === 0) {
                    displayMessage("noResults", "There isn't this title.", ".message-container");
                }
                filteredArticles.forEach((filtered) => {
                    if (filteredArticles.length > 0) {
                        displayMessage("results", `We found ${filteredArticles.length} results`, ".message-container");
                        createCards(filtered);
                    } if (!searchValue) {
                        messageContainer.style.display = "none";
                        articlesContainer.innerHTML = "";
                        createCards(json);
                    }
                });
            } if (searchValue === "null") {
                createCards(json);
            }
        }
    } catch (error) {
        console.log(error);
        displayMessage("error", "Something went wrong with the API call", ".message-container");
    }
})();   