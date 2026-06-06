const burguer = document.querySelector('.burguer');
const navList = document.querySelector('.nav-list');
const topo = document.querySelector('.topo');
const items = document.querySelectorAll('.reveal')

function mostrarNaTela() {
    const alturaTela = window.innerHeight;
    items.forEach(item => {
        const posicao = item.getBoundingClientRect() .top;
        
        if (posicao < alturaTela - 100) {
            item.classList.add('active');
        }
    });
}
window.addEventListener('scroll', mostrarNaTela);

burguer.addEventListener('click', () => {
    navList.classList.toggle('active');
    burguer.classList.toggle('active');

})
 window.addEventListener('scroll', () => {
    if (window.scrollY > 50){
        topo.classList.add('scrolled');
    } else{
        topo.classList.remove('scrolled');
    }
 });