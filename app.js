import express from 'express';
import { config } from 'dotenv'
import errorMiddleware from './middlewares/errorMiddleware.js'
import { loggerMiddleware } from './middlewares/loggerMiddleware.js';
import testRouter from './routes/testRouter.js';
import connectDB from './database/connectDB.js'
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRouter.js';

// env config
config();

// express server 
const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL || `mongodb://localhost:27017/movieDB_01`



// mongoose DB connect
connectDB(process.env.DATABASE_URL || DATABASE_URL, () => {
    init();
    app.listen(port, () => {
        console.log(`Server is running in port ${port}`);
    })
});

const init = () => {

    // Global Middleware
    app.use(express.json());
    app.use(loggerMiddleware);

    // routes
    app.use('/api/tests', testRouter);
    app.use('/api/products', productRouter);
    app.use('/api/users', userRouter);


    // Error Handle
    app.use(errorMiddleware);
}

