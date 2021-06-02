const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const { createUnzip } = require('zlib');

const app = express();
const port = 3000;

app.use(bodyParser.text());

app.use(express.static('public'));

app.get('/api/test', (req, res) => {

    const file = 'tests.csv';
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        const testType = data[0];
        const newData = data.substring(1);
        fs.writeFile(file, newData, 'utf8', function (err) {
            if (err) throw err;
            res.send(testType);
        });
    })

});

app.post('/api/:test', (req, res) => {

    const test = req.params.test || 'desconhecido';
    const file = test + '.csv';

    fs.open(file, 'a', 777, function (e, id) {
        fs.write(id, req.body + "\n", null, 'utf8', function () {
            fs.close(id, function () {
                res.send('ok');
            });
        });
    });

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})