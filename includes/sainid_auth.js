document.addEventListener('DOMContentLoaded', () => {
    // Tabs und Formulare selektieren
    const signInTab = document.getElementById('sign-in-tab');
    const logInTab = document.getElementById('log-in-tab');
    const signInForm = document.getElementById('sign-in-form');
    const logInForm = document.getElementById('log-in-form');

    // Funktion: Aktiven Tab wechseln
    const toggleTabs = (activeTab, inactiveTab, activeForm, inactiveForm) => {
        activeTab.classList.add('active');
        activeForm.classList.add('active');
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
    signInForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Verhindert das Neuladen der Seite
        const displayName = document.getElementById('display-name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (displayName && email && password) {
            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ displayName, email, password }),
                });

                const result = await response.json();
                alert(result.message);

                if (response.ok) {
                    window.location.href = `/sain_id_profile.html?email=${email}`;
                }
            } catch (error) {
                console.error('Fehler beim Sign-Up:', error);
                alert('Es ist ein Fehler aufgetreten.');
            }
        } else {
            alert('Bitte alle Felder ausfüllen!');
        }
    });

    // Event Listener für das Log-In-Formular
    logInForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Verhindert das Neuladen der Seite
        const email = document.getElementById('log-email').value;
        const password = document.getElementById('log-password').value;

        if (email && password) {
            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const result = await response.json();
                alert(result.message);

                if (response.ok) {
                    window.location.href = `/sain_id_profile.html?email=${email}`;
                }
            } catch (error) {
                console.error('Fehler beim Log-In:', error);
                alert('Es ist ein Fehler aufgetreten.');
            }
        } else {
            alert('Bitte alle Felder ausfüllen!');
        }
    });
});
