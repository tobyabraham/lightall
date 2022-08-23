import React from 'react';
import { Carousel } from "react-responsive-carousel";

let data = [
    {
      des: "Client 1",
      imgSrc: "https://i.imgur.com/d5aiXJP.jpg"
    },
    {
      des: "Client 2",
      imgSrc: "https://i.imgur.com/pgCzueK.jpg"
    },
    {
      des: "Client 3",
      imgSrc: "https://i.imgur.com/7nbAJ0C.jpg"
    },
    {
      des: "Client 4",
      imgSrc: "https://i.imgur.com/L75otV6.jpg"
    },
    {
      des: "Client 5",
      imgSrc: "https://i.imgur.com/qkPMr9D.jpg"
    }
  ];

let sliderBoxStyle = {
height: "250px",
width: "100%"
// , background: "tranparent"
};

let itemsStyle = {
width: "100%"
// ,height: "100%", padding: "0px"
// , padding: "15px"
// , background: "#FFCA28"
// , borderRadius: "4px"
// , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
// textAlign: "left"
// ,width:"50%"
// , background: "transparent"
// , fontSize: "36px"
// , fontWeight: 300
};

let buttonSetting = {
// placeOn: "middle-inside"
// ,hoverEvent: true,
// , style: {
//   left: {
//     margin: "0px 0px 0px 10px"
//   },
//   right: {
//     margin: "0px 10px 0px 0px"
//   }
// }
};

let manner = {
// autoSliding: {interval: "4s"}
//, duration: "0.3s"
};

function clientslider() {
  return (
    <Carousel
    slideItems={data}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
    textBoxStyle={textBoxStyle}
  />
  )
}

export default clientslider