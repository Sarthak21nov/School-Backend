import { db } from "../index.js";
import { CalculateDistance } from "../Utility/CalculateDistance.js";

export const ListSchools = (req,res)=>{
    const { LATITUDE, LONGITUDE } = req.body;
    if(!LATITUDE || !LONGITUDE) {
        return res.status(404).json({"status": false, "message": "Latitude and Longitude are mandatory"})
    }

    const userLatitude = parseFloat(LATITUDE);
    const userLongitude = parseFloat(LONGITUDE);

    const query = "Select * from schools"
    db.query(query, (err, results)=>{
        if(err){
            console.log("Error Fetching The data from Database", err)
            return res.status(404).json({status: false, message: "An Error occurred while fetching the data"})
        }

        const schools = results.map((school) => {
            if (isNaN(school.LATITUDE) || isNaN(school.LONGITUDE)) {
                return { ...school, distance: null };
            }
            const distance = CalculateDistance(userLatitude, userLongitude, school.LATITUDE, school.LONGITUDE);
            return { ...school, distance };
        });

        schools.sort((a,b) => a.distance - b.distance)

        return res.status(200).json({status: true, message: "List of all the students", schools})
    })
}