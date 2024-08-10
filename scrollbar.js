// let progressBar = document.querySelector(".progress-bar");
// let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 
// window.onscroll = function(){
//    let progress = Math.floor((scrollY / documentHeight) * 100);
//    progressBar.style.width = progress + "%";
// }


window.addEventListener('scroll', moveScrollIndicator);

const scrollIndicatorElt = document.getElementById('progress-bar');

const maxHeight = window.document.body.scrollHeight - window.innerHeight;

function moveScrollIndicator(e) {
   const percentage = Math.floor(((window.scrollY) / maxHeight) * 100);

   scrollIndicatorElt.style.width = percentage + '%';
}
