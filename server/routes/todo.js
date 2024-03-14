const express = require("express");
const router = express.Router();
const {checkAuth} = require("../middlewares/auth");

router.get("/", (req,res) => {
    res.json({
        message:"Accessed GET METHOD"
    })
})

router.post("/", checkAuth, (req,res) => {
    const {todo} = req.body;

    if(!("todo" in req.body)){
        return res.status(400).json({
            message:"Does't Exist",
        })
    }
   
    res.json({
            message:"Accessed POST METHOD",
        });
});

module.exports = router;