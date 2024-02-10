import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id


        const filteredUsers = await User.find({_id: {$ne : loggedInUserId}}).select("-password") // exclude the current user

        res.status(200).json(filteredUsers)
        console.log("Users rendered")
    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
    }
}