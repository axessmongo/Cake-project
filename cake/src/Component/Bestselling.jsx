import React from 'react'
import nutella from "../assets/image/nutella-cake-m.webp"
import lamp from "../assets/image/lamp.webp"
import almond from "../assets/image/almonds.jpg"
import moon from "../assets/image/moonlight.webp"

export default function Bestselling() {
  return (
    <div>
         <div>
            <section className='container'>
                <div className='pt-5 text-center'>
                <h1 className="text-center mt-3">
            {" "}
            <span className="text-danger display-4 fw-bold">B</span>est{" "}
            <span className="text-danger display-4 fw-bold">S</span>elling
            <span className="text-danger display-4 fw-bold">G</span>ifts
          </h1>
                    <h3 className='bold'>  </h3>
                    <p style={{ color: 'grey' }}>Packed with love</p>
                </div>
                <div className='row' data-aos='fade-up' data-aos-duration="800">
                    
                    <div className='col-md-3'>
                    <div className="card">
                        <img src={nutella} className='img-fluid rounded-2' alt="" /><p className='px-2' style={{ color: 'grey' }}>Luscious Ganache Nutella Cake (500 gm)</p>
                        <h6 className='pb-3 px-2'>$745</h6>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <div className="card">
                        <img src={lamp} className='img-fluid rounded-2' alt="" /><p className='px-2' style={{ color: 'grey' }}>Personalized Happy Birthday LED Lamp</p>
                        <h6 className='pb-3 px-2'>$855</h6>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <div className="card">
                        <img src={almond} className='img-fluid rounded-2' alt="" /><p className='px-2' style={{ color: 'grey' }}>Premium Almond & cashews  (200g)</p>
                        <h6 className='pb-3 px-2'>$450</h6>
                        </div>
                    </div>
                    <div className='col-md-3'>
                    <div className="card">
                        <img src={moon} className='img-fluid rounded-2' alt="" /><p className='px-2' style={{ color: 'grey' }}>Love in the Moonlight and Customize Flower</p>
                        <h6 className='pb-3 px-2'>$1745</h6>
                        </div>
                    </div>
                    

                </div>
               
            </section>
        </div>
    </div>
  )
}