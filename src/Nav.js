import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show,setShow]=useState(false);

    const transitionNavBar=()=>{
        if(window.scrollY>100)
        setShow(true);
        else
        setShow(false);
    };
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar);
        return ()=>window.removeEventListener('scroll',transitionNavBar);
    },[])
    return (
        <div className={`nav ${show && `nav__black`}`}>
            <div className="nav__contents">
                <img className="nav__logo" src="https://pngimg.com/uploads/netflix/netflix_PNG26.png"/>
                <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"/>  
            </div>
        </div>
    )
}

export default Nav
