const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('.'));







app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});