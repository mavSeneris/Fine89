import React from 'react'
import ImageSlider from "../components/imageSlider";

export default function Hero() {
  const slides = [
    { url: "https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214633/FINE89%20Assets/050879168203699.6436be9a5c792_wlki45.jpg?_s=public-apps", title: "coffe-lady" },
    { url: "https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214640/FINE89%20Assets/299850165_1741280226205320_9090156975828537928_n_cdk38w.jpg?_s=public-apps", title: "coffee-shop" },
    { url: "https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214642/FINE89%20Assets/300784968_1737664599900216_6187662458344170097_n_kmtogq.jpg?_s=public-apps", title: "coffee-friends" },
  ];
  const containerStyles = {
    width: "100%",
    height: "100vh",
    margin: "0 auto",
  };
  return (
    <section className='hero'>
      {/* <h2>Hero section goes here</h2> */}
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </section>
  )
}


