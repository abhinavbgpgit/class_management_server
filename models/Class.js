import mongoose from "mongoose";

const classSchema = new mongoose.Schema(

    {
        className:
        {
            type: String,
            required: true
        },
        classTime:
        {
            type: String,
            required: true
        },
        studentName:
        {
            type: String,
            required: true
        },
        teacherName:
        {
            type: String,
            required: true
        }
    }

)

const Class = mongoose.model("Class", classSchema)
export default Class