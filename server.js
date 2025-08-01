const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Zivilia Webhook Aktif!');
});

// Endpoint untuk webhook POST (contoh sederhana)
app.post('/webhook', (req, res) => {
  console.log('Webhook diterima:', req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
