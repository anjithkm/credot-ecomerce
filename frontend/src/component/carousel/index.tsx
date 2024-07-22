import React, { useState, ComponentProps,ReactElement } from "react";
import * as ReactDOMClient from "react-dom/client";
import Carousel from "react-simply-carousel";

// backgroundColor:'rgba(255, 255, 255, 0.29)',
// borderRadius: "50%",
// border: 'none',
// alignSelf: "center",
// position:'absolute',
// cursor:'pointer',
// left:buttonMargine,
// zIndex:1000
interface SliderProps extends ComponentProps<any>{
 slides:Array<string>;
 slidesStyle?: React.CSSProperties ;
 buttonStyle?: React.CSSProperties ;
 buttonSize?: number;
 buttonMargine?:number;
 buttonClass?:string;
 containerClass?:string;
 slidesClass?:string;
 size :'big'|'med'|'small'
}

const Slider: React.FC <SliderProps>= ({slides,slidesStyle,buttonSize=60,buttonStyle, buttonClass,size,slidesClass})=> {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            minHeight: size == 'big' ? "347px" : 'fit-content',
            justifyContent: "space-between",
            userSelect: "none",
            position:'relative'
          }
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        // activeSlideProps={{
        //   style: {
        //     background: "blue"
        //   }
        // }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: <svg width={Math.floor(buttonSize/2)} height={Math.floor(buttonSize/2)} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 24L11.0667 22.5667L17.6666 15.9667L11.0667 9.36668L12.5 7.93335L20.5333 15.9667L12.5 24Z" fill={`${size == 'big' ? 'white':'black'}`}/>
          </svg>,
          style: {
            width: buttonSize,
            height: buttonSize,
            minWidth: buttonSize,
            zIndex:1000,
            // ,...buttonStyle,
            right:0
          },
          className: buttonClass
        }}
        backwardBtnProps={{
          children: <svg width={Math.floor(buttonSize/2)} height={Math.floor(buttonSize/2)} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 24L20.9333 22.5667L14.3334 15.9667L20.9333 9.36668L19.5 7.93335L11.4667 15.9667L19.5 24Z" fill={`${size == 'big' ? 'white':'black'}`}/>
          </svg>
          ,
          style: {
            width: buttonSize,
            height: buttonSize,
            minWidth: buttonSize,
            zIndex:1000
            // ,...buttonStyle,
          },
          className:buttonClass
        }}
        // dotsNav={{
        //   show: true,
        //   itemBtnProps: {
        //     style: {
        //       height: 16,
        //       width: 16,
        //       backgroundColor:'rgba(255, 255, 255, 0.29)',
        //       borderRadius: "50%",
        //       border: 'none'
        //     }
        //   },
        //   activeItemBtnProps: {
        //     style: {
        //       height: 16,
        //       width: 16,
        //       borderRadius: "50%",
        //       border: 0,
        //       background: "black"
        //     }
        //   }
        // }}
        itemsToShow={7}
        speed={400}
        // centerMode
      >
        { slides.map((item,index) => (
          <img src={item} key={index} className={slidesClass} alt='slide-image' />
        ))}
      </Carousel>
    </div>
  );
}


export default Slider