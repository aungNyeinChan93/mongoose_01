import User from '../models/User.js'

const userController = {
    createUser: async (req, res, next) => {
        try {
            const { name, email, age, hobies, address } = req.body;
            const user = await User.create({ name, email, age, hobies, address });

            if (!user) {
                return next(new Error('user create failed!'))
            }
            return res.status(201).json({
                message: 'success',
                result: user,
            })
        } catch (error) {
            return next(error)
        }
    },
    allUsers: async (req, res, next) => {
        try {
            const users = await User.find({}, { __v: 0 }).populate('bestFriend').lean();
            // const users = await User.find({}, 'name email').lean();
            // const users = await User.find().select(['name', 'email']).lean();
            if (!users) {
                return next(new Error('user create failed!'))
            }
            return res.status(201).json({
                message: 'success',
                result: users,
                total: users.length
            })
        } catch (error) {
            return next(error)
        }
    }
};


export default userController;