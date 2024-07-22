import React from 'react';

type Props = {
  error: string
}

export const Error : React.FC< Props >= ({error})=>{

   if(error.length === 0 ){

    return null

   }else{

    return(
      <div>
          {error}
      </div> 
  )

   }
    
}

export default Error ;