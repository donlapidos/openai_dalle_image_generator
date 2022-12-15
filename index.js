const path = require("path");
const { urlencoded } = require('express');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//Enable body parser
app.use(express.json());
app.use(urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Server running on port ${port}`));