import React from "react";
import Button from "../button";
import {useNavigate} from 'react-router-dom'

import { logout } from '@/store/slices/auth';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
 

const Header : React.FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { auth,isAuthenticated } = useAppSelector(store => store.auth);

  const HandleLogout=()=>{
    dispatch(logout())
  }

    return (
     <header className="header">
      <div className='header-container'>
        <img className='logo' src='/assets/images/logo.png' onClick={()=>{navigate(`/${auth?.user}/home`)}} />
        {
          isAuthenticated && (
            <div className='header-extra'>
              <Button title="Profile" className='rounded header-button' icon={<img  src='/assets/icons/user.svg' alt=""/>} />
               <div className='vertical-seperator header-extra-seperator-margin'/>
              <Button title="Cart"  onClick={()=>{navigate(`/${auth?.user}/cart`)}} className='rounded header-button' icon={<img  src='/assets/icons/bag-happy.svg' alt=""/>} />
              <div className='vertical-seperator header-extra-seperator-margin'/>
              <Button title="log out" onClick={HandleLogout} className='rounded header-button' icon={<img  src='/assets/icons/logout.svg' alt=""/>} />
            </div>
            )
          }
      </div>
    </header>
    )
  
}

export default Header;
  