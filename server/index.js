const express = require("express");
const cors = require("cors");
const {checkAuth} = require("./middlewares/auth")
const { listeners } = require("process");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {
    res.json({
        message:"Accessed GET METHOD"
    })
})

app.post("/", checkAuth, (req,res) => {
   
   return res.json({
            message:"Accessed POST METHOD",
        });
});


const PORT = 3006;
app.listen(PORT, ()=> {
console.log(`server running on http://localhost:${PORT}`)
});