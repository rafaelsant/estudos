const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Testando')
});

app.listen(3001);

