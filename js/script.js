"use strict";

let calcScrollValue = () => {
   let scrollProgress = document.getElementById('progressButton');
   let progressValue = document.getElementById('progressButton__value'); 
   let pos = document.documentElement.scrollTop; 
   let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   let scrollValue = Math.round((pos * 100) / calcHeight);

   if (pos > 100) {
      scrollProgress.style.display = 'grid'; 
   } else {
      scrollProgress.style.display = 'none'; 
   }

   scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0; 
   });
   scrollProgress.style.background = `conic-gradient(#52339a ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onload = calcScrollValue;
window.addEventListener('scroll',calcScrollValue);