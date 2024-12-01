// sidebar.js with dynamic active menu item
const currentPage = window.location.pathname.split("/").pop(); // Get the current page file name

const sidebarContent = `
<div class="sainid-sidebar">
    <div class="sainid-header-sidebar">
        <img src="source/images/FuK9icGaYAE13GS-scaled.jpeg" alt="Benutzerprofil">
        <div class="user-info">
            <span class="user-name">Ben.Sain</span>
            <span class="user-id">#1</span>
        </div>
    </div>
    <ul class="sainid-menu">
        <li class="menu-item ${currentPage === 'sain_id_profile.html' ? 'active' : ''}">
            <a href="sain_id_profile.html"><i class="fas fa-user"></i> Profile</a>
        </li>
        <li class="menu-item ${currentPage === 'sain_id_transactions.html' ? 'active' : ''}">
            <a href="sain_id_transactions.html"><i class="fas fa-coins"></i> Transactions</a>
        </li>
        <li class="menu-item ${currentPage === 'sain_id_purchases.html' ? 'active' : ''}">
            <a href="sain_id_purchases.html"><i class="fas fa-shopping-cart"></i> Active purchases</a>
        </li>
        <li class="menu-item ${currentPage === 'sain_id_badges.html' ? 'active' : ''}">
            <a href="sain_id_badges.html"><i class="fas fa-certificate"></i> Badge</a>
        </li>
        <li class="menu-item ${currentPage === 'sain_id_shop.html' ? 'active' : ''}">
            <a href="sain_id_shop.html"><i class="fas fa-store"></i> Shop</a>
        </li>
        <li class="menu-item ${currentPage === 'sain_id_sain-league-team.html' ? 'active' : ''}">
            <a href="sain_id_sain-league-team.html"><i class="fas fa-trophy"></i> Sain League Team</a>
        </li>
        <li class="menu-item ${currentPage === 'sain_id_friends.html' ? 'active' : ''}">
            <a href="sain_id_friends.html"><i class="fas fa-user-friends"></i> Friends</a>
        </li>
    </ul>        
    <!-- Settings Button at the bottom -->
    <div class="settings-item">
        <i class="fas fa-cog"></i> Settings
    </div>
</div>
`;

// Inject the sidebar content into the placeholder container
document.getElementById('sainid-sidebar-container').innerHTML = sidebarContent;
