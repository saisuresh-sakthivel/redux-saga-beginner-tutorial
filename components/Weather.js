import React from 'react';
const Weather = (props) => {
    const {weather=[]} = props.weatherinfo;
    let images = weather.map((item)=>{
        return (<div>
          <img src={'http://openweathermap.org/img/wn/'+item.icon+'@2x.png'}/>
       </div>)
      });
    return(
        <div>
            {images}
        </div>
    )    
}
export default Weather;