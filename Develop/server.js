const express= require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');

const app = express();
const PORT = 9000;

const run = (app) => {
    htmlRoutes(app);
    routes(app);
}

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
run(app);

app.listen(PORT, () => console.log(`API is listening on port ${PORT}`));