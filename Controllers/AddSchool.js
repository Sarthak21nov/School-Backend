import { db } from "../index.js";

export const addSchool = (req, res)=>{
    const {STUDENT_NAME, address, LATITUDE, LONGITUDE} = req.body;

    if(!STUDENT_NAME || !address || !LATITUDE || !LONGITUDE){
        return res.status(404).json({status: false, message: "All the fields are mandatory"})
    }

    const query = "INSERT INTO schools (STUDENT_NAME, address, LATITUDE, LONGITUDE) VALUES (?,?,?,?)"
    db.query(query, [STUDENT_NAME, address, LATITUDE, LONGITUDE] ,(err, result)=>{
        if(err){
            console.log("Ann error occured while adding the school", err)
            return res.status(404).json({status: false, message: "An Error occurred while adding schools"})
        }
        else{
            return res.status(200).json({status: true, message: "Student Record added Successfully", schoolId: result.insertId})
        }
    })
}