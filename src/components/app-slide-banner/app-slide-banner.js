import LabelCard from '../app-label-card/app-label-card';
import { Picture } from 'react-responsive-picture';

import './app-slide-banner.scss';

const SlideBanner = (props) => {
    return (
        <div className="slide__wrapper">
            
            <div className="title__slide">
                {props.title}
            </div>
            <ImgBanner {...props}/>
            
            
        </div>
    )
}

const ImgBanner = ({ pic_larg, pic_mid, pic_small, location_style, name, job}) => {
    const basicUrl = 'https://aic.nbed.ru/';
    return (
        <div className="img_wrapper">
                <Picture sources = {[
                        {
                            srcSet: basicUrl + pic_small,
                            media: "(max-width: 680px)",
                        },
                        {
                            srcSet: basicUrl + pic_mid,
                            media: "(max-width: 1024px)",
                        },
                        {
                            srcSet: basicUrl + pic_larg,
                            type: "image/png",
                        }
                    ]}/>
                <div className={"dec__content" + location_style}>
                    <LabelCard name={name}/>
                    <LabelCard name={job}/>
                </div>
        </div>
    )
}

export default SlideBanner;