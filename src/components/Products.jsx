import React from 'react'
import logoHouse from '../assets/images/logo-house.png'

export default function Products() {
  return (
    <section className='products' id='products'>
      <div className='section--divider'>
        <div className='section--divider-line'></div>
        <img className='section--divider-image'
          src='https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214620/FINE89%20Assets/watercolor-coffee-bean-1-300x235_o8fdce.jpg?_s=public-apps'

        />
        <div className='section--divider-line'></div>
      </div>
      <div className='section--title flex-end'>
        <h2
          className='section--title-header'
        >
          Our Products
        </h2>
        <img
          src={logoHouse}
          className='section--title-image'
        />
      </div>

      <div className='products--wrapper'>
        <div className='products--product-detail'>
          <div className='products--product-detail-image'>
            <img src='https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214615/FINE89%20Assets/PngItem_6790971_adcvpi.jpg?_s=public-apps' />
          </div>
          <div className='products--product-detail-divider'></div>
          <div className='products--product-detail-info'>
            <h4>Jarabacao Organic</h4>
            <p>
              The Jarabacoa Organic coffee bean packaging offers a delightful blend of flavors that will captivate your taste buds. Crafted with 100% Arabica beans, this coffee promises a rich and satisfying experience. As you indulge in each sip, you'll discover notes of smooth milk chocolate that harmoniously mingle with the subtle undertones of almond and apricot. Sourced from organic farms, this coffee reflects a commitment to sustainability and quality. With Jarabacoa Organic, awaken your senses and savor the perfect balance of indulgence and natural goodness.
            </p>
          </div>

        </div>
        {/* <div className='products--wrapper'> */}
        <div className='products--lists'>
          <div className='products--list-info'>
            <img src='#' />
            <h3>Jarabacoa Organic</h3>
            <span>Natural</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='products--list-price'>
              <span>₱260</span>
            </div>
          </div>

          <div className='products--list-info'>
            <img src='#' />
            <h3>Jarabacoa Organic</h3>
            <span>Natural</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='products--list-price'>
              <span>₱260</span>
            </div>
          </div>

          <div className='products--list-info'>
            <img src='#' />
            <h3>Jarabacoa Organic</h3>
            <span>Natural</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='products--list-price'>
              <span>₱260</span>
            </div>
          </div>

          <div className='products--list-info'>
            <img src='#' />
            <h3>Jarabacoa Organic</h3>
            <span>Natural</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='products--list-price'>
              <span>₱260</span>
            </div>
          </div>

        </div>
        {/* 
        </div> */}
      </div>


    </section>
  )
}
