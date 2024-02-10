import Conversation from "../models/conversation.model.js";

import Message from "../models/message.model.js";




export const sendMessage = async(req,res)=>{
    try {
        const {message} = req.body
        const {id: receiverId} = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants:{
                $all:[senderId, receiverId]
            }
        })


        if(!conversation){
                conversation = await Conversation.create({
                    participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            message, 
            senderId,
            receiverId

        })


        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        await Promise.all([conversation.save(), newMessage.save()]);
        


        res.status(201).json(newMessage)
        console.log("message sent")
    } catch (error) {
        console.log("Error in sending a message", error);
        res.status(500).json({error: "the error is: ", error})
    }
}

export const getMessage  = async(req,res)=>{
        
        

    try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
        console.log("message recieved")
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}