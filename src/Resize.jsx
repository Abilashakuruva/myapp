
import React from 'react'
import { useState,useEffect} from 'react'

const Resize = () => {
    const[ScreenSize,setScreenSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight,
    });

    const updateScreenSize=()=>{
        setScreenSize({
            width:window.innerWidth,
            height:window.innerHeight,
        });
    };

    useEffect(()=>{
        window.addEventListener("resize",updateScreenSize);

        return()=>{
            window.removeEventListener("resize",updateScreenSize);
        };
    },[]);

  return (
    <div>
      <h1>Screen Size Example</h1>
      <p>Resize the window to see the screen size:</p>
      <p style={{color:"red"}}>Width:{ScreenSize.width}px</p>
      <p style={{color:"red"}}>Height:{ScreenSize.height}px</p>

    </div>
  )
}

export default Resize;
