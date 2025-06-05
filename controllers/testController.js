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
    },
    getAll: async (req, res, next) => {
        try {
            const tests = await Test.find().sort({ name: -1 });
            if (!tests) {
                return next(new Error('Not found Tests!'))
            }
            return res.status(200).json({
                mess: 'success',
                tests
            })
        } catch (error) {
            return next(error)
        }
    },
    getTest: async (req, res, next) => {
        try {
            const { id } = req.params;
            // const test = await Test.find({ _id: id }, { _id: 0 });
            // const test = await Test.findOne({ _id: id }, { _id: 0 });
            // const test = await Test.findOne({ _id: id }, 'name email');
            // const test = await Test.findOne({ _id: id }, 'name email').lean();  // toArray and toObject
            const test = await Test.findById(id, 'name email');
            res.status(200).json({
                mess: 'success',
                test
            })
        } catch (error) {
            return next(error)
        }
    },
    modifyName: async (req, res, next) => {
        try {
            const test = await Test.updateOne({ _id: req.params.id }, { $set: { name: req.body.name } });
            if (test.acknowledged) {
                return res.status(200).json({
                    mess: 'success',
                    result: test.acknowledged,
                })
            }

        } catch (error) {
            return next(error)
        }
    },
    destroyTest: async (req, res, next) => {
        try {
            const { id } = req.params;
            const test = await Test.deleteOne({ _id: id });
            if (test.acknowledged) {
                res.status(200).json({
                    mess: 'success',
                })
            }
        } catch (error) {
            return next(error)
        }
    }
};

export default testController;