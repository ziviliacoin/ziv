// server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Zivilia Webhook is alive"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
