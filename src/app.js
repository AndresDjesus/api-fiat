const express = require('express')
const r = require('./routes')
const app = express()
require('dotenv').config()
const port = process.env.APP_PORT || 3001

app.use(express.json());
app.use('/api', r);


app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});