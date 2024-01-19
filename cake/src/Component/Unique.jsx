import React from 'react'
import birthday from '../assets/image/birthday.webp'
import anniversary from '../assets/image/anniversary.jpg'
import festival from '../assets/image/festival.webp'
import wedding from '../assets/image/wedding.webp'
import gourment from '../assets/image/gourment.webp'
import fashion from '../assets/image/fashion.webp'


export default function Unique() {
  return (
  <section className='container'>
      <div className='text-center pt-5'>
      <h1 className="text-center mt-3">
            {" "}
            <span className="text-danger display-4 fw-bold">U</span>nique{" "}
            <span className="text-danger display-4 fw-bold">G</span>ifts
            <span className="text-danger display-4 fw-bold">O</span>nline

          </h1>
        <p style={{color:'grey'}}>Curated to make every special moment a celebration</p>
      </div>
      <div className='row pt-4'data-aos='fade-left' data-aos-duration="1500">
        <div className='col-md-2 text-center px-1'><img src={birthday} alt="" />Birthday Gifts</div>
        <div className='col-md-2 text-center  px-1'><img src={anniversary} alt="" />Anniversary Gifts</div>
        <div className='col-md-2 text-center  px-1'><img src={festival} alt="" />Corporate Gift</div>
        <div className='col-md-2 text-center  px-1'><img src={wedding} alt="" />Wedding Gifts</div>
        <div className='col-md-2 text-center  px-1'><img src={gourment} alt="" />Gourmet Gifts</div>
        <div className='col-md-2 text-center  px-1'><img src={fashion} alt="" />Fashion and Lifestyle</div>
        
      </div>
  </section>
  )
}