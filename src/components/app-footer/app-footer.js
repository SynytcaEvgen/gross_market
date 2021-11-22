import './app-footer.scss';

import Logo from '../app-logo/app-logo';
import SocialLink from '../app-social-link/app-social-link';

let toDay = new Date();
const Footer = ({ setActive }) => {
    const openPopUp = (e) => {
        e.preventDefault();
        document.body.classList.add('modal');
        setActive(true)
    }
    return (
        <footer>
            <div className="container">
                <div className="footer_wrapper">
                    <Logo />
                    <SocialLink/>
                </div>
                <div className="footer__bottom_wrapp">
                    <div className="copyrigth">
                        <p className="text">© Гросс маркет {toDay.getFullYear()}</p>
                    </div>
                    <div className="privat_police">
                        <a href="/" className="text animate__link_style" onClick={openPopUp}>Политика обработки персональных данных</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;