const express = require('express');
const path = require('path');
const app = express();

// إعداد مسار المجلد dist
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

app.listen(8080, () => {
    console.log('App listening on port 8080!');
});
