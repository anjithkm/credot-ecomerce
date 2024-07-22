import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NavigateTo : React.FC<{path:string}>=({path=""})=>{
  const  nav =  useNavigate()
  useEffect(()=>{
    nav(path)
  })

  return null
}

export default NavigateTo