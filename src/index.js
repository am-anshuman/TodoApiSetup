const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apirouter = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.use('/api', apirouter); // localhost:3000/api/v1/todos

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});