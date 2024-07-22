import React, { useState, ComponentProps,ReactElement } from "react";

interface ButtonProps extends ComponentProps<any>{
    icon?:ReactElement<HTMLImageElement>;
}

interface QuantityButtonProps extends ComponentProps<any>{
  count:number;
  setCount:any;
}


export const QuantityButton:React.FC<QuantityButtonProps>=({count=0,setCount,...props})=>{

  return (
    <div {...props}>
      <div style={{display:'flex',height:'100%',border:'1px solid #E2E2E2',width:'100%',justifyContent:'center'}} >
        <button className='count-button' onClick={()=>{setCount(count-1)}} style={{border:'none',width:'100%',display:'flex',cursor:'pointer',outline:'none',backgroundColor:'transparent'}}><img  style={{margin:'auto'}}  src='/assets/icons/minus.svg' alt=""/></button>
        <div className="count"  style={{display:'flex',justifyContent:'center',width:'100%',alignItems:'center',border:'solid #E2E2E2',borderWidth:'0px 1px 0px 1px',padding:'0px 10px 0px 10px'}} >{count}</div>
        <button className='count-button' onClick={()=>{setCount(count+1)}} style={{border:'none',display:'flex',width:'100%',cursor:'pointer',outline:'none',backgroundColor:'transparent'}}><img  style={{margin:'auto'}} src='/assets/icons/plus.svg' alt=""/></button>
      </div>
    </div>
    
  )

}


export const Button:React.FC<ButtonProps>=({icon,...props})=>{
  
    return (
     <button {...props} >
      <div style={{margin:'auto',display:'flex',height:'fit-content',width:'fit-content',justifyContent:'center'}} >
       {props.children} {icon}
       </div>
    </button>
    )
  
}

export default  Button;
  