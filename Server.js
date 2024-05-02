import express from "express";
import mongoose from "mongoose";
import { Plan } from "./data/planSchema.js"
const app = express();
app.use(express.json());

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/100-DOC');
    console.log("conected to db");
}

app.get("/", (req, res) => {
    res.send("root dir");
});

app.get("/plans", (req, res) => {

})

app.post("/PlanNoOfDays", async (req, res) => {
    try {
        const { no_days } = req.body;
        const days_data = [];
        // const { no_days, days_data } = req.body;
        for (let i = 1; i <= no_days; i++) {
            days_data.push(
                {
                    day_no: i,
                    day_task_link: {
                        task: "",
                        link: ""
                    }
                }
            )
        }
        const newPlan = new Plan({ no_days, days_data });
        // await newPlan.save(); // Save the new plan to the database
        console.log(JSON.stringify(newPlan, null, 2));
        res.status(201).json(newPlan);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating plan");
    }
});

app.post("/AddDayData", async (req, res) =>{
    try{
        const task_link = [];
        const {no_days} = req.body.no_days;
        for(let i = 1 ; i<no_days ;i++){
            task_link.push(
                {
                     
                }
            )
        }
    }catch(err){
        console.log(err);
        res.status(500).send("Error adding data");
    }
})

app.listen(8080, () => {
    console.log("port 8080 is listening");
});


