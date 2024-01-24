import React, { useEffect, useState } from 'react'
import "./navbar.css"

const Navbar = () => {
   
    const [showHedder,setShowHedder]=useState(false);

    useEffect(()=>{
      window.addEventListener("scroll",()=>{
       if(window.scrollY>100){
        // console.log(window.scrollY)
        setShowHedder(true)
       }else{
        setShowHedder(false)
       }
       return ()=>{
          window.addEventListener("scroll")
       }
      })
    },[])


  return (
    <div className={`navbar ${showHedder&&"showheader"}`}>
            <div className="nav-logo">
                <img src={"https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"} alt='cart-logo' />
            </div>
              
              <div className='navmenu'>
              <ul className={`${showHedder==true?"nav-menuu":"nav-menu"}`}>
                <li >Home</li>
                <li>Service</li>
                <li>Blog</li>
                <li>About</li>
               </ul>
               <button>
                Book now
               </button>
              </div>
              
           
        </div>
  )
}

export default Navbar
