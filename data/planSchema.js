import mongoose from "mongoose";

const planSchema = new mongoose.Schema(
    {
        no_days: Number,
        days_data: [
            {
                day_no: Number,
                day_task_link: {
                    task: String,
                    link: String
                }
            }
        ]
    }
);
const Plan =  mongoose.model('Plan', planSchema);
export {Plan};