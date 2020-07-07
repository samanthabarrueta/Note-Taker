const data = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const { request } = require('http');

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
        req.body.id = data.indexOf(note);
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), (err, data) => {
            if (err) throw err;      
        });
        res.send(data);
    }); 

    app.delete('/api/notes/:id', (req, res) => {
        const id = parseInt(req.params.id);
        fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
            if (err) throw err;  
        }); 
            if (id === data[id].id) {
                const newData = data.splice(id, 1);
                res.send(newData);
            }
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), (err, data) => {
            if (err) throw err;      
        });
        
    });
    
}