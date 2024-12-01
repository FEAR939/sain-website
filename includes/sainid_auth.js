document.addEventListener('DOMContentLoaded', () => {
    // Tabs und Formulare selektieren
    const signInTab = document.getElementById('sign-in-tab');
    const logInTab = document.getElementById('log-in-tab');
    const signInForm = document.getElementById('sign-in-form');
    const logInForm = document.getElementById('log-in-form');

    // Funktion: Aktiven Tab wechseln
    const toggleTabs = (activeTab, inactiveTab, activeForm, inactiveForm) => {
        // Aktiven Tab und Formular aktivieren
        activeTab.classList.add('active');
        activeForm.classList.add('active');

        // Inaktiven Tab und Formular deaktivieren
        inactiveTab.classList.remove('active');
        inactiveForm.classList.remove('active');
    };

    // Event Listener für den "Sign up"-Tab
    signInTab.addEventListener('click', () => {
        toggleTabs(signInTab, logInTab, signInForm, logInForm);
    });

    // Event Listener für den "Log in"-Tab
    logInTab.addEventListener('click', () => {
        toggleTabs(logInTab, signInTab, logInForm, signInForm);
    });

    // Event Listener für das Sign-Up-Formular
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const displayName = document.getElementById('display-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (displayName && email && password) {
            alert('Sign-Up erfolgreich!');
            // Hier kannst du die Daten an dein Backend senden
        } else {
            alert('Bitte alle Felder ausfüllen!');
        }
    });

    // Event Listener für das Log-In-Formular
    logInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('log-email').value;
        const password = document.getElementById('log-password').value;

        if (email && password) {
            alert('Log-In erfolgreich!');
            // Hier kannst du die Daten an dein Backend senden
        } else {
            alert('Bitte alle Felder ausfüllen!');
        }
    });
});
