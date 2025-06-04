import Test from "../models/Test.js";


const testController = {
    test1: async (req, res, next) => {
        return res.status(200).json({ result: 'This is testing One!' });
    },
    test2: async (req, res, next) => {
        return res.status(200).json({ result: 'This is testing two!' });
    },
    create: async (req, res, next) => {
        try {
            const { name, email, phone } = req.body;
            // const result = await Test({ name, email, phone }).save();
            // const result = await Test.insertOne({ name, email, phone });
            const result = await Test.create({ name, email, phone });

            return res.status(201).json({
                message: 'success',
                test: result
            })
        } catch (error) {
            next(error);
        }
    }
};

export default testController;