document.getElementById('hamburger').addEventListener('click', function() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('#navMenu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('navMenu').classList.remove('active');
    });
});
