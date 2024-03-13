const checkAuth = (req,res,next) => {
    const {auth} = req.body;
    if(!auth){
         res.status(401).json({
        message:"UnAuthorized",
    });
    }
console.log("inside Middlewares")
next();
}

module.exports = {checkAuth};