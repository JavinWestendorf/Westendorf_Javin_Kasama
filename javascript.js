$(document).ready(function () {
    
    $('nav li').hover(
        function () {
            
            $(this).css('transform', 'scale(1.1)');
        },
        function () {
          
            $(this).css('transform', 'scale(1)');
        }
    );
});
function toggleMobileMenu() {
    var mobileNav = document.querySelector('.mobile-nav-list');
    mobileNav.style.display = (mobileNav.style.display === 'block') ? 'none' : 'block';
}
