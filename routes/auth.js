const router = require("express").Router();
const User = require("../models/user")

//Register 
router.get("/register", async (req,res) => {
    //async process so need to add await/async, run code without freezing the rest 
    const user = await new User({
        username:"Omar",
        email:"omar.muhammad@live.com",
        password:"password"
     
    })
    await user.save()
    res.send("OK")
})

module.exports = router