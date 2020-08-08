require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

require("./startup/db")();
require("./startup/cors")(app);
require("./startup/routes")(app);

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
