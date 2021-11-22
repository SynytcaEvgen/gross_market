
class GetResource {
    _hostName = 'https://aic.nbed.ru/api/';
    getData = async (url) => {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain'
            }
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };

    staticInfo = () => {
        return this.getData(`${this._hostName}settings/list/`);
    }
    bannerInfo = () => {
        return this.getData(`${this._hostName}banner/list/`);
    }
    openPosInfo = () => {
        return this.getData(`${this._hostName}vacancy/list/`);
    }
    loactionCloud = () => {
        return this.getData(`${this._hostName}location/list/`);
    }
    instaPost = () => {
        return this.getData(`${this._hostName}instagram/list/`);
    }
}

export default GetResource;