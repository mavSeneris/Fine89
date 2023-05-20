import React from 'react'

export default function sampleProduct() {
  return (
    <div className='products--product-detail'>
      <div className='products--product-detail-image'>
        <img src='https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214615/FINE89%20Assets/PngItem_6790971_adcvpi.jpg?_s=public-apps' />
        {/* <img src='https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'/> */}
      </div>
      <div className='products--product-detail-divider'></div>
      <div className='products--product-detail-info'>
        <h4>Jarabacao Organic</h4>
        <h3>₱<span>260</span></h3>
        <span>Natural</span>
        <p>
          Indulge in the exceptional flavors of Jarabacoa Coffee, a true delight for coffee enthusiasts. Sourced from the lush highlands of Jarabacoa, our coffee beans are meticulously grown and handpicked to ensure exceptional quality. With every sip, you'll be transported to a world of rich and aromatic bliss. Experience the harmonious blend of velvety dark chocolate, hints of nutty almond, and the subtle sweetness of apricot. Jarabacoa Coffee embodies the essence of indulgence, offering a smooth and satisfying coffee experience that will awaken your senses. Treat yourself to the extraordinary flavors of Jarabacoa Coffee and elevate your coffee moments to a new level of sophistication.
        </p>
      </div>
    </div>
  )
}
