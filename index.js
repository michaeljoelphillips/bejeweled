const express = require('express');
const app = express();

const cacheControl = (_, res, next) => {
  res.set('Cache-Control', `public, max-age=86400`);

  next();
};

app.use(cacheControl);
app.use(express.static('public'));

app.listen(8080);
