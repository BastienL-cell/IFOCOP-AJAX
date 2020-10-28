const express = require('express');

const app = express();

// NOTE: Permet d'éviter les erreurs de CORS (erreurs provoquées en local)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// NOTE: Route principale qui renvoie un json
app.get('/', (req, res) => {
    res.status(200).json([
        {
            id: 1,
            nom: "Durant",
            prenom: "Bertrand"
        },
        {
            id: 2,
            nom: "Magellan",
            prenom: "Noël"
        },
        {
            id: 3,
            nom: "Lafonte",
            prenom: "Pierre"
        }
    ]
    );
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})