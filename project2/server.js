const express = require("express");
const cookieParser = require("cookie-parser");
const routes = require("./routers");

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1", routes);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
