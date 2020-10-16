import React, { useState, useEffect } from "react";
import { Carousel } from 'antd';

const Banner =()=>{
	const contentStyle = {
  height: '560px',
  width:"100%",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
return(
	<div>
  <Carousel autoplay>
    <div>
      <img src="https://img.global.news.samsung.com/in/wp-content/uploads/2018/10/Festive-Offers-Newsroom.jpg" style={contentStyle} />
    </div>
    <div>
      <img style={contentStyle} src="https://sgp1.digitaloceanspaces.com/wp-uploads/tech/wp-content/uploads/2019/09/30011256/Samsung-Festive-Season-Feature-Image.png" />
    </div>
    <div>
      <img src="https://www.india.com/wp-content/uploads/2015/10/snapdeal.jpg" style={contentStyle} />
    </div>
    <div>
      <img src="https://social.bigbazaar.com/data/tweet_images/bigbazaar/1232666628866707456.jpg" style={contentStyle} />
    </div>
  </Carousel>
  </div>
		);
}
export default Banner;