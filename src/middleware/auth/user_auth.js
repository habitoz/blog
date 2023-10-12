
export default (roles) => async (req, res, next) => {
    try {
        if (!roles || !roles.length) return next();
        else if (roles.includes(req.user.role)) return next();
        else return res.status(401).send({ message: "unauthorized access." })

    } catch (err) {
        return res.status(401).send({ message: "unauthorized access." })
    }
}