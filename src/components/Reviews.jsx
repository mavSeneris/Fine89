import React, { useState } from 'react'
import logoHouse from '../assets/images/logo-house.png'

export default function Reviews() {
  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const reviews = [
    {
      id: 1,
      name: 'Harry Potter',
      imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
      reviews: 'Upon my first encounter with an espresso shot, I was immediately captivated by its alluring presentation. The dark, golden-brown crema resting atop the liquid like a luxurious crown was an invitation to indulge. Its tantalizing aroma permeated the air, teasing my senses with promises of a remarkable experience.'
    },
    {
      id: 2,
      name: 'Ron Weasley',
      imageUrl: 'https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=344&q=80',
      reviews: 'As I took my initial sip, a wave of decadence washed over my palate. The velvety texture caressed my tongue, providing a satisfying sensation that can only be described as heavenly. The coffee is robust and full-bodied nature danced on my taste buds, leaving an exquisite and lasting impression.'
    },
    {
      id: 3,
      name: 'Hermione Granger',
      imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
      reviews: 'The flavor profile of espresso is a symphony of notes that harmonize to create a masterpiece. Rich and intense, yet remarkably balanced, the espresso I encountered exhibited a medley of chocolate undertones, accented by subtle hints of caramel and toasted nuts. Each sip revealed a new layer of complexity, inviting me to explore further.'
    },
    {
      id: 4,
      name: 'Draco Malfoy',
      imageUrl: 'https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
      reviews: 'One cannot overlook the skill and craftsmanship required to create the perfect espresso shot. From the meticulous selection of premium coffee beans to the precise grind size and brewing technique, every step contributes to the creation of this liquid art form. The result is a beverage that exemplifies dedication and mastery, showcasing the expertise of the barista and the passion that goes into each cup.'
    },
    {
      id: 5,
      name: 'Neville Longbottom',
      imageUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=399&q=80',
      reviews: 'Beyond the sensory pleasure, espresso coffee offers a delightful energy boost, perfect for those seeking a swift pick-me-up. Its concentrated nature delivers a potent dose of caffeine, awakening both the body and mind. It is a companion in moments of fatigue, an ally during hectic days, and a comforting ritual that punctuates our lives.'
    }
  ]

  function handleSelectItem(id) {
    const currentReview = reviews.map(item => {
      if (id === item.id) {
        return (
          <div key={item.id} className='reviews--user-entry'>
            <p className='reviews--user-review-text'>{item.reviews}</p>
          </div>
        )
      }
    })
    setSelectedReview(currentReview)
    setSelectedItem(id);

  }

  const UserEls = reviews.map((item => {
    return (
      <div
        key={item.id}
        onClick={() => handleSelectItem(item.id)}
        className={
          `reviews--users-image-flex ${selectedItem === item.id ? 'selected' : ''}`
        }
      >
        <img
          className='reviews--users-image'
          src={item.imageUrl}
        />
      </div>
    )
  }))


  return (
    <section className='reviews' id='reviews'>
      <div className='section--divider'>
        <div className='section--divider-line'></div>
        <img
          className='section--divider-image'
          src='https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214620/FINE89%20Assets/watercolor-coffee-bean-1-300x235_o8fdce.jpg?_s=public-apps'
        />
        <div className='section--divider-line'></div>
      </div>
      <div className='section--title flex-center'>
        <img src={logoHouse} className='section--title-image' />
        <h2 className='section--title-header'>Reviews</h2>
        <img src={logoHouse} className='section--title-image' />
      </div>
      <div className='reviews--container'>
        <img
          className='reviews--logo'
          src='https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214613/FINE89%20Assets/right-quote-svgrepo-com_ouzmjw.jpg?_s=public-apps'
        />
        <div className='reviews--user-review'>
          {selectedReview === null ?
            <p className='reviews--user-review-text'>
              Upon my first encounter with an espresso shot,
              I was immediately captivated by its alluring presentation.
              The dark, golden-brown crema resting atop the liquid like a
              luxurious crown was an invitation to indulge.
              Its tantalizing aroma permeated the air, teasing my senses
              with promises of a remarkable experience.
            </p> :
            selectedReview}
        </div>
        <div className='reviews--users'>
          {UserEls}
        </div>
      </div>
    </section>
  )
}
