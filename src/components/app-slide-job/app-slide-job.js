import './app-slide-job.scss';

import LabelCard from '../app-label-card/app-label-card'


const SlideJob = ({ jobTitle, src, desc }) => {
    const basicUrl = 'https://aic.nbed.ru/';
    return (
        <div className="job__card_container">
            <div className="label__location">
                <LabelCard name={jobTitle} />
            </div>
            <div className="img_wrapper">
                <img src={basicUrl + src} alt="job_img" />
            </div>
            <a href="/" className="decs__plate_wrapper">
                <p className="desc__text">
                    {desc}
                </p>
            </a>
       </div>
   )
}

export default SlideJob;