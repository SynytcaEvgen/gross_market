import { Link } from "react-router-dom";

import './app-button.scss'

const ButtonOpenCard = ({name, scrollPos}) =>{
    let btnClass = "btn"
    if (scrollPos) {
        btnClass = "btn btn__fix";
    } else {
        btnClass = "btn";
    }
    
    return (
        <Link to="/form" className={btnClass}>{name}</Link>
    )
} 

export default ButtonOpenCard;
