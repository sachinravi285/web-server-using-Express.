const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // ✅ Use environment port on Render
const serverStartTime = Date.now();

app.use(express.static('public'));

app.get('/uptime', (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - serverStartTime) / 1000);
  res.json({ uptime: uptimeSeconds });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
