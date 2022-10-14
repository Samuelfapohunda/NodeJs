const authMiddleware = (req, res, next) => {
    console.log("i am test middleware");
    next()
}

module.exports = authMiddleware;