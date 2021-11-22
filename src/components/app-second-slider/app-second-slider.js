import {useState, useEffect} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import GetResource from "../../services/app-get-data";
import SlideJob from '../app-slide-job/app-slide-job';
import LoadingNow from "../app-loading/app-loading";


import "swiper/swiper.scss";
import "swiper/swiper-vars.scss";

import SwiperCore, {
  Navigation
} from 'swiper';

import "./app-second-slider.scss"

import TitleBlock from '../app-title-block/app-title-block';

// install Swiper modules
SwiperCore.use([Navigation]);



const SecondSlider = () => {
  
    const [resData, setResData] = useState([]);
    const [loading, setLoading] = useState(true);
    const remoutData = new GetResource();
    useEffect(() => {
       remoutData.openPosInfo().then(res => {
            if (res.success) {
              setResData(resData => resData = res.data);
              setLoading(loading => loading = false)
            } else {
              setResData(resData => resData = []);
              setLoading(loading => loading = true)
            }
        }).catch((err) => { 
            return console.error("Server error" + err)
        })
        // eslint-disable-next-line
    },[]);
    const sliderItems = resData.map((item) => {
        const { id, ...itemProps } = item;
        return (
             <SwiperSlide key={ id }>
                 <SlideJob {...itemProps}/>
             </SwiperSlide>
        )
    })
    return (
        <div className="second__slider_wrapper">
            <div className="container">
                <TitleBlock title="вакансии в гросс маркете"/>
                <Swiper
                    navigation={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                      300: {
                           slidesPerView: 1.25,
                           spaceBetween: 15,
                           centeredSlides: true
                      },
                      480: {
                          slidesPerView: 1,
                          spaceBetween : 0
                      },
                      600: {
                        slidesPerView: 1.6,
                      },
                      768: {
                        slidesPerView: 2.2,
                      },
                      800: {
                        slidesPerView: 2.3,
                      },
                      992: {
                        slidesPerView: 2.9,
                      },
                      1110: {
                        slidesPerView: 2.6,
                      },
                      1360: {
                        slidesPerView: 2.8,
                      },
                      1440: {
                        slidesPerView: 3,
                      },
                    }}
                >
                    { loading ?  <LoadingNow/> : sliderItems }
                </Swiper>
            </div>
        </div>
    )
}


export default SecondSlider;