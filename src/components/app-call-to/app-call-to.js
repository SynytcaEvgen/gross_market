import { useState, useEffect } from 'react';

import GetResource from "../../services/app-get-data";

import './app-call-to.scss';
import { ReactComponent as PhoneIcon } from './icon_phone.svg';



const CallTo = () => {
    const staticData = new GetResource();
    const [number, setNumber] = useState('+0 (000)-00-00');
    useEffect(() => {
        staticData.staticInfo().then(res => {
            if (res.success) {
                    setNumber(number => number = res.data.phone)
                } else {
                     setNumber(number => number = '+7 (000)-00-00')
                }
            }).catch(() => {
             console.error("Server error")
            })
        // eslint-disable-next-line
    },[])
             
    return (
       <div className="link_wrapper">
            <a className="link__phone animate__link_style" href={`tel: ${number}`}>
                <span className="phone_number">{number}</span>
                <span className="phone_icon">
                    <PhoneIcon/>
                </span>
            </a>
       </div>
   )
}
export default CallTo;