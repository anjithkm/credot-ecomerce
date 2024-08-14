import React, { useEffect, useState } from "react";
import { Button } from "@/component/button";
import { useNavigate } from "react-router-dom";
  
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCart } from '@/store/slices/cart';
import { createOrder } from '@/store/slices/order';
import { formatePrice } from "@/utils/functions/formate";
import { params } from '@/utils/apiRequest'
import { API_BASE_URL } from "@/config/api"


const Cart: React.FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { cart } = useAppSelector((store:any) => store.cart);
  const { auth } = useAppSelector((store:any) => store.auth);
  const { error,data,loading } = useAppSelector((store:any) => store.order);


  const [cartTotal,seCartTotal]=useState(0)

  useEffect(()=>{

    let total=0;
    cart.forEach((item:any)=>{
      total = total +  item.totalPrice 
    })
    seCartTotal(total)
  },[cart])


  const HandleAddToCart=(selected:any,operation:"+"|"-")=>{

    let temp = cart
    let unselected =  temp.filter((item:any)=>item.productId !== selected.productId)


    if(operation == "+"){
      dispatch(setCart([...unselected,
        {
          ...selected,
          quantity: selected.quantity + 1,
          totalPrice: Math.round( ( (selected.quantity + 1) * selected?.price) * 100) / 100 
        }
      ]))
    }

    if(operation == "-"){
      dispatch(setCart([...unselected,
        {
          ...selected,
          quantity: selected.quantity - 1,
          totalPrice: Math.round( ( (selected.quantity - 1) * selected?.price) * 100) / 100 
        }
      ]))
    }

  }

  const HandlePlaceOrder=()=>{

    if(cartTotal !== 0.00 ){
      const params : params = {

        payloadBody:{
          user:auth?.userId,
          products: cart,
          totalPrice: cartTotal,
        }

      };

      dispatch(createOrder(params))
    }


  }

  const HandleRemoveCart=(selected:any)=>{
    let unselected =  cart.filter((item:any)=>item.productId !== selected.productId)
    dispatch(setCart([...unselected]))
  }

  if(data&& data.orderId){
    setTimeout(()=>{
     navigate(`/${auth?.user}/home`)
    },3000)
    return(
      <div className='success-order' style={{display:'flex',width:'100%',height:'100vh',backgroundColor:'#F9F9F9'}}>
      <div className='message-continer' style={{margin:'auto',display:'flex',flexDirection:'column',width:'100%'}}>
        <div className='green-tick-container rounded' style={{display:'flex',background:'linear-gradient(177.62deg, #F0EEEE 2%, rgba(250, 250, 250, 0) 118.43%, rgba(204, 204, 204, 0.78) 118.43%)',flexDirection:'column',width:'159px',height:'159px',margin:'auto'}}>
         <div className='green-tick rounded' style={{display:'flex',flexDirection:'column',background:'linear-gradient(180deg, #44961D 0%, #34A000 100%)',width:'103px',height:'103px',margin:'auto'}}>
           <img className='tick' src='/assets/icons/tick.svg' alt="tick" />
         </div>
        </div>
        <p className='success-order-title'>Your order has been placed successfully.</p>
        <p className='success-order-sub-title'>Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas placera </p>
      </div>
    </div> 
    )
  }

  // return(
  //   <div>Cart</div>
  // )

  if(loading){
    return<div>loading...</div>
  }

  return (
    <div>
      <div className='cart'>
      <p className='cart-title'>Cart</p>
    </div>
    <div className='cart-container' >
      <div className='cart-table' >

        <div className='table-header'>
          <p className='product-col'>PRODUCT</p>
          <p className='price-col'>PRICE</p>
          <p className='quantity-col'>QUANTITY</p>
          <p className='subtotal-col'>SUBTOTAL</p>
        </div>
        <div className='horizontal-seperator'></div>
        <div style={{width:'100%',minHeight:'357px'}}>
        {
          cart.length === 0 && (
            <p style={{textAlign:'center'}}> No Data </p>
          )
        }
        {
          cart.map((item:any,index:number)=>{
            console.log("item",item)
            return(
              <div className='table-row' key={index}>
              <div className='product-col'>
                <div className='image'>
                  <div className="remove" onClick={()=>{HandleRemoveCart(item)}}>
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.36559 7.30948L2.95752 6.90438L5.20189 4.67635L2.95752 2.44831L3.36559 2.04321L5.60996 4.27125L7.85434 2.04321L8.26241 2.44831L6.01803 4.67635L8.26241 6.90438L7.85434 7.30948L5.60996 5.08144L3.36559 7.30948Z" fill="black"/>
                    </svg>
                  </div>
                  <img  style={{width:'39px',height:'53px'}} src={`${API_BASE_URL}${item?.image}`} alt=""></img>
                </div>
                <span>{ item.name }</span>
              </div>
              <div className='price-col'>{item.price}</div>
              <div className='quantity-col'>
                <div style={{display:'flex',height:'40pxpx',border:'1px solid #E2E2E2',width:'100px',justifyContent:'center'}} >
                  <button className='count-button'  onClick={()=>{HandleAddToCart(item,"-")}} style={{border:'none',width:'100%',display:'flex',cursor:'pointer',outline:'none',backgroundColor:'transparent'}}><img  style={{margin:'auto'}}  src='/assets/icons/minus.svg' alt=""/></button>
                  <div className="count"  style={{display:'flex',justifyContent:'center',width:'100%',alignItems:'center',border:'solid #E2E2E2',borderWidth:'0px 1px 0px 1px',padding:'0px 10px 0px 10px'}} >{item.quantity}</div>
                  <button className='count-button' onClick={()=>{HandleAddToCart(item,"+")}} style={{border:'none',display:'flex',width:'100%',cursor:'pointer',outline:'none',backgroundColor:'transparent'}}><img  style={{margin:'auto'}} src='/assets/icons/plus.svg' alt=""/></button>
                </div>
              </div>
              <div className='subtotal-col'>{item.totalPrice}</div>
            </div>
            )
          })
        }
        </div>

        <div className='horizontal-seperator'></div>

        <div className='coupon'>
          <input className='coupon-input'></input>
          <Button className='apply-coupon-button'>APPLY COUPON</Button>
        </div>
      </div>
      <div className='cart-total'>
        <p className='tittle'>Cart total</p>
        <p className='sub-total'>
          <span>Subtotal</span>
          <span>INR {formatePrice(cartTotal)}</span>
        </p>
        <div className='horizontal-seperator'></div>
        <p className='total'>
          <span>Total</span>
          <span>INR {formatePrice(cartTotal)}</span>
        </p>
        <Button   className={`checkout-button ${cartTotal == 0.00 ?'disable':'pointer'} `} onClick={HandlePlaceOrder}>PROCEED TO CHECKOUT</Button>
      </div>
    </div>
    </div>
  );

};

export default Cart;