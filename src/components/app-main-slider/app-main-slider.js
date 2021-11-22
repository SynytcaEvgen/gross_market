import {useState, useEffect} from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import GetResource from "../../services/app-get-data";

import SlideBanner from '../app-slide-banner/app-slide-banner'


import "swiper/swiper.scss";
import "swiper/swiper-vars.scss";

import SwiperCore, {
  Navigation
} from 'swiper';

import "./app-main-slider.scss"
// install Swiper modules
SwiperCore.use([Navigation]);


const MainSlider = () => {

    const [resData, setResData] = useState([]);
    const [loading, setLoading] = useState(true);
    const bannerData = new GetResource();
    useEffect(() => {
        bannerData.bannerInfo().then(res => {
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
    const sliderItems = resData.map(item => {
        const { id, ...itemProps } = item;
        return (
             <SwiperSlide key={ id }>
                < SlideBanner {...itemProps} loading={loading}/>
             </SwiperSlide>
        )
    })
    return (
        <div className="main__slider">
            <Swiper
                navigation={true}
                slidesPerView={1}
                spaceBetween={30} 
            >
                { sliderItems }
                
            </Swiper>
        </div>
    )
}

export default MainSlider;
