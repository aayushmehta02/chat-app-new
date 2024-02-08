import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export  const signupUser = async(req,res)=>{
    try{
        const { fullName, username, password, confirmPassword, gender } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });

        }
        //HASH PASSWORDj

        //avatars
        const boyProfilePics =` https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePics =` https://avatar.iran.liara.run/public/girl?username=${username}`


        const newUser = new User({
            fullName,
            username,
            password,
            gender,
            profilePicture :gender === "Male"? boyProfilePics: girlProfilePics ,
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res)
            await  newUser.save();

        res.status(201)
        .json({
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePicture: newUser.profilePicture
        })
    }else{
        res.status(400).json({error:"Invalid user data"})
    }
        
   
    }catch(error){
    console.log("THE ERROR IS ", error)
    res.send("signup")
    }
}

export  const loginUser  = async (req,res)=>{
    try {
        const{username,password}= req.body;
       let user=await User.findOne({username});
     
       if(!user){
           return res.status(400).json({error:'The user deos not exist'})
        }
    } catch (error) {
        console.log("THE ERROR IS ", error)
        res.send("login")
        
    }
    console.log("loginUser")
}

export  const logoutUser  = (req,res)=>{
    console.log("logoutUser")
}