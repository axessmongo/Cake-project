import React from 'react'
import footerimg from '../assets/image/world-map.png'

export default function Footer() {
  return (
    <footer className='bg-black' data-aos='fade-up' data-aos-duration="800">
            <div className='row py-3 my-3 text-light'>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <div className='text-center px-4'>
                        <h2 className='text-danger'>Gift Zone</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugit, 
                            iure quos quas, accusantium quia quasi eveniet</p>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div>
                        <h4 className='text-danger'>Quick Links</h4>
                        <p>About</p>
                        <p>Offers & Discounts</p>
                        <p>Get Coupon</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div>
                        <h4 className='text-danger'>New Products</h4>
                        <p>Cheese Cake</p>
                        <p>MIcebox Cake</p>
                        <p>Butter Cake</p>
                        <p>Pound Cake</p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                    <h4 className='text-danger'>World Wild Link</h4>
                    <div className=' pt-4'>
                        <img src={footerimg} alt="" className='img-fluid w-75' />
                    </div>
                    </div>
                </div>
            </div>
            <h5 className='text-center pb-2 text-danger'>Right GitfZone © 2021. All Rights Reserved</h5>
            </footer>
  )
}