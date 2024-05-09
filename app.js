const express = require("express");
const app = express();
const bookRoute = require("./routes/booksRoutes");
require("./connection/connection");
app.use(express.json());
app.use("/api/v1", bookRoute);

app.listen(2000,() =>{
    console.log("SERVER STARTED SUCCESSFULLY");
});

