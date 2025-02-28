const bcrypt = require('bcrypt')
const User=require('../models/User')
const registerUser=(req,res)=>{
    const {name,email,password,role}=req.body

    
    //check if email exist
    User.findByEmail(email,(err,result)=>{
        if(err) return res.status(500).send("Database error");
        if(result.length>0){
            req.flash('Error','Already Email exist Please Register')
            return res.redirect('/register')
        }
    })


    //Hash the Password
    bcrypt.hash(password,10,(err,hash)=>{
        if(err)return res.status(500).send('Error Handling');


        User.create(name,email,hash,role,(err)=>{
        if(err)return res.status(500).send('Error creating data');
            req.flash('Success','Registration Successfull Please Login')
            return res.redirect('/login')

        })

    })

}  

//login User
const LoginUser=(req,res)=>{
    const {email,password}=req.body
    console.log(email,password);
    
     User.findByEmail(email,(err,results)=>{
        console.log(results[0].password,"rs");
        
        if(err||results===0){
            req.flash('Error','Invalid Email or Password')
            return res.redirect('/login')
     }
     const user=results[0];
     bcrypt.compare(password,user.password,(err,isMatch)=>{
        if(err||!isMatch){
            console.log("error in match password");
            
            req.flash('Error','Invalid Email or Password')
            return res.redirect('/login')


        }
        req.session.user=user
        res.redirect(user.role==='staff'?'/staff/dashboard':'/student/dashboard')
     })
    }
     
    )

    
}




const ShowLoginPage=(req,res)=>{
    res.render('auth/login',{message:req.flash('error')})
}


const ShowRegisterPage=(req,res)=>{
    res.render('auth/register',{message:req.flash('error')})
}



module.exports={registerUser,LoginUser,ShowLoginPage,ShowRegisterPage}
