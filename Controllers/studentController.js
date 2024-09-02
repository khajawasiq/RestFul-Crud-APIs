import Student from '../model/studentModel1.js';


export const create = async (req, res) => {
    try {
      const studentData = new Student(req.body);
      const { email } = studentData;
  
      // Ensure you're using the correct model
      const studentExist = await Student.findOne({ email }); // Changed User to Student
      if (studentExist) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const savedUser = await studentData.save();
      return res.status(200).json({ savedUser });
    } catch (error) {
      console.error("Error creating student:", error); // Log the error
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  export const update = async(req,res) => {
    try {
        const id=req.params.id;
        const studentExist= await Student.findOne({_id:id});
        if (!studentExist) {
           return  res.status(404).json({message:"student not exist"})
            
        }
        const updateUser=await Student.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
  };
  
  export const deleteStudent=async(req,res) => {
    try {
      const id=req.params.id;
      const studentExist= await Student.findOne({_id:id});
      if (!studentExist) {
         return  res.status(404).json({message:"student not exist"})
          
      }
      await Student.findByIdAndDelete(id);
      res.status(200).json({message:"student deleted "})
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }
  
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    if (students.length === 0) {
      // Send a 404 response instead of 400 for not found
      return res.status(404).json({ message: "Users not found" });
    }

    // Correct response method
    return res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


