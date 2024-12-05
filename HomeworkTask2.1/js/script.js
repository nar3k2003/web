function openManu() {
    const languageMenu = document.querySelector('.headerMobileMenu');
    
    if (!languageMenu.classList.contains('active')) {
        languageMenu.classList.add('active');
    } else {
        languageMenu.classList.remove('active'); 
    }
}