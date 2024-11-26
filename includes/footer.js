document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");

    const footerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <h3>Sites menu</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Discord</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Sain Discord</h3>
                <ul>
                    <li><a href="#">Sain Community</a></li>
                    <li><a href="#">Sain GTA VI</a></li>
                    <li><a href="#">Sain Minecraft</a></li>
                    <li><a href="#">Sain Rainbow 6 Siege</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Events</h3>
                <ul>
                    <li><a href="#">Sain Minecraft Community Server | Season 9</a></li>
                    <li><a href="#">Sain League | Tournaments</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>About</h3>
                <ul>
                    <li><a href="#">What is Sain?</a></li>
                    <li><a href="#">Impressum</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <ul>
                    <li><a href="#">Email</a></li>
                    <li><a href="#">Socials</a></li>
                    <li><a href="#">Upload your Clips</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Sain Coin</h3>
                <ul>
                    <li><a href="#">Balance</a></li>
                    <li><a href="#">Transactions</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Sain ID</h3>
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Transactions</a></li>
                    <li><a href="#">Active purchases</a></li>
                    <li><a href="#">Badges</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </div>
            <div class="footer-social-icons">
                <a href="#"><img src="instagram-icon.png" alt="Instagram"></a>
                <a href="#"><img src="x-icon.png" alt="X"></a>
                <a href="#"><img src="youtube-icon.png" alt="YouTube"></a>
                <a href="#"><img src="discord-icon.png" alt="Discord"></a>
                <a href="#"><img src="reddit-icon.png" alt="Reddit"></a>
                <a href="#"><img src="tiktok-icon.png" alt="TikTok"></a>
                <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
            </div>
        </div>
    `;

    if (footer) {
        footer.innerHTML = footerHTML;
    }
});
