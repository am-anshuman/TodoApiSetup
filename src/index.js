const express = require('express');
const { PORT } = require('./config/server.config');
const router = require('./routes');

const app = express();

app.use('/api', router); // localhost:3000/api/...

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});