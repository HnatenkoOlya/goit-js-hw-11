const gallery = document.querySelector(".gallery");

export function renderImages(images) {
    gallery.innerHTML = images 
     .map(({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
     }) => `<li class="gallery-item">
            <a href="${largeImageURL}" class="gallery-link">
             <img src="${webformatURL}" class="gallery-img" alt="${tags}"/>
              <div class="img-info">
              <p>Likes: ${likes}</p>
              <p>Views: ${views}</p>
              <p>Comments: ${comments}</p>
              <p>Downloads: ${downloads}</p>
              </div>
            </a>
           </li>`)
     .join("");
}