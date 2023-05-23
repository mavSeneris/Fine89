import React from 'react'
import logoHouse from '../assets/images/logo-house.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import gmail from '../assets/images/gmail.png'
import vimeo from '../assets/images/vimeo.png'
import twitter from '../assets/images/twitter.png'


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


      <div className='sub-sections'>

        <div className='schedules--section'>
          <div className='section--title'>
            <h2 className='section--title-header'>Opening Hours</h2>
          </div>
          
          <div className='section--time-schedules'>

            <ul className='time--schedule-list'>
              <li className='time--schedule-item'>
                <span className="day">Monday</span>
                <hr className='dynamic-hr' />
                <span className='time'>0900 - 2200</span>
              </li>  
              <li className='time--schedule-item'>
                <span className="day">Tuesday</span>
                <hr className='dynamic-hr' />
                <span className='time'>0900 - 2200</span>
              </li>
              <li className='time--schedule-item'>
                <span className="day">Wednesday</span>
                <hr className='dynamic-hr' />
                <span className='time'>0900 - 2200</span>
              </li>    
              <li className='time--schedule-item'>
                <span className="day">Thursday</span>
                <hr className='dynamic-hr' />
                <span className='time'>0900 - 2200</span>
              </li>    
              <li className='time--schedule-item'>
                <span className="day">Friday</span>
                <hr className='dynamic-hr' />
                <span className='time'>0900 - 2200</span>
              </li>    
              <li className='time--schedule-item'>
                <span className="day">Saturday</span>
                <hr className='dynamic-hr' />
                <span className='time'>CLOSED</span>
              </li>    
              <li className='time--schedule-item'>
                <span className="day">Sunday</span>
                <hr className='dynamic-hr' />
                <span className='time'>CLOSED</span>
              </li>    
            </ul>
          </div>

          <div className="section-phone">
              <img 
              src="https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684292296/FINE89%20Assets/antique-call-svgrepo-com_qwsdn2.jpg?_s=public-apps"
              />
              <h3><span>CALL</span> +1 202 255 0122</h3>
          </div>
        </div>






        <div className='contact--section flex-end'>

          <div className='section--title'>
            <h2 className='section--title-header'>Contact Us</h2>
            <img
              src={logoHouse}
              className='section--title-image'
            />
          </div>

          <div className='section--contacts'>
              <ul className='contacts--list'>
                <li className='contacts--item'>
                  <a href=""> 
                    raymond boulevard 224, new york
                  </a>
                </li>
                <li className='contacts--item'>
                  <a href=""> 
                    fine89@gmail.com
                  </a>
                </li>
                <li className='contacts--item'>
                  <a href=""> 
                    144-123-4559
                  </a>
                </li>
              </ul>

              <form className="contacts--form" action="" >
                  <label htmlFor="sign-up">sign up for newsletter</label><br />
                  <div className='form--group'>
                    <input type="text" label='sign-up' />
                    <button>Click</button>
                  </div>
              </form>

              <ul className='contacts--socials-list'>
              <h3>Follow Us</h3>
                
                <li className='contacts--socials-item'>
                  <a href="">
                    <img src={facebook}/>
                  </a>
                </li>
                <li className='contacts--socials-item'>
                  <a href="">
                    <img src={twitter}/>
                  </a>
                </li>
                <li className='contacts--socials-item'>
                  <a href="">
                    <img src={instagram}/>
                  </a>
                </li>
                <li className='contacts--socials-item'>
                  <a href="">
                    <img src={gmail}/>
                  </a>
                </li>
                <li className='contacts--socials-item'>
                  <a href="">
                    <img src={vimeo}/>
                  </a>
                </li>
              </ul>
          </div>

        </div>

        <div className='coffee-cup'>
          <img 
           src="https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214627/FINE89%20Assets/watercolor-coffee-cup-1_gm32yx.jpg?_s=public-apps"
          />
        </div>

      </div>

    </section>
  )
}
