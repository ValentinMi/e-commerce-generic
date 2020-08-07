require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.use(express.json());

require("./startup/db")();
require("./startup/cors")(app);
require("./startup/routes")(app);

app.listen(PORT, console.log(`Server listening on port ${PORT}`));
