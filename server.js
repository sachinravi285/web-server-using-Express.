const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const serverStartTime = Date.now();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to return server uptime
app.get('/uptime', (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - serverStartTime) / 1000);
  res.json({ uptime: uptimeSeconds });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
