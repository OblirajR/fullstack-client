import React from "react"
import styles from './home.module.css'
import { useLocation } from "react-router-dom"
// import axios from "axios"

const Home=()=>{
    const location=useLocation()

    // useEffect(()=>{
    //     axios.get("http://localhost:5001/signup")
    //     .then(res=>console.log(res))
    // })
    return(
        <div className={styles.logdiv}>
            <h1 >Hello! {location.state.id.fname} {location.state.id.lname}</h1>
            <h1>Welcome to the Home Page</h1>
        </div>
    )
}

export default Home