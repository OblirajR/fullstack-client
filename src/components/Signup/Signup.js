import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import style from './signup.module.css'
// import { syncIndexes } from "mongoose"

function Signup(){

    const [user,Setuser] = useState({
        fname:"",
        lname:"",
        email:"",
        password:""
    })
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()                  
        // console.log(user)
        axios.post("https://fullstack-api.vercel.app/signup",user)
        .then(res=>{alert(res.data.message)
            navigate('/login')
        })
        .catch(err=>alert(err.request.responseText))
    }

    return(
        <div className={style.logdiv}>
            <div className={style.maindiv}>
                <h1 className={style.head}>SIGN UP</h1>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className={style.container}>
                        <label className={style.label} htmlFor="fname">First Name :</label>
                        <input className={style.input} type="text" id="fname" placeholder="Enter FirstName" onChange={(e)=>Setuser({...user,fname:e.target.value})}/>
                    </div>
                    <div className={style.container}>
                        <label className={style.label} htmlFor="lname">Last Name :</label>
                        <input className={style.input} type="text" id="lname" placeholder="Enter LastName" onChange={(e)=>Setuser({...user,lname:e.target.value})}/>
                    </div>
                    <div className={style.container}>
                        <label className={style.label} htmlFor="email">Email :</label>
                        <input className={style.input} type="email" id="email" placeholder="Enter Email" onChange={(e)=>Setuser({...user,email:e.target.value})}/>
                    </div>
                    <div className={style.container}>
                        <label className={style.label} htmlFor="pass1">Password :</label>
                        <input className={style.input} type="password" id="pass1" placeholder="Create Password" onChange={(e)=>Setuser({...user,password:e.target.value})}/>
                    </div>
                    <button className={style.btn}>SignUp</button>
                    <p className={style.para}>Already have an account?</p>
                    <Link className={style.link} to='/login'>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup