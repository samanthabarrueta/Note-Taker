const path = require('path');
const fs = require('fs');

module.exports = (app) => {

    app.get('/status', (req, res) => {
        const status = {
            status: 'ok'
        }
        res.json(status);
    });

}