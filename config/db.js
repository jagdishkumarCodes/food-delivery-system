import mongoose from "mongoose";

export const  connectDB = async () =>{
    // await mongoose.connect('mongodb+srv://utkarshanand:utkarshtomatoanand@cluster0.gr6lr.mongodb.net/food-del').then(()=>console.log("DB Connected"))
    await mongoose.connect('mongodb+srv://SitaRam:SitaRam3136@cluster0.1if88.mongodb.net/food-del').then(()=>console.log("DB Connected"))

}
