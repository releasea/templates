const express = require('express');

const app = express();
const port = Number(process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/healthz', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
