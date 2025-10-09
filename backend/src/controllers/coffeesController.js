import Coffee from "../models/Coffee.js";

export async function getAllCoffees (_, res) {
    try {
        const coffees = await Coffee.find().sort({createdAt:-1});
        res.status(200).json(coffees);
    } catch (error) {
        console.error("Error in getAllCoffees controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getCoffeeById (req, res) {
    try {
        const coffee = await Coffee.findById(req.params.id);
        if(!note) return res.status(40).json({ message: "Coffee not found!" });
        res.status(200).json(coffee);
    } catch (error) {
        console.error("Error in getCoffeeById controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function createCoffee (req, res) {
    try {
        const {title,content} = req.body;
        const coffee = new Coffee({title, content});

        const savedCoffee = await coffee.save();
        res.status(201).json(savedCoffee);
    } catch (error) {
        console.error("Error in createCoffee controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateCoffee (req, res) {
    try {
        const { title, content } = req.body;
        const updatedCoffee = await Coffee.findByIdAndUpdate(
            req.params.id,
             { title, content },
             {
                new: true,
             }
            );
        if (!updatedCoffee) return res.status(404).json({message:"Coffee not found"});
        res.status(200).json(updatedCoffee);
    } catch (error) {
        console.error("Error in updateCoffee controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteCoffee (req, res) {
    try {
        const deleteCoffee = await Coffee.findByIdAndDelete(req.params.id);
        if(!deletedCoffee) return res.status(404).json({message:"Coffee not found"});
        res.status(200).json({message:"Coffee deleted successfuly"});
    } catch (error) {
        console.error("Error in deleteCoffee controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}