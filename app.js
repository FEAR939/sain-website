const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname)));

// Pfad zur JSON-Datei
const USERS_FILE = path.join(__dirname, 'data', 'users.json');

// Helper-Funktion: Benutzer aus JSON-Datei lesen
const getUsers = () => {
    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, JSON.stringify([])); // Datei erstellen, falls sie nicht existiert
    }
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8') || '[]');
};

// Helper-Funktion: Benutzer in JSON-Datei speichern
const saveUsers = (users) => {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// API: Benutzer-Registrierung (Sign-Up)
app.post('/signup', (req, res) => {
    const { displayName, email, password } = req.body;

    // Eingaben validieren
    if (!displayName || !email || !password) {
        return res.status(400).json({ message: 'Bitte alle Felder ausfüllen.' });
    }

    const users = getUsers();

    // Prüfen, ob die E-Mail bereits registriert ist
    if (users.find((user) => user.email === email)) {
        return res.status(400).json({ message: 'Diese Email ist bereits registriert.' });
    }

    // Benutzer hinzufügen
    users.push({ displayName, email, password });
    saveUsers(users);

    res.status(201).json({ message: 'Registrierung erfolgreich.' });
});

// API: Benutzer-Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const users = getUsers();

    // Benutzer finden
    const user = users.find((user) => user.email === email && user.password === password);
    if (!user) {
        return res.status(400).json({ message: 'Ungültige Email oder Passwort.' });
    }

    res.status(200).json({ message: 'Login erfolgreich.', user });
});

// API: Benutzer-Profil
app.get('/profile', (req, res) => {
    const { email } = req.query;

    const users = getUsers();

    // Benutzer suchen
    const user = users.find((user) => user.email === email);
    if (!user) {
        return res.status(404).json({ message: 'Benutzer nicht gefunden.' });
    }

    res.status(200).json(user);
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
