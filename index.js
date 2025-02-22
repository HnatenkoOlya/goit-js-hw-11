import{a as l,i}from"./assets/vendor-Cbhu4xvy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="48999193-84142b43a51cfa1138f8dc0d5",m="https://pixabay.com/api/";async function f(s){try{return(await l.get(m,{params:{key:u,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12}})).data.hits}catch(t){return console.error("Error while searching for images",t),[]}}const p=document.querySelector(".gallery");function d(s){p.innerHTML=s.map(({webformatURL:t,largeImageURL:o,tags:a,likes:e,views:r,comments:n,downloads:c})=>`<li class="gallery-item">
            <a href="${o}" class="gallery-link">
             <img src="${t}" class="gallery-img" alt="${a}"/>
              <div class="img-info">
              <p>Likes: ${e}</p>
              <p>Views: ${r}</p>
              <p>Comments: ${n}</p>
              <p>Downloads: ${c}</p>
              </div>
            </a>
           </li>`).join("")}const g=document.querySelector(".form"),y=document.querySelector(".input");document.querySelector(".loading-box");g.addEventListener("submit",async s=>{s.preventDefault();const t=y.value.trim();if(t===""){i.warning({message:"Please enter a keyword to search"});return}try{const o=await f(t);if(o.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}d(o)}catch{i.error({message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=index.js.map
