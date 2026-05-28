const burguer = document.querySelector('.burguer');
const navList = document.querySelector('.nav-list');

burguer.addEventListener('click', () => {
    navList.classList.toggle('active');

})
