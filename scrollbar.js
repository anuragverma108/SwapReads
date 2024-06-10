let progressBar = document.querySelector(".progress-bar");
let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 
window.onscroll = function(){
   let progress = (scrollY / documentHeight) * 100;
   progressBar.style.width = progress + "%";
}