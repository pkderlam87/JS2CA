import { randomImages } from "../utils/images.js";
const articlesContainer = document.querySelector(".articles");

export function createHTML(cssClass, articles) {
    let title = articles.title;
    articlesContainer.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${randomImages(title)}" class="card-img-top" alt="${title}"> 
             <div class="buttons">
             <i class="${cssClass} fa-heart" data-id="${articles.id}" data-article="${title}" data-author="${articles.author}" data-summary="${articles.summary}"></i>
             </div>
             <div class="card-body">
               <h5>${title}.</h5>
               <h6>Author: ${articles.author}</h6>
             <p>Summary: ${articles.summary}</p>
             </div>`;
}
