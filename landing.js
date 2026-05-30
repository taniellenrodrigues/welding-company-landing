const burguer = document.querySelector('.burguer');
const navList = document.querySelector('.nav-list');
const topo = document.querySelector('.topo');

burguer.addEventListener('click', () => {
    navList.classList.toggle('active');

})
 window.addEventListener('scroll', () => {
    if (window.scrollY > 20){
        topo.classList.add('scrolled');
    } else{
        topo.classList.remove(scrolled);
    }
 });