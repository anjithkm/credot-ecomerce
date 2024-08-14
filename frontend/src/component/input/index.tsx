import React, { ComponentProps } from "react";

interface InputProps extends ComponentProps<any>{
error?:string,
}

const Input:React.FC<InputProps>=({error,...props})=>{
  
    return (
        <div >
            <input {...props} >

            </input>
            <p className="input-error">{error}</p>
        </div>
  
    )
  
}

export default Input;