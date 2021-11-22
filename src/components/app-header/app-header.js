import './app-header.scss';
import Logo from '../app-logo/app-logo';
import ButtonOpenCard from '../app-button/app-buttom';
import CallTo from '../app-call-to/app-call-to';

const Header = ({ scrollPos }) => {
    
   
    return (
        <header>
            <div className="container">
                <div className="header_wrapper">
                    <Logo/>
                    <div className="call_back_container">
                        <CallTo/>
                        <ButtonOpenCard name="заполнить анкету" scrollPos={scrollPos}/>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;