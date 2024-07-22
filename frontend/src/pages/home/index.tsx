import React,{useEffect, useState} from "react";
import Slider from "@/component/carousel";
import Card from "@/component/card";

import {  getProductList,clearError} from '@/store/slices/product';
import { useAppDispatch, useAppSelector } from '@/store/hooks';



const Home: React.FC = () => {

  const dispatch = useAppDispatch();
  const { error, data ,loading } = useAppSelector(store => store.product);

  useEffect(()=>{
    dispatch(getProductList())
  },[])

  if(loading){
    return <div>loading...</div>
  }

  return <div> 
  
    <Slider size='big' slidesClass="main-slide"
           containerClass="main-slide-container"
           buttonClass="main-slide-button"
           buttonSize={50}
           slides={['/assets/images/slide-background.png','/assets/images/slide-background.png','/assets/images/slide-background.png']}/>
    
          <div className='products' >
            <div className='product-container' >
          <div className='product-title' >Products</div>
            <div className='horizontal-seperator' style={{marginTop:'22px'}}/>
            {
              data && (

                <div className='product-grid'>
                  {
                    data.map( (element:any,index:number) => {
                      return <Card item={element} key={index} isSmall={index !== 0}/>
                    })
                  }
          </div>
              )
            }
    
            </div>
          </div>
    
          <div className='brands' >
            <div className='brands-container'>
              <p className='brands-title'>Top Brands</p>
               <div className='horizontal-seperator' style={{marginBottom:'67px',marginTop:'22px'}}/>
               <Slider size='small'  slidesClass="brands-slides"  buttonClass="brands-slides-button"  buttonSize={40} slides={['/assets/images/apple.png','/assets/images/realme.png','/assets/images/sony.png','/assets/images/redmi.png','/assets/images/samsung.png','/assets/images/lg.png','/assets/images/dell.png']}/>
            </div>
          </div>
    
          </div>;
};

export default Home;

    // "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",
    // "eject": "react-scripts eject"