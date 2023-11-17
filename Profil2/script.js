document.addEventListener('DOMContentLoaded', function () {
    
    const homeLink = document.querySelector('a[href="#home"]');

    homeLink.addEventListener('click', function (e) {
        e.preventDefault();

        const homeSection = document.getElementById('home');
        const offsetTop = homeSection.offsetTop;

        window.scrollTo({
            top: offsetTop - 50,
            behavior: 'smooth'
        });
    });

    const portfolioLink = document.querySelector('a[href="#portfolio"]');

    portfolioLink.addEventListener('click', function (e) {
        e.preventDefault();

        const portfolioSection = document.getElementById('portfolio');
        const offsetTop = portfolioSection.offsetTop;

        window.scrollTo({
            top: offsetTop - 50,
            behavior: 'smooth'
        });
    });

    const resumeLink = document.querySelector('a[href="#resume"]');

    resumeLink.addEventListener('click', function (e) {
        e.preventDefault();

        const resumeSection = document.getElementById('resume');
        const offsetTop = resumeSection.offsetTop;

        window.scrollTo({
            top: offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
