const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
require('dotenv').config()

const checkForSession = require('./middlewares/checkForSession');

//controllers
const auth_controller = require('./controllers/auth_controller');
const properties_controller = require('./controllers/properties_controller');


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use( session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(checkForSession);

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

//Authorization Endpoints
app.post('/api/auth/login', auth_controller.login);
app.post('/api/auth/register', auth_controller.register);
app.post('/api/auth/logout', auth_controller.logout);

//Properties Endpoints
app.post('/api/properties', properties_controller.create);
app.get('/api/properties', properties_controller.getProperty);
app.delete('/api/properties/:id', properties_controller.delete);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('listening on port', port)
})