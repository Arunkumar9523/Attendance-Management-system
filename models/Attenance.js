const db= require('../config/db')
const Attenance={
    //student attenance inserting
    markAttenance:(user_id,date,status,name,callback)=>{
        const query='INSERT INTO attendance (user_id,date,status,name) values(?,?,?,?)'
        db.query(query,[user_id,date,status,name],callback)
    },

    //staff
    getAllAttenance:(callback)=>{
        const query='SELECT * FROM attendance'
        db.query(query,callback)
    },

    //specfic
    getAttenanceByUser:(user_id,callback)=>{
        const query='SELECT * FROM attendance WHERE user_id=?'
        db.query(query,[user_id],callback)
    

    }


}

module.exports=Attenance;