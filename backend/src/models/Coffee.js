import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type:String,
        require: true,
    },
});

const Coffee = mongoose.model("Coffee", coffeeSchema)

export default Coffee