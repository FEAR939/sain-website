document.addEventListener("DOMContentLoaded", function () {
    const navElement = document.getElementById("main-navigation");

    const navHTML = `
        <nav class="main-nav">
            <div class="logo">
                <img src="source/logos/Sain_Logo_circle_white_protection_zone_SVG.svg" alt="Sain Logo" class="logo-img">
            </div>
            <div class="nav-links-container">
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="news.html">News</a></li>
                    <li><a href="socials.html">Socials</a></li>
                    <li><a href="sain-league.html">Sain League</a></li>
                </ul>
            </div>
            <div class="user-actions">
                <div class="search-container">
                    <input type="text" placeholder="Search..." class="search-bar">
                    <i class="search-icon fas fa-search"></i>
                </div>
                <div class="user-info">
                    <span class="user-name">Ben.Sain</span>
                    <img src="source/images/FuK9icGaYAE13GS-scaled.jpeg" alt="Benutzerprofil" class="user-icon">
                </div>
            </div>
        </nav>
    `;

    // Add the navigation to the DOM
    if (navElement) {
        navElement.innerHTML = navHTML;

        // Highlight the current navigation link
        const links = navElement.querySelectorAll(".nav-links a");
        const currentPath = window.location.pathname.toLowerCase();

        links.forEach(link => {
            const linkHref = link.getAttribute("href").toLowerCase();
            
            // Check if the current path includes the base href of the link
            if (currentPath.includes(linkHref.replace(".html", ""))) {
                link.classList.add("current");
            }
        });
    }
});
