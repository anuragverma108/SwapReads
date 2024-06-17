const navbar=document.querySelector('.navbar'),
NavButton=document.querySelector('.nav-toggle-btn'),
open=document.querySelector('.open'),
close=document.querySelector('.close');
let count=0
NavButton.addEventListener('click',()=>{
      
if(count===0){
navbar.classList.remove('nav_activated')
open.classList.add('close')
close.classList.add('open')
open.classList.remove('open')
close.classList.remove('close')
count++
}
else{
navbar.classList.add('nav_activated')
open.classList.add('open')
close.classList.add('close')
open.classList.remove('close')
close.classList.remove('open')
count=0
}
})