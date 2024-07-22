import React,{ReactElement,ComponentProps} from 'react';
import Slider from './component/carousel';
import Card from './component/card'

interface ButtonProps extends ComponentProps<any>{
  icon?:ReactElement<HTMLImageElement>;
}

interface QuantityButtonProps extends ComponentProps<any>{
  count:number;
}

const Button:React.FC<ButtonProps>=({icon,...props})=>{

  return (
   <button {...props} >
    <div style={{margin:'auto',display:'flex',height:'fit-content',width:'fit-content',justifyContent:'center'}} >
     {props.children} {icon}
     </div>
  </button>
  )

}

const QuantityButton:React.FC<QuantityButtonProps>=({count=0,...props})=>{

  return (
    <div style={{display:'flex',height:'fit-content',border:'2px solid #E2E2E2',width:'fit-content',justifyContent:'center'}} >
     <button className='count-button' style={{border:'none',display:'flex',outline:'none',backgroundColor:'transparent'}}><img  style={{margin:'auto'}}  src='./assets/icons/plus.svg' alt=""/></button>

     <div className="count"  style={{border:'2px solid #E2E2E2',borderWidth:'0px 2px 0px 2px',padding:'0px 10px 0px 10px'}} >{count}</div>

     <button className='count-button' style={{border:'none',display:'flex',outline:'none',backgroundColor:'transparent'}}><img  style={{margin:'auto'}} src='./assets/icons/minus.svg' alt=""/></button>
    </div>
  )

}

function App() {
  return (
    <div className="app">

      <div className='body'>
        <div className='cart'>
          <p className='cart-title'>Cart</p>
        </div>
        <div className='cart-container'>
          <div className='' style={{ height: '357px', flexGrow: 1 }}>
            <div className='table-header'>
              <p className='product-col'>PRODUCT</p>
              <p className='price-col'>PRICE</p>
              <p className='quantity-col'>QUANTITY</p>
              <p className='subtotal-col'>SUBTOTAL</p>
            </div>
            <div className='horizontal-seperator'></div>
            <div className='table-row'>
              <div className='product-col'>
                <div className='image'>
                  <img  style={{width:'39px',height:'53px'}} src='./assets/images/iphone.png' alt=""></img>
                </div>
                <span>iPhone 12 Pro max...</span>
              </div>
              <div className='price-col'>INR 107.00</div>
              <div className='quantity-col'>
                <QuantityButton count={0} setCount={() => {}} />
              </div>
              <div className='subtotal-col'>INR 107.00</div>
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
              <span>INR 107.00</span>
            </p>
            <div className='horizontal-seperator'></div>
            <p className='total'>
              <span>Total</span>
              <span>INR 107.00</span>
            </p>
            <Button className='checkout-button'>PROCEED TO CHECKOUT</Button>
          </div>
        </div>
      </div>

      {/* <div className="body">
      <div className='product-specific'>
      <div className='product-specific-container'>
        <div className='varient-deatils'>
          <div className='image-section'>
            <div className='selected-image-container'>
                <img className='image' src='./assets/images/iphone.png' alt='iphone' />
            </div>
            <div className='multiple-image-container'>
                <div className='image-wrapper'>
                  <img className='image' src='./assets/images/iphone.png' alt='iphone' />
                </div>
                <div className='image-wrapper'>
                  <img className='image' src='./assets/images/iphone.png' alt='iphone' />
                </div>
                <div className='image-wrapper'>
                  <img className='image' src='./assets/images/iphone.png' alt='iphone' />
                </div>
            </div>
          </div>
          <div className='title-section'>
            <p className='title'>iPhone 14 Pro max 256GB - Deep Purple..</p>
            <div className='rating' style={{backgroundColor:'red'}}>
            <img className='image' src='./assets/images/rating.png' alt='rating' />
            ( There are no reviews yet )
              </div>
            <p className='price'>
              <span className='inr'>INR</span>
              <span className='price'>4,699.00</span>
              <span className='actual'>4,699.00</span>
            </p>
            <p className='description'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. </p>
            <div className='color-varients'>
              <p className='title'>
                Colour: <span>Silver</span>
              </p>
              <div className='varients'>
                <div className='black'></div>
                <div className='red'></div>
                <div className='green'></div>
                <div className='grey'></div>
                <div className='blue'></div>
              </div>
            </div>
            <div className='internal-memory'>
              <p className='title'>Internal Memory</p>
              <div className='varients'></div>
            </div>
          </div>
        </div>
        <div className='specific-deatils'>
          <div className='nav-bar' style={{display:'flex',flexDirection:'row'}}>
            <div className="nav">Overview</div>
            <div className="nav" style={{width:'fit-content',borderStyle:'solid',borderWidth:'0px 0px 2px 0px',borderColor:'black'}}>Specifications</div>
          </div>
          <div className='horizontal-seperator'/>
          <div className='points'>
            <ul className="list">
              <li>Bluetooth: V5.0</li>
              <li>Screen Size: 1.39 inches</li>
              <li>Screen Resolution and Brightness: 360*360, 500 Nits Daylight-Bright Display, 2.5D Curved Glass</li>
              <li>Battery Capacity: 400 mAh</li>
              <li>Sports Modes: 100+</li>
              <li>Health Monitoring: SpO2, 24*7 Heart Rate Monitoring, Blood Pressure, High Heart Rate Alert</li>
              <li>Health Tracking: Menstrual Cycle, Sleep</li>
              <li>Smart Features: Sedentary Alert, Weather, Alarm, Timer, Flashlight, Find Phone</li>
              <li>Smart Controls: Remote Camera and Music Player </li>
              <li>Bluetooth Calling with inbuilt mic, speaker and dialer</li>
              <li>All Messages Notifications</li>
              <li>Custom & 100+ Watch Faces</li>
              <li>Charging Time: 2 Hrs</li>
              <li>Battery Life: 10 Days</li>
              <li>Water Resistance Level: IP68</li>
              <li>Compatible: Android & iOS</li>
            </ul>

          </div>

        </div>
      </div>
    </div>
         
      </div> */}

      {/* <div className="body">

      <Slider slidesStyle={{width:'100vw'}} buttonStyle={{
backgroundColor:'rgba(255, 255, 255, 0.29)',
borderRadius: "50%",
border: 'none',
alignSelf: "center",
position:'absolute',
cursor:'pointer',
margin:70,
zIndex:1000
       }} slides={['./assets/images/slide-background.png','./assets/images/slide-background.png','./assets/images/slide-background.png']}/>

      <div className='products' >
        <div className='product-container' >
      <div className='product-title' >Products</div>
        <div className='horizontal-seperator' style={{marginTop:'22px'}}/>

        <div className='product-grid'>
            <Card isSmall={false} />
            <Card isSmall={true} />
            <Card isSmall={true} />
            <Card isSmall={true} />
            <Card isSmall={true} />
            <Card isSmall={true} />
            <Card isSmall={true} />
        </div>

        </div>
      </div>

      <div className='brands' >
        <div className='brands-container'>
          <p className='brands-title'>Top Brands</p>
           <div className='horizontal-seperator' style={{marginBottom:'67px',marginTop:'22px'}}/>
           <Slider slidesStyle={{width:'calc(128px + 77px)',height:'128px',padding:'0px 77px 0px 0px'}}
           buttonStyle={{
backgroundColor:'rgba(248, 248, 248, 1)',
color:'black',
borderRadius: "50%",
border: 'none',
alignSelf: "center",
position:'absolute',
cursor:'pointer',
margin:-70,
zIndex:1000
}}  buttonSize={40} slides={['./assets/images/apple.png','./assets/images/realme.png','./assets/images/sony.png','./assets/images/redmi.png','./assets/images/samsung.png','./assets/images/lg.png','./assets/images/dell.png']}/>
        </div>
      </div>

      </div> */}

      {/* <div className='success-order' style={{display:'flex',width:'100%',height:'100vh',backgroundColor:'#F9F9F9'}}>
        <div className='message-continer' style={{margin:'auto',display:'flex',flexDirection:'column',width:'100%'}}>
          <div className='green-tick-container rounded' style={{display:'flex',background:'linear-gradient(177.62deg, #F0EEEE 2%, rgba(250, 250, 250, 0) 118.43%, rgba(204, 204, 204, 0.78) 118.43%)',flexDirection:'column',width:'159px',height:'159px',margin:'auto'}}>
           <div className='green-tick rounded' style={{display:'flex',flexDirection:'column',background:'linear-gradient(180deg, #44961D 0%, #34A000 100%)',width:'103px',height:'103px',margin:'auto'}}>
             <img className='tick' src='./assets/icons/tick.svg' alt="tick" />
           </div>
          </div>
          <p className='success-order-title'>Your order has been placed successfully.</p>
          <p className='success-order-sub-title'>Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia egestas placera </p>
        </div>
      </div> */}

      {/* <footer className='footer'>

        <div className='footer-container'>
        <div className='horizontal-seperator top'/>
        <img className='logo' src='./assets/images/logo.png'/>

        <div className='footer-extra'>
          
        <div>
        <div className='social-media'>
        <p className='social-media-title'/>
          <div className='social-media-container'>
            <Button className='rounded social-media-button' icon={<img  src='./assets/icons/facebook.svg' alt=""/>} />
            <Button className='rounded social-media-button' icon={<img  src='./assets/icons/twitter.svg' alt=""/>} />
            <Button className='rounded social-media-button' icon={<img  src='./assets/icons/linkedin.svg' alt=""/>} />
            <Button className='rounded social-media-button' icon={<img  src='./assets/icons/youtube.svg' alt=""/>} />
          </div>
        </div>
        <div className='important-link' >
        <p className='important-link-title'>important Links</p>
        <div className='important-link-container'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help & FAQs</p>
          </div>
        </div>
        </div>

        <div>
          <div className='vertical-seperator'/>
          <div className='help-line' >
          <Button className='rounded help-line-button' icon={<img  src='./assets/icons/phone.svg' alt=""/>} />
          <p className='help-line-title'>Helpline</p>
          <p className='help-line-number'>1800 456 84788</p>
          </div>
        </div>

        </div>
        <div className='horizontal-seperator'/>
        <p  className='all-rights-reserved'>Arab Deals  © 2023. All Rights Reserved</p>
        </div>
        
      </footer> */}
    </div>
  );
}

export default App;
