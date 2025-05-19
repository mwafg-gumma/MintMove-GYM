
document.addEventListener('DOMContentLoaded', function() {
    const icon = document.querySelector('header .container .icon');
    const navList = document.querySelector('header .container nav .list');

    icon.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Optional: Close menu when a link is clicked (for better UX)
    navList.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });
});
