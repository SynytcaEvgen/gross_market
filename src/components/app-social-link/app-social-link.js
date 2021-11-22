import {ReactComponent as FbIcon} from './fb__logo.svg';
import { ReactComponent as VKIcon } from './vk__logo.svg';
import { FacebookShareButton, VKShareButton } from "react-share";
import './app-social-link.scss'

const SocialLink = () => {
    return (
        <div className="social_container">
            <p className="social_title">поделиться</p>
            <div className="social_link_wrapper">
                <div className="item_social_link">
                    <FacebookShareButton
                        url={window.location.href}
                        hashtag="#amazingJob"
                        className="social_btn">
                        <FbIcon/>
                    </FacebookShareButton>
                </div>
                <div className="item_social_link">
                    <VKShareButton
                        url={window.location.href}
                        hashtag="#amazingJob"
                        className="social_btn">
                        <VKIcon/>
                    </VKShareButton>
                </div>
            </div>
       </div>
   )
}

export default SocialLink;