// import InstagramEmbed from 'react-instagram-embed';

import './app-insta-item.scss'

const InstaItem = ({url, token}) => {
    return (
        <div className="insta__grid_item">
            {/* <InstagramEmbed
                url={url}
                clientAccessToken={token}
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            /> */}
        </div>
    )
}

export default InstaItem;