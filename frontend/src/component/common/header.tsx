import React from "react";
import Button from "../button";

import { logout } from '@/store/slices/auth';
import { params } from '@/utils/apiRequest'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
 
      // const params : params = {
      //   payloadBody:{
      //     username: values.username,
      //     password: values.password,
      //   }
      // };

const Header : React.FC = () => {

  const dispatch = useAppDispatch();

  const HandleLogout=()=>{
    dispatch(logout())
  }

    return (
     <header className="header">
      <div className='header-container'>
        <img className='logo' src='/assets/images/logo.png'/>
        <div className='header-extra'>
          <Button title="Profile" className='rounded header-button' icon={<img  src='/assets/icons/user.svg' alt=""/>} />
           <div className='vertical-seperator header-extra-seperator-margin'/>
          <Button title="Cart" className='rounded header-button' icon={<img  src='/assets/icons/bag-happy.svg' alt=""/>} />
          <div className='vertical-seperator header-extra-seperator-margin'/>
          <Button title="log out" onClick={HandleLogout} className='rounded header-button' icon={<img  src='/assets/icons/logout.svg' alt=""/>} />
        </div>
      </div>
    </header>
    )
  
}

export default Header;
  