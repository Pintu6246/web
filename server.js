const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static HTML files from a folder named "public"
app.use(express.static(path.join(__dirname, 'Desktop', 'web')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
