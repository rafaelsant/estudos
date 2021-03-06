const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');



//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
//iniciando o banco de dados
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true },
);
requireDir('./src/models');
const Product = mongoose.model('Product');

//primeira rota
app.use('/api', require('./src/routes'));

app.listen(3001);

