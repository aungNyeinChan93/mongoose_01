import Product from "../models/Product.js";


const productController = {
    createProduct: async (req, res, next) => {
        try {
            const { name, price, quantity, description, category } = req.body;
            const product = await Product.create({ name, price, description, quantity, category });
            if (!product) {
                return next(new Error('Error Found!'))
            }
            return res.status(201).json({
                mess: 'success',
                result: product
            })
        } catch (error) {
            return next(error)
        }
    },
    getProducts: async (req, res, next) => {
        try {
            const product = await Product.find().sort({ category: 1 });
            if (!product) {
                return next(new Error('Products not found!'));
            }
            return res.status(200).json({ mess: 'sucess', product })

        } catch (error) {
            return next(error)
        }
    },
    getProduct: async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await Product.findById(id);
            if (!product) {
                return next(new Error('Products not found!'));
            }
            return res.status(200).json({ mess: 'sucess', product })

        } catch (error) {
            return next(error)
        }
    },
    modifyProduct: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { name, price, quantity, description, category } = req.body;
            const product = await Product.findByIdAndUpdate(
                id,
                { name, price, quantity, description, category },
                { new: true }
            );

            if (!product) {
                return next(new Error('Products not found!'));
            }

            return res.status(200).json({ mess: 'sucess', product })

        } catch (error) {
            return next(error)
        }
    },
    dropProduct: async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await Product.findByIdAndDelete(id);
            if (!product) {
                return next(new Error('Products not found!'));
            }
            return res.status(200).json({ mess: 'sucess', product })

        } catch (error) {
            return next(error)
        }
    },
};

export default productController;