(()=>{var l="active",n=document.getElementById("navbar");window.onscroll=function(){window.scrollY>0?null==n||n.classList.add(l):null==n||n.classList.remove(l)};var t=document.querySelectorAll(".toggle-theme");(null==t?void 0:t.length)&&t.forEach((function(l){null==l||l.addEventListener("click",(function(){t.forEach((function(l){var n;return null===(n=l.querySelectorAll("i"))||void 0===n?void 0:n.forEach((function(l){return l.classList.toggle("__hidden")}))})),document.body.classList.toggle("__light"),document.body.classList.toggle("__dark")}))}))})();