import { useState,useEffect } from "react"

const Home=()=>{
const [color,setColor]=useState("verde")

useEffect(()=>{
  const interval=setInterval(()=>{
    if(color==="verde"){
setColor("amarillo")
    }else if(color==="amarillo"){
      setColor("rojo")
    }
    else if (color==="rojo"){
      setColor("verde")
    }
  },1000)
  return()=>clearInterval(interval)
},)

  return(
<>
<div className="bg-dark d-flex gap-3 flex-column w-25 mx-auto justify-content-center align-items-center p-3 mt-5">
  <div onClick={()=>setColor("verde")} className={`luz rounded-circle ${color==="verde"?"bg-success":"bg-secondary"}`}></div>
  <div onClick={()=>setColor("amarillo")} className={`luz  rounded-circle ${color==="amarillo"?"bg-warning":"bg-secondary"}`}></div>
  <div onClick={()=>setColor("rojo")} className={`luz  rounded-circle ${color==="rojo"?"bg-danger":"bg-secondary"}`}></div>
</div>
</>

  )
}
export default Home