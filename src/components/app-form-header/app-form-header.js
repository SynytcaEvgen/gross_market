import { Link } from "react-router-dom";

import './app-form-header.scss'

import Logo from '../app-logo/app-logo';
import { ReactComponent as CloseBtn } from '../app/icon/close_btn.svg';

const HeaderForm = () => {
    return (
        <header className="form_header">
            <div className="container">
                <div className="header_wrapper">
                    <Logo/>
                    <div className="call_back_container close_form_btn">
                        <Link to="/">
                            <CloseBtn />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderForm;