
const errorMiddleware = (err, res) => {
    if (err) {
        res.status(500).json({ message: err.message })
    }
}

export default errorMiddleware;