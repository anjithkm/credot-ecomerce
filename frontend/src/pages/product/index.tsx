import React,{useEffect, useState} from "react";
import {Button,QuantityButton} from '@/component/button'
import { useQuery } from "@/hooks";
import {useNavigate} from 'react-router-dom'
import { setCart } from '@/store/slices/cart';
import { getProductByProductID,clearError} from '@/store/slices/product';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { params } from '@/utils/apiRequest'
import { formatePrice } from "@/utils/functions/formate";
import { camalizeEachWords } from "@/utils/functions/string";
import { API_BASE_URL } from "@/config/api"


const Product: React.FC = () => {

  const query = useQuery();
  const dispatch = useAppDispatch();
  const { auth } = useAppSelector(store => store.auth);
  const { cart } = useAppSelector(store => store.cart);

  const navigate = useNavigate()

  const productId = query.get('id') || ''
  const { error,data,loading } = useAppSelector(store => store.product);

  const [ color,setColor ] = useState<string>("red")
  const [ memory,setMemory ] = useState<string>("256 GB")
  const [ displayImg,setDisplayImg ] = useState<number>(0)
  const [ qty,setQty ] = useState<number>(1)


  useEffect(()=>{
    const params : params = {
      pathParams:{
        productId:productId
      }
    };
    dispatch(getProductByProductID(params))
  },[productId])

  useEffect(()=>{
    data && data.length > 0 && setDisplayImg(0) 
    console.log("Product data:",data[0])
  },[data])


  const HandleAddToCart=()=>{

    let temp = cart

    let unselected =  temp.filter((item)=>item.productId !== data[0]._id)
    let selected = temp.filter((item)=>item.productId === data[0]._id)

    if( selected.length > 0 ){
      dispatch(setCart([...unselected,
        {
          image: data[0]?.images[0],
          productId: data[0]._id,
          name: data[0].name,
          price: data[0]?.discountedPrice,
          quantity: selected[0].quantity + qty,
          varients: { color: color,memory: memory },
          totalPrice: Math.round( (qty * data[0]?.discountedPrice) * 100) / 100 
        }
      ]))
    }else{
      dispatch(setCart([...cart,
        {
          image: data[0]?.images[0],
          productId: data[0]._id,
          name: data[0].name,
          price: data[0]?.discountedPrice,
          quantity: qty,
          varients: { color: color,memory: memory },
          totalPrice: Math.round( (qty * data[0]?.discountedPrice) * 100) / 100 
        }
      ]))
    }


    // products: [
      // {
      //   productId: data._id,
      //   price: data?.discountedPrice,
      //   quantity: { type: qty  },
      //   varients: { color: color,memory: memory }
      //      totalPrice: Math.round( (qty * data?.discountedPrice) * 100) / 100 
      // }
    // ]

    navigate(`/${auth?.user}/cart`)

  }



  if(loading){
    return <div>loading...</div>
  }



  return (
    <div >
      {
        data && data.length > 0 && (
          <div className='product-specific'>
          <div className='product-specific-container'>
            <div className='varient-deatils'>
              <div className='image-section'>
                <div className='selected-image-container'>
                    <img className='image' src={ data[0]?.images[displayImg] ? `${API_BASE_URL}${data[0]?.images[displayImg]}` : '/assets/images/image-placeholder.jpg' } alt='selected-image' />
                </div>
                <div className='multiple-image-container'>
                  {
                    data[0].images.map((item:any,index:any)=>{
                      return(
                      <div className={`image-wrapper ${index === displayImg ? 'selected' : ''}`} onClick={()=>{setDisplayImg(index)}}>
                        <img className='image' src={ item ? `${API_BASE_URL}${item}` : '/assets/images/image-placeholder.jpg'} alt={`image-${index}`} />
                      </div>
                      )
                    })
                  }
   
                </div>
              </div>
              <div className='title-section'>
                <p className='title'>{data[0].name}</p>
                <div className='rating'>
                <img className='image' src='/assets/images/rating.png' alt='rating' />
                ( There are no reviews yet )
                  </div>
                <p className='price'>
                  <span className='inr'>INR</span>
                  <span className='price'>{formatePrice(data[0]?.discountedPrice)}</span>
                  <span className='actual'>{formatePrice(data[0]?.actualPrice)}</span>
                </p>
                <p className='description'>{data[0]?.description} </p>
                <div className='color-varients'>
                  <p className='title'>
                    Colour: <span>{camalizeEachWords(color)}</span>
                  </p>
                  <div className='varients'>
                  {
                      ["black","red","green","grey","blue"].map((item:any,index:number)=>{
                        return (
                          <div className={`${item}  pointer ${item == color ? 'active' : '' }`} style={{display:'flex',position:'relative'}} onClick={()=>{setColor(item)}} key={index}>
                          <svg width="19" style={{display: item == color ? 'block' : 'none' ,margin:'auto'}} height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.029 5.13477C15.895 5.13554 15.7653 5.18158 15.6608 5.26539L6.65483 12.2135L3.43552 8.23177C3.38786 8.16756 3.32773 8.11363 3.25872 8.07323C3.18971 8.03283 3.11326 8.00679 3.03394 7.99666C2.95462 7.98653 2.87407 7.99253 2.79712 8.0143C2.72018 8.03607 2.64842 8.07315 2.58616 8.12333C2.5239 8.1735 2.47242 8.23574 2.4348 8.3063C2.39718 8.37686 2.3742 8.4543 2.36724 8.53396C2.36028 8.61362 2.36949 8.69386 2.3943 8.76988C2.41911 8.8459 2.45903 8.91612 2.51165 8.97633L6.45889 13.8653L16.3888 6.2047C16.4887 6.12975 16.5625 6.02519 16.5995 5.90589C16.6366 5.78659 16.6351 5.65864 16.5952 5.54025C16.5554 5.42185 16.4792 5.31904 16.3775 5.24646C16.2759 5.17387 16.1539 5.13401 16.029 5.13477Z" fill="white"/>
                          </svg>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className='internal-memory'>
                  <p className='title'>Internal Memory</p>
                  <div className='varients'>
                    {
                      ["128 GB","256 GB","512 GB","1 TB"].map((item:any,index:number)=>{
                        return (
                          <div className={`memory ${item == memory ? 'active' : '' }`} onClick={()=>{setMemory(item)}} key={index}>
                          {item}
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
                <div className="addtocart-container">
                    <div className="horizontal-seperator" />
                    <div className="add-to-cart">
                        <QuantityButton className='quantity-button' count={qty} setCount={setQty} /> 
                        <Button className='add-to-cart-button' onClick={HandleAddToCart}>ADD TO CART</Button>
                    </div>
                    <div className="horizontal-seperator" />
                </div>
                
              </div>
            </div>
            <div className='specific-deatils'>
              <div className='nav-bar'>
                <div className="nav">Overview</div>
                <div className="nav active">Specifications</div>
              </div>
              <div className='horizontal-seperator'/>
              <div className='points'>
                <ul className="list">
                  {
                   data.length > 0 && data[0]?.Specifications?.map((element:string,index:number)=>{
                       return <li key={index}>{element}</li>
                    })
                  }
                </ul>
    
              </div>
    
            </div>
          </div>
        </div>
        )
      }
   </div>
  );
};

export default Product;