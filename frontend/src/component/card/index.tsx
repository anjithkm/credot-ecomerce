import React, { useState, ComponentProps,ReactElement } from "react";
import { formatePrice } from "@/utils/functions/formate"
import {useNavigate} from 'react-router-dom'
import Button from '../button'
import { useAppSelector } from '@/store/hooks';
import { API_BASE_URL } from "@/config/api"


interface SliderProps extends ComponentProps<any>{
isSmall?:boolean,
item:any,
}

const Card: React.FC <SliderProps>= ({isSmall=false,item})=> {


  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate()
  const { auth } = useAppSelector(store => store.auth);


  return(
  <div onClick={()=>{navigate(`/${auth?.user}/product?id=${item._id}`)}} className={`${isSmall?'card-small':'card-big'}`} >
  <div className='badge'><p>HOT</p></div>
  <div className='image-container'>
  <img className='card-image' src={item?.images[0] ? `${API_BASE_URL}${item?.images[0]}` : '/assets/images/image-placeholder.jpg'} alt='iphone' />
  <Button className='rounded card-add-button' icon={<img  src='/assets/icons/add.svg' alt=""/>} />
  </div>
  <p className='card-category'>{item?.category}</p>
  <p className='card-title'>{item?.name}</p>
  <p className='card-price'> <span className='inr'>INR</span><span className='price'>{formatePrice(item?.discountedPrice)}</span><span className='actual'>{formatePrice(item?.actualPrice)}</span></p>
  <Button className='addtocart-button' >ADD TO CART</Button>
  </div>
  )
}


{/* <div className='card-small'>
  <div className='badge'><p>HOT</p></div>
  <div className='image-container'>
  <img className='card-image' src='/assets/images/iphone.png' alt='iphone' />
  <Button className='rounded card-add-button' icon={<img  src='/assets/icons/add.svg' alt=""/>} />
  </div>
  <p className='card-category'>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
  <p className='card-title'>iPhone 14 Pro max 256GB - Deep Purple..</p>
  <p className='card-price'> <span className='inr'>INR</span><span className='price'>4,699.00</span><span className='actual'>4,699.00</span></p>
  <Button className='addtocart-button' >ADD TO CART</Button>
</div>
<div className='card-big'>
  <div className='badge'><p>HOT</p></div>
  <div className='image-container'>
  <img className='card-image' src='/assets/images/iphone.png' alt='iphone' />
  <Button className='rounded card-add-button' icon={<img  src='/assets/icons/add.svg' alt=""/>} />
  </div>
  <p className='card-category'>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
  <p className='card-title'>iPhone 14 Pro max 256GB - Deep Purple..</p>
  <p className='card-price'> <span className='inr'>INR</span><span className='price'>4,699.00</span><span className='actual'>4,699.00</span></p>
  <Button className='addtocart-button' >ADD TO CART</Button>
</div> */}

export default Card;
