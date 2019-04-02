import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ScreenShot} from '../pages/footprint'

class SimpleSlider extends React.Component {
  render() {
    console.log(this.props)
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      autoplay:true,
      autoplaySpeed: 3000
    }
    return (
      <Slider {...settings}>
        { this.props.images.map(image => (
          <div key={image} >
                  <ScreenShot src={image} alt="screen shot"></ScreenShot>
          </div>
        ))}
      </Slider>
    );
  }
}
export default SimpleSlider;