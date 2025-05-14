function togglesidebar() {
    const hamburgerbtn = document.querySelector('.js-hamburger');
    const navbar = document.querySelector('.js-sidebar');
    hamburgerbtn.addEventListener('click', () => {
        navbar.classList.toggle('hide');
        
    })
}
document.addEventListener('DOMContentLoaded', () => {
    togglesidebar();
})