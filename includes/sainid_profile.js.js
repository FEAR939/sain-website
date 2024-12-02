document.addEventListener('DOMContentLoaded', async () => {
    // Extract email from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');

    if (!email) {
        alert('Fehler: Keine Email angegeben.');
        return;
    }

    try {
        // Fetch user profile data from the backend
        const response = await fetch(`/profile?email=${encodeURIComponent(email)}`);
        const user = await response.json();

        if (!response.ok) {
            alert(user.message || 'Fehler beim Abrufen des Profils.');
            return;
        }

        // Populate profile fields with data or placeholders
        document.getElementById('first-name').textContent = user.firstName || 'Nicht angegeben';
        document.getElementById('last-name').textContent = user.lastName || 'Nicht angegeben';
        document.getElementById('birthday').textContent = user.birthday || 'Nicht angegeben';
        document.getElementById('display-name').textContent = user.displayName;
        document.getElementById('email').textContent = user.email;
        document.getElementById('password').textContent = '********'; // Mask password for security reasons

        // Populate linked accounts dynamically if available
        const linkedAccountsContainer = document.querySelector('.linked-accounts');
        if (user.linkedAccounts) {
            linkedAccountsContainer.innerHTML = '<h3>Linked Accounts</h3>';
            user.linkedAccounts.forEach(account => {
                const accountElement = document.createElement('div');
                accountElement.classList.add('linked-account');
                accountElement.innerHTML = `
                    <i class="${account.iconClass}"></i>
                    <span>${account.name}</span>
                    <input type="text" value="${account.value}" readonly>
                    <button class="copy-btn">Copy ID</button>
                `;
                linkedAccountsContainer.appendChild(accountElement);
            });
        }
    } catch (error) {
        console.error('Fehler beim Laden des Profils:', error);
        alert('Serverfehler. Bitte versuchen Sie es später erneut.');
    }

    // Copy functionality for linked accounts
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('copy-btn')) {
            const inputElement = event.target.previousElementSibling;
            inputElement.select();
            document.execCommand('copy');
            alert('ID kopiert: ' + inputElement.value);
        }
    });
});
