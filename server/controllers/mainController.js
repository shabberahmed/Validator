import { xpress } from "../models/data.js";

export const oneController=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const Data=new xpress({
            email:email,
            password:password,
        })
        await Data.save()
        res.json({m:"data sent"})
    }
    catch (err) {
        if (err.code === 11000) {
           
            res.json({
                mail: 'Email already exists',
                pass: ""
            });
        } else if (err.errors) {
            const emailError = err.errors.email && err.errors.email.message ? err.errors.email.message : "";
            const passwordError = err.errors.password && err.errors.password.message ? err.errors.password.message : "";
            res.json({
                mail: emailError || "",
                pass: passwordError || ""
            });
        } else {
            res.json({
                mail: "",
                pass: ""
            });
        }
        // res.json({err})
    }
    
    
    
}

