const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

  
  router.get("/", (req,res) => {
      res.json({
          message:"public/images/upload_file-1710513919416-955302328.jpg"
        })
    })
    
   //this will call like this /api/profile/upload
  router.post("/upload", upload.single("upload_file"), (req,res) => {
    console.log(req.body); 
    console.log(req.file); 
    res.json({
          message:"Image Uploaded!"
        })
    })
    
    // router.use((req, res, next) => {
    //     console.log("PROFILE!!!");
    //     next();
    // })
module.exports = router;