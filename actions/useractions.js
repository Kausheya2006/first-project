"use server"
import connectDb from "@/public/db/connectDB"
import User from "@/models/User"
import ItemList from "@/models/ItemList"

export const fetchuser = async (username) =>{
    await connectDb()
    let user= await User.findOne({username: username}).lean()
    if (user) {
      // Ensure _id is a string (converted from Buffer or ObjectId)
      user._id = user._id.toString();
  }
    return user
}

export const updateProfile = async (data, oldusername) =>{
    await connectDb()
    let ndata = Object.fromEntries(data)
    // If the username is being updated, check if username is available
    if (oldusername !== ndata.username){
        let u = await User.findOne({username: ndata.username})
        if (u){
            return {error:"Username already exists"}
        }

    }
    await User.updateOne({email: ndata.email}, ndata)
}

export const createReport = async (data, username) =>{
    await connectDb()
    let user = await User.findOne({username: username})
    //const imageBuffer = data.itempic ? await data.itempic.arrayBuffer() : null

    console.log("fsfafa "+user)

    await ItemList.create({email: user.email, title: data.title, desc: data.desc, date: data.date, lastseen: data.lastseen, photo: data.itempic, type: data.type, room: user.room, contact: user.contact, uname: user.username })
    
}

export const fetchAllReports = async () => {
    await connectDb()
  
    // Fetch all reports from the ItemList collection
    const reports = await ItemList.find().lean() // .lean() returns plain JavaScript objects instead of Mongoose documents
      // Sanitize the data
      const sanitizedReports = reports.map(report => ({
        ...report,
        _id: report._id.toString(), // Convert _id (ObjectId) to a string
        date: report.date.toISOString(), // Convert Date object to ISO string
    }));

    return sanitizedReports;
  }

  export const deleteReport = async (id) => {
    await connectDb();
    await ItemList.findByIdAndDelete(id); // Deletes the report by its ID
};