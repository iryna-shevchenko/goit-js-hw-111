import{S as l,i as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const d=document.querySelector(".gallery");function u(o){const t=document.createDocumentFragment();o.forEach(a=>{const r=m(a);t.appendChild(r)}),d.appendChild(t)}function m(o){const t=document.createElement("div");return t.classList.add("card"),t.innerHTML=`
    <a class="gallery-link" href="${o.largeImageURL}">
      <img class="card-image" src="${o.webformatURL}" alt="${o.tags}" loading="lazy">
    </a>
    <div class="card-info">
      <p class="card-text"><b>Likes:</b> ${o.likes}</p>
      <p class="card-text"><b>Views:</b> ${o.views}</p>
      <p class="card-text"><b>Comments:</b> ${o.comments}</p>
      <p class="card-text"><b>Downloads:</b> ${o.downloads}</p>
    </div>
  `,t}const f="44479541-afd008fbdfda4a6c986ece69f",p=document.querySelector(".search-form"),g=document.querySelector(".gallery"),h=document.querySelector(".search-input"),y=new l(".gallery a",{captionsData:"alt",captionDelay:250}),i=document.querySelector(".loader");i.style.display="none";p.addEventListener("submit",b);function b(o){o.preventDefault();const t=h.value.trim();if(!t){c.warning({title:"Warning!",message:"Please enter image name!",position:"topRight"});return}E(),i.style.display="block";const a=new URLSearchParams({key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${a}`).then(r=>{if(i.style.display="none",!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(r.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u(r.hits),y.refresh()}).catch(r=>{console.error("Error fetching images:",r),c.error({message:"Failed to fetch images. Please try again later.",position:"topRight"})})}function E(){g.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
