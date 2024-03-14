const express = require("express");
const cors = require("cors");


const profileRoute = require("./routes/profile");
const todoRoute = require("./routes/todo");
const { listeners } = require("process");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/todo", todoRoute);
app.use("/api/profile", profileRoute);

const PORT = 3006;
app.listen(PORT, ()=> {
console.log(`server running on http://localhost:${PORT}`)
});