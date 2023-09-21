var hamburger= document.getElementById('hamburger');
var nav=document.getElementById('nav');
var list = document.getElementById('list');

hamburger.addEventListener('click' , () => {
    nav.classList.toggle('active');
    list.classList.toggle('active');
})
