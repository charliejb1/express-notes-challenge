const express = require("express")
const routes = require("./routes/index.js")
const path = require('path')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes)

const PORT = process.env.port || 3001;

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
