class PostResourse {
    _hostName = 'https://aic.nbed.ru/api/';
    postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: data,
                    
        });
        return await res.json();
    };
    sendToForm = (data) => {
         return this.postData(`${this._hostName}vacancy/add/`, data);
    }
    
}

export default PostResourse;