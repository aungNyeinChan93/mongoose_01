import chalk from "chalk"

export const loggerMiddleware = async (req, res, next) => {
    console.log(chalk.green(`${req.method} : ${req.protocol}://${req.get('host')}${req.originalUrl}`));
    next();
}
