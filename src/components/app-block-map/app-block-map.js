import { useState, useEffect} from 'react';
import './app-block-map.scss';

import mapStyle from './style_map.json';
import GetResource from "../../services/app-get-data";

import GoogleMapReact from 'google-map-react';
import TitleBlock from '../app-title-block/app-title-block';

import logoPoint from './map_mark.svg';

const PointMap = ({ logoPoint}) => <div><img src={logoPoint} alt="logo"/></div>;

const  SimpleMap = ()=> {
  const defaultProps = {
    center: {
      lat: 55.758019,
      lng: 37.619992
    },
    zoom: 10
  };
  const [activeCount, setactiveCount] = useState(0);
  const [resData, setResData] = useState([]);
  const remoutData = new GetResource();
  useEffect(() => {
        remoutData.loactionCloud().then(res => {
            if (res.success) {
              setResData(resData => resData = res.data);
            } else {
              setResData(resData => resData = []);
            }
        }).catch((err) => { 
            return console.error("Server error" + err)
        })
        // eslint-disable-next-line
  },[]);
  const onChangePoint = (num) => {
    setactiveCount(activeCount => activeCount = num)
  };
  const pointMapRender = resData.map(item => {
    const { lat, lng, id, yur, fiz } = item;
    if (activeCount === 0) {
      return (
        <PointMap
          lat={lat}
          lng={lng}
          key={id}
          logoPoint={logoPoint}
        />
      )
    } else if (activeCount === 1 && fiz === true) {
      return (
        <PointMap
          lat={lat}
          lng={lng}
          key={id}
          logoPoint={logoPoint}
        />
      )
    } else if (activeCount === 2 && yur === true) {
      return (
        <PointMap
          lat={lat}
          lng={lng}
          key={id}
          logoPoint={logoPoint}
        />
      )
    }
    return null
   
  });
  
  return (
    <div className="map__block">
        <div className="container">
          <TitleBlock title="география" />
        </div>
        <div className="map__wrapper">
            <div className="map__container">
                    <GoogleMapReact
                    bootstrapURLKeys={{ key:"AIzaSyBJdPa_lMEkwQFXTVGYyK_BA2Cgb35MYyc" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    options={{styles: mapStyle}}
                    >
                      {pointMapRender}
                    </GoogleMapReact>
              </div>
            <div className="btn_map_wrapper">
              <button className={activeCount === 2 ? "btn active" : "btn"} onClick={() => onChangePoint(2)}>юрлица</button>
              <button className={activeCount === 1 ? "btn active" : "btn"} onClick={() => onChangePoint(1)}>физлица</button>
              <button className={activeCount === 0 ? "btn active" : "btn"} onClick={() => onChangePoint(0)}>показать всё</button>
            </div>
        </div>
    </div>
  );
}

export default SimpleMap;