import { useEffect, useState } from "react"
import "./Style.css"
function useMouse(){
  const [movement, setMovement] = useState({x:"",y:""})
  useEffect(()=>{
    const parallex=(e)=>{
      setMovement({x:e.pageX ,y:e.pageY})
    }
    document.addEventListener("mousemove",parallex)
    return ()=>{
      document.removeEventListener("mousemove",parallex)
    }
  })
  return movement
}
function App(){
  const data=useMouse()
  return(
    <div className="maindiv">
      <div className="imagediv1" style={{transform:`translate(-${data.x/200}px,${data.y/200}px)`}}></div>
      <div className="imagediv2" style={{transform:`translate(${data.x/200}px,-${data.y/200}px)`}}></div>
      <div className="imagediv3" style={{transform:`translate(-${data.x/200}px,-${data.y/200}px)`}}></div>
      <div className="textdiv">PARALLEX .</div>
    </div>
  )
}
export default App;