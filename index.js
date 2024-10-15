require('dotenv').config();

const path = require('path');
const express = require('express');
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require('cors');
const morgan = require('morgan');

const logger = morgan('tiny');

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */
app.use(logger);

// 首页
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 小程序调用，获取微信 Open ID
app.get('/api/wx_openid', async (req, res) => {
  if (req.headers['x-wx-source']) {
    res.send(req.headers['x-wx-openid']);
  }
});

require('./app/routes/tutorial.routes.js')(app);

// set port, listen for requests
console.log('process.env', process.env);
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
