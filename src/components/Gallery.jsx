import React from 'react'
import logoHouse from '../assets/images/logo-house.png'

export default function Gallery() {
  const galleryImages = [
    { imageUrl: 'https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214640/FINE89%20Assets/299850165_1741280226205320_9090156975828537928_n_cdk38w.jpg?_s=public-apps' },
    { imageUrl: 'https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214637/FINE89%20Assets/304957750_1747730532226956_4756968756646123215_n_eohu1m.jpg?_s=public-apps' },
    { imageUrl: 'https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214571/FINE89%20Assets/345965081_577914064439874_2687531605403702901_n_m2a4ux.jpg?_s=public-apps' },
    { imageUrl: 'https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214646/FINE89%20Assets/4a08e9168203699.6436be9a68c06_cobukv.jpg?_s=public-apps' },
    { imageUrl: 'https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684223904/FINE89%20Assets/317911895_1818516658481676_5953899013300250912_n_mw7k6m.jpg?_s=public-apps' },
    { imageUrl: 'https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214566/FINE89%20Assets/654da9168203699.6436be9a63c7b_fhn9lq.jpg?_s=public-apps' },
    { imageUrl: 'https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214642/FINE89%20Assets/300784968_1737664599900216_6187662458344170097_n_kmtogq.jpg?_s=public-apps' },
    { imageUrl: 'https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214587/FINE89%20Assets/298268680_1732564253743584_8160951845418984556_n_pfsxsk.jpg?_s=public-apps' }
  ]

  const GalleryEls = galleryImages.map(image => {
    return (
      <img src={image.imageUrl} />

    )
  })


  return (
    <section className='gallery' id='gallery'>
      <div className='section--divider'>
        <div className='section--divider-line'></div>
        <img className='section--divider-image' src='https://res.cloudinary.com/dsbhrb9cr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1684214620/FINE89%20Assets/watercolor-coffee-bean-1-300x235_o8fdce.jpg?_s=public-apps' />
        <div className='section--divider-line'></div>
      </div>
      <div className='section--title'>
        <img
          src={logoHouse} 
        className='section--title-image'
        />
        <h2 className='section--title-header'>Gallery</h2>
      </div>

      <div className='gallery--container'>
        <div className='gallery--container-grid'>
          {GalleryEls}
        </div>
      </div>
    </section >
  )
}
