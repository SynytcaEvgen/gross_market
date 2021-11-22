import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import GetResource from "../../services/app-get-data";

import './app-logo.scss';

const Logo = () => {
    const staticData = new GetResource();
    const [urlLogo, setUrlLogo] = useState('');
    const [textLogo, setTextLogo] = useState('Logo Name');
    const [loading, setLoading] = useState(true);
    let addUrlLogo = 'https://aic.nbed.ru/';
    useEffect(() => {
        staticData.staticInfo().then(res => {
            if (res.success) {
                setUrlLogo(urlLogo => urlLogo = addUrlLogo + res.data.logo_file);
                setTextLogo(textLogo => textLogo = res.data.logo_text);
                setLoading(false)
            } else {
                setUrlLogo(urlLogo => urlLogo = '');
                setTextLogo(textLogo => textLogo = 'Logo Name');
                setLoading(true)
            }
        }).catch(() => {
            console.error("Server error")
        })
        // eslint-disable-next-line
    },[]);
    return (
        <div>
            <Link to="/" className="logo_wrapper">
                {loading ? null : <img src={urlLogo} alt="logo"/>}
                <p className="logo_text">{textLogo}</p>
            </Link>
        </div>
    )
}
export default Logo;