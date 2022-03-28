const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('./db');
const { PORT_REPLACE } = require('./constants');
const routes = require('./routes');
const { readTokenMiddleware } = require('./modules/user');

const PORT = process.env.PORT || PORT_REPLACE;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.use(readTokenMiddleware);

app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(PORT, (err) => console.log(err || `Listening at port ${PORT}`));
