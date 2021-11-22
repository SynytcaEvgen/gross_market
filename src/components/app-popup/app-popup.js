import { useState, useEffect } from "react";

import GetResource from "../../services/app-get-data";

import { ReactComponent as CloseBtn } from './close_btn.svg';

import './app-popup.scss';

const Popup = ({ active, setActive }) => {
    
    const closePopUp = () => {
        document.body.classList.remove('modal');
        setActive(false);
    }
    const [scrollPos, setScrollPos] = useState(false);
    const [content, setContent] = useState('');
   
    const setSctollBlock = e => {
        if (e.target.scrollTop !== 0) {
            setScrollPos(true)
        } else {
             setScrollPos(false)
        }
    }
    const staticData = new GetResource();
    useEffect(() => {
        staticData.staticInfo().then(res => {
            if (res.success) {
                setContent(content => content = res.data.personal_data_policy_text)
            } else {
                setContent(content => content = 'Политика обработки персональных данных обновляется... Попробуйте пожалуйста позже ')
            }
        }).catch(() => {
            console.error("Server error")
        })
        // eslint-disable-next-line
    }, []);

    return (
        <div className={`${ active? "popup__wrapper active": "popup__wrapper" } ${scrollPos ? " scrolling" : null}`} onClick={closePopUp}>
            <div className="popup__content" onClick={e => e.stopPropagation()}>
                <div className="container">
                    <div className="close_popup_btn" onClick={closePopUp}>
                        <CloseBtn />
                    </div>
                    <h1 className="titel">Обработка данных</h1>
                    <div className="inner__content" onScroll={setSctollBlock}>
                        {<div dangerouslySetInnerHTML={{ __html: content }} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup;