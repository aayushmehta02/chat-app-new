import User from "../models/user.model.js";


export  const signupUser = async(req,res)=>{
    try{
        const {fullName, username, password, confirmPassword, gender}
        = req.body;
        if(password!== confirmPassword){
            return res.status(400).json({msg:"Passwords do not match"})
        }
        const  user = await User.findOne({username});
        if(user){
            return res.status(400).json({msg: 'Username already exists'})
        };


        //HASH PASSWORD

        //avatars
        const boyProfilePics =` https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePics =` https://avatar.iran.liara.run/public/girl?username=${username}`


        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePicture :gender === "male"? boyProfilePics: girlProfilePics ,
        })

        await  newUser.save();

        res.status(201)
        .json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePicture: newUser.profilePicture
    })
   
    }catch(error){
    console.log("signupUser")
    res.send("signup")
    }
}

export  const loginUser  =  (req,res)=>{
    console.log("loginUser")
}

export  const logoutUser  = (req,res)=>{
    console.log("logoutUser")
}