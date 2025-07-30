const express = require('express');
const app = express();

// Route utama
app.get('/', (req, res) => {
  res.send('ZIV wallet backend is alive! 🚀');
});

// Port listener (Railway akan auto-set PORT environment)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
