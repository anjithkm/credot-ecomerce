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
              data && data?.items && data?.items?.length > 0 && (

                <div className='product-grid-container' >
                  <div className="product-main" >
                          <Card item={data?.items[0]} key={0} isSmall={false}/>
                  </div> 
                  <div className="product-grid" style={{width:'100%',height:'800px'}}>
                  {
                    data?.items?.map( (element:any,index:number) => {
                      if(index !== 0){
                        return <Card item={element} key={index} isSmall={true}/>
                      }
                      
                    })
                  }
                  </div>
                </div>

                // <div className='product-grid'>
                //   {
                //     data?.items?.map( (element:any,index:number) => {
                //       return <Card item={element} key={index} isSmall={index !== 0}/>
                //     })
                //   }
                //  </div>

              ) || (
                <div className="empty-container"> 
                <img style={{width:'400px',height:'100%'}} src='/assets/images/no-product-found.png'></img>
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