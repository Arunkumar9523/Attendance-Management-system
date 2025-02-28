const Attenance = require('../models/Attenance')
const staffPage = (req, res) => {
    if (req.session.user.role !== 'staff')
        req.flash("error", 'your are already in staff login')
    Attenance.getAllAttenance(() => {
        if (err, results) return res.status(500).send("error")


        ///fronend 
    })
}



module.exports =  {staffPage} ;