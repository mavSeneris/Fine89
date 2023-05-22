import React, { useState } from 'react'
import logoHouse from '../assets/images/logo-house.png'
import initialProduct from './sampleProduct'
import data from '../data'

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct)


  function handleSelectItem(id) {
    const currentProduct = data.map(item => {
      if (id === item.id) {
        return (
          <div key={item.id} className='products--product-detail'>
            <div className='products--product-detail-image'>
              <img src={item.imageUrl} />
            </div>
            <div className='products--product-detail-divider'></div>
            <div className='products--product-detail-info'>
              <h4>{item.name}</h4>
              <h3>₱<span>{item.price}</span></h3>
              <span>{item.type}</span>
              <p>
                {item.description}
              </p>
            </div>
          </div>
        )
      }
    })
    setSelectedProduct(currentProduct)
  }

  const productElement = data.map((item) => {
    return (
      <div onClick={() => handleSelectItem(item.id)} className='products--lists' key={item.id}>
        <div className='products--lists-image'>
          <img src={item.imageUrl} />
        </div>
        <div className='products--lists-details'>
          <h3>{item.name}</h3>
          <span>{item.type}</span>
          <p>
            {item.description.length > 100
              ? `${item.description.substring(0, 100)}...`
              : item.description}
          </p>
        </div>
        <div className='product--list-price'>
          <h3>₱<span>{item.price}</span></h3>
        </div>
      </div>
    )
  })

  return (
    <section className='products' id='products'>
      <div className='section--divider'>
        <div className='section--divider-line'></div>
        <img className='section--divider-image'
          src='https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214620/FINE89%20Assets/watercolor-coffee-bean-1-300x235_o8fdce.jpg?_s=public-apps'
z
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
        {selectedProduct}
        <div className='products--lists-card'>
          {productElement}
        </div>
      </div>


    </section>
  )
}
