import{a as m,S as f,i as n}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="48999193-84142b43a51cfa1138f8dc0d5",d="https://pixabay.com/api/";async function y(s){try{return(await m.get(d,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){return console.error("Error while searching for images",t),[]}}const g=document.querySelector(".gallery");function h(s){g.innerHTML=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:l,downloads:u})=>`<li class="gallery-item">
            <a href="${i}" class="gallery-link">
             <img src="${o}" class="gallery-img" alt="${e}"/>
              <div class="img-info">
              <p>Likes: ${r}</p>
              <p>Views: ${a}</p>
              <p>Comments: ${l}</p>
              <p>Downloads: ${u}</p>
              </div>
            </a>
           </li>`).join(""),new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}const b=document.querySelector(".form"),w=document.querySelector(".input"),c=document.querySelector(".loading-box");b.addEventListener("submit",async s=>{s.preventDefault();const t=w.value.trim();if(t===""){n.warning({message:"Please enter a keyword to search"});return}c.style.display="block";try{const o=await y(t);if(o.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o)}catch{n.error({message:"Something went wrong. Please try again later."})}finally{c.style.display="none"}});
//# sourceMappingURL=index.js.map
