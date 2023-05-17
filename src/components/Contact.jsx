import React from 'react'
import logoHouse from '../assets/images/logo-house.png'


export default function Contact() {
  return (
    <section className='contact' id='#contact'>
      <div className='section--divider'>
        <div className='section--divider-line'></div>
        <img className='section--divider-image'
          src='https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214620/FINE89%20Assets/watercolor-coffee-bean-1-300x235_o8fdce.jpg?_s=public-apps'
        />
        <div className='section--divider-line'></div>
      </div>

      <div className='contact--sub-sections'>
        <div className='contact--section'>
          <div className='section--title'>
          <img
              src={logoHouse}
              className='section--title-image'
            />
            <h2
              className='section--title-header'
            >
              Opening Hours
            </h2>
            
          </div>

        </div>
        <div className='contact--section flex-end'>
          <div className='section--title'>
            <h2
              className='section--title-header'
            >
              Contacts
            </h2>
            <img
              src={logoHouse}
              className='section--title-image'
            />
          </div>
        </div>
      </div>

    </section>
  )
}
