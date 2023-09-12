import mongoose from "mongoose";

export default async function db(){
    const url = process.env.DB_URL;
    mongoose.connect(url)
    .then(()=>{
        console.log("DB connection is succsess");
    })
    .catch(err=>{
        throw new Error(`DB connect fail: ${err}`);
    })
}