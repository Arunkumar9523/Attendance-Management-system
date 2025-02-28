const Attendance=require('../models/Attenance')

const showStudentDashboard = (req, res) => {
    const userId = req.session.user.id;
console.log(userId,"gh");

    Attendance.getAttenanceByUser(userId, (err, results) => {
        if (err) return res.status(500).send('Database error');
        res.render('student/dashboard', { records: results });
    });
};

const markAttendance=(req,res)=>{
    const userId= req.session.user.id;
    const date=new Date().toISOString().slice(0,10)
    const status="Present";
    const name="Arun"
    Attendance.markAttenance(userId,date,status,name,(err)=>{
        if (err) return res.status(500).send('Error marking Attendance');
        res.redirect('/student/dashboard');

    })
}

module.exports={showStudentDashboard,markAttendance}