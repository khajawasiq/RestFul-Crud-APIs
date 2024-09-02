import User from '../model/userModel.js'
import mongoose from 'mongoose'


export const create = async (req, res) => {
    try {

        const userData = new User(req.body);
        const { email } = userData;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exist" })
        }
        const savedUser = await userData.save();
        res.status(200).json({ savedUser })
    } catch (error) {
        res.status(500).json({ error: "internal server eror" })
    }
};

export const update = async (req, res) => {
    try {
      const id = req.params.id;
      console.log("🚀 ~ update ~ id:", id);
  
      // Validate the id format
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
  
      const userExist = await User.findOne({ _id: id });
      console.log("🚀 ~ update ~ userExist:", userExist);
  
      if (!userExist) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(updateUser); // 200 for successful update
    } catch (error) {
      console.error("🚀 ~ update ~ error:", error);
      res.status(500).json({ error: "Internal server error" }); // 500 for server errors
    }
  };

  export const deleteUser=async(req,res) => {
    try {
        const id = req.params.id;
      console.log("🚀 ~ update ~ id:", id);
  
      // Validate the id format
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
  
      const userExist = await User.findOne({ _id: id });
      console.log("🚀 ~ update ~ userExist:", userExist);
  
      if (!userExist) {
        return res.status(404).json({ message: "User not found" });
      }
      await User.findByIdAndDelete(id); 
      res.status(201).json({message:"user deleted successfuly"}); 
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
  }
  


export const fetch = async (req, res) => {
    try {
        // return res.json("hello world")
        const users = await User.find();
        if (users.length === 0) {
            res.status(400).json({ message: "Users not found .." })
        }
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: "internal server eror" })
    }
};
