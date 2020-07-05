const data = require('../db/db.json');
const path = require('path');
const fs = require('fs');

module.exports = (app) => {

    app.get('/status', (req, res) => {
        const status = {
            status: 'ok'
        }
        res.json(status);
    });

    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
            if (err) throw err;      
        });
        res.json(data);
    });

    app.post('/api/notes', (req, res) => {
        const note = req.body;
        data.push(note);
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), (err, data) => {
            if (err) throw err;      
        });
        res.send(data);
    });
}