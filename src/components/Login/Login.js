import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import styles from "./login.module.css"

function Login(){

    const [details,setdetails]=useState({
        email:"",
        password:""
    })
    const nav = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("https://fullstack-api.vercel.app/login",details)
        .then(res=>{alert(res.data.message)
            nav("/home",{state:{id:res.data.result}})
        })
        .catch(err=>alert(err.request.responseText))
        
    }
    return(
        <div className={styles.logdiv}>
            <div className={styles.maindiv}>
                <h1 className={styles.head}>LOGIN</h1>
                <form onSubmit={(e)=>handleSubmit(e)} className={styles.form}>
                    <div className={styles.container}>
                        <label className={styles.label} htmlFor="email">Email :</label>
                        <input className={styles.input} type="email" id="email" placeholder="Enter Email" onChange={(e)=>setdetails({...details,email:e.target.value})}/>
                    </div>
                    <div className={styles.container}>
                        <label className={styles.label} htmlFor="password">Password :</label>
                        <input className={styles.input} type="password" id="password" placeholder="Enter Password" onChange={(e)=>setdetails({...details,password:e.target.value})}/>
                    </div>

                        <button className={styles.btn}>Login</button>

                    <p className={styles.para}>Doesn't have an account?</p>

                        <Link className={styles.link} to='/signup'>Signup</Link>

                </form>
            </div>
        </div>
    )
}

export default Login