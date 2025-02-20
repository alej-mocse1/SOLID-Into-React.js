// import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"
import VantaComponent from "../../component/Vanta/VantaComponent";
// import UserDashboard from "../../component/Example/ExampleC";



const HomePages = () => {  

 
    return(
        <>
        <div style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%", zIndex:"100" , display: "flex", flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <div className={styles.divCenter}>
              <h1>
              <Link to="/S"  className={styles.LinkStyles}>
                S
              </Link>

              <Link to="/O" className={styles.LinkStyles}>
                O
              </Link>

              <Link to="/L" className={styles.LinkStyles}>
                L
              </Link>

              <Link to="/I" className={styles.LinkStyles}>
                I
              </Link>

              <Link to="/D" className={styles.LinkStyles} style={{marginRight:"25px"}}>
                D 
              </Link>
                EN REACT.JS
              </h1>
          </div>

          <p style={{position:"absolute", bottom:"0", right:"0", maxWidth:"100%", textAlign:"center", color:"white", textAlignLast:"right", paddingRight:"20px"}}>
            Desarrollada por Alejandro Mocse 🤍
          </p>
          {/* <UserDashboard 
    username="Juan"
    email="juan@example.com"
    isAuthenticated={false}
    logout={() => alert("Cerrando sesión")}
/>  */}

       </div>

   
         <VantaComponent/> 
        </>
    )
 }


 export default HomePages;  