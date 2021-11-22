import { useState, useEffect } from 'react';
import './app-block-insta.scss';
import InstaItem from '../app-insta-item/app-insta-item';
import TitleBlock from '../app-title-block/app-title-block';

import GetResource from "../../services/app-get-data";

const InstaBlock = () => {
    const [count, setCount] = useState(5);
    const [activeBtn, setActiveBtn] = useState(true);
    const [resData, setResData] = useState([]);
    const remoutData = new GetResource();
    useEffect(() => {
          remoutData.instaPost().then(res => {
              if (res.success) {
                setResData(resData => resData = res.data);
              } else {
                setResData(resData => resData = []);
              }
          }).catch((err) => { 
              return console.error("Server error" + err)
          })
          // eslint-disable-next-line
    },[]);

    const instaCard = resData.map((item, index) => {
        const { id, ...instaItem } = item;
        if (index < count) {
            return <InstaItem key={id} {...instaItem}/>
        } else return null  
    })
    function showMore(event) {
        event.preventDefault();
        let addMore = 1;
        if (window.screen.width > 1024){
            addMore = 4;
        } else if (window.screen.width <= 1024 && window.screen.width >= 768){
              addMore = 3;
        };
        if (resData.length > count) {
            setCount(count => count + addMore);
        } else {
            setActiveBtn(activeBtn=> activeBtn = false)
        }
     }

    return (
        <div className="insta__block">
            <div className="container">
                 <TitleBlock title="мы в инстаграме"/>
                <div className="insta__grid_wrapper">                 
                    {instaCard}
                </div>
                <a href="/" onClick={showMore} className={activeBtn ? "btn_show_more" : "btn_show_more hidden" }>показать ещё</a>
            </div>
        </div>
    )
}

export default InstaBlock;