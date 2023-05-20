import React from 'react'
import logoHouse from '../assets/images/logo-house.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='grid-container'>
          
            <ul className='footer--list'>
              <h3 className='footer--list--title'>Sitemap</h3>
              <li><a href="">About</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">Reviews</a></li>
              <li><a href="">Gallery</a></li>
            </ul>

            <ul className='footer--list'>
              <h3 className='footer--list--title'>Contact</h3>
              <li><a href="">Email</a></li>
              <li><a href="">Address</a></li>
              <li><a href="">Phone</a></li>
            </ul>

            <ul className='footer--list'>
              <h3 className='footer--list--title'>Information</h3>
              <li><a href="">Cookies policies</a></li>
              <li><a href="">Advertisement</a></li>
              <li><a href="">Terms and Conditions</a></li>
            </ul>

            <ul className='footer--list'>
              <h3 className='footer--list--title'>Follow us</h3>
              <li><a href="">Facebook</a></li>
              <li><a href="">Twitter</a></li>
              <li><a href="">Instagram</a></li>
              <li><a href="">Gmail</a></li>
              <li><a href="">Vimeo</a></li>

            </ul>'

            <div className='footer--logo'>
              <img src={logoHouse} />
              <h1>FINE 89</h1>
            </div>

            <div className='footer--form'>
              <form action="">
                <span>Newsletter</span><br />
                <input type="text" />
                <button>Click</button>
              </form>
            </div>
            
          </div>

    </div>
  )
}
