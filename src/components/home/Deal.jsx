import React, { useState, useEffect } from "react";
import { Card, Button } from 'antd';
import {
 StarOutlined
} from "@ant-design/icons";


const Deal =()=>{
	return(
		<div>
		  <Card
		  hoverable
		  style={{ width: "100%",height:"560px" }}
		  cover={<img alt="example" src="http://demo.bestprestashoptheme.com/digimart1/45-home_default/nullam-sed-sollicitudin.jpg" />}
		  >
		  <div className="deals">
		  <b className="mix">Mixer Juicer</b>
		  <div style={{marginTop:'3%'}}>
		  	<StarOutlined />
		  	<StarOutlined />
		  	<StarOutlined />
		  	<StarOutlined />
		  	<StarOutlined />
		  </div>
		  <div className="price" style={{marginTop:'3%'}}>
		  <b>Rs 2500</b>
		  <b style={{marginLeft:'5%',textDecoration:'line-through',color:'grey'}}>Rs 3500</b>
		  </div>
		  <div style={{marginTop:'3%'}}>
		  <Button className="addcart">Add To Cart</Button>
		  </div>
		  </div>
		  </Card>
		</div>);
}
export default Deal;