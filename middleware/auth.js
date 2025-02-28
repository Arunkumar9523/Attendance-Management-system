
const ensureAuthenticated = (req, res, next) => {
    if (req.session.user) {
        return next();

    }
    console.log("error in middle1");
    res.redirect("/login")
};

const ensureRole = (role) => (req, res, next) => {
    if (req.session.user && req.session.user.role === role) {
        return next();
    }
    console.log("error in middle2");
    
    req.redirect("/login")
}



module.exports = { ensureAuthenticated, ensureRole };