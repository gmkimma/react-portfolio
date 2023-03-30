import React from 'react'
import profilePicture from '../../../static/assets/images/bio/headshot.jpg'

export default function () {
  return (
    <div className='content-page-wrapper'>
      <div
        className='left-column'
        style={{
          background: 'url(' + profilePicture + ') no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      <div className='right-column'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Velit dignissim
        sodales ut eu sem integer vitae. Aliquet risus feugiat in ante metus.
        Non consectetur a erat nam at lectus urna duis convallis. In nisl nisi
        scelerisque eu ultrices vitae. Viverra ipsum nunc aliquet bibendum enim
        facilisis gravida neque. Magna fermentum iaculis eu non diam phasellus.
        Commodo elit at imperdiet dui accumsan sit amet nulla. Malesuada
        bibendum arcu vitae elementum curabitur vitae nunc. Eget gravida cum
        sociis natoque penatibus et magnis dis. Malesuada proin libero nunc
        consequat interdum varius. Risus commodo viverra maecenas accumsan lacus
        vel. Pellentesque massa placerat duis ultricies lacus sed turpis
        tincidunt. Quam nulla porttitor massa id neque aliquam vestibulum morbi.
        Justo donec enim diam vulputate ut pharetra sit. Eget arcu dictum varius
        duis at consectetur lorem donec massa. Enim praesent elementum facilisis
        leo. Nulla at volutpat diam ut venenatis.
      </div>
    </div>
  )
}
