const admin = async (req, res, next) => {
    try {
        if (!req.user.isAdmin) {
            throw new Error('Only Admin Can access this route');
        }
        return next();
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
};

module.exports = admin;
