import React from "react";
import cake1 from '../assets/image/cake banner.webp'
import cake2 from '../assets/image/cake1banner'
import cake3 from '../assets/image/cake2banner.webp'
import birthday from '../assets/image/birthday.webp'
import anniversary from '../assets/image/anniversary.jpg'
import festival from '../assets/image/festival.webp'
import wedding from '../assets/image/wedding.webp'
import gourment from '../assets/image/gourment.webp'
import fashion from '../assets/image/fashion.webp'
import footerimg from '../assets/image/world-map.png'
import cake from "../assets/image/cake.webp";
import flower from "../assets/image/flower.web.jpg";
import personal from "../assets/image/personalized.webp";
import hamper from "../assets/image/hampers.webp";
import couple from "../assets/image/couple.web.webp";
import plant from "../assets/image/plants.web.webp";
import taj from "../assets/image/india.jpg";
import uk from "../assets/image/uk.avif";
import canada from "../assets/image/canada.avif";
import germany from "../assets/image/germany2.avif";




function Banner() {
  return (
    <div>
       <section className="nav-banner">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="home">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shop Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-3 heading5 p-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link active px-3" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#online">
                  Online Gift
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#celebrate">
                  Celebrate
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#categories">
                  Categories 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active px-3" href="#occasion">
                  Occasions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
     <section className="herobanner" id='home'>
     <h1 className="text-center" data-aos="fade-down">
            <span className="text-danger display-4 fw-bold">G</span>ift{" "}
            <span className="text-danger display-4 fw-bold">Z</span>one
            <span className="text-danger display-4 fw-bold">S</span>hop

            </h1>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cake1} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={cake2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={cake3} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
      </div>
    </section>
    <section className='container' id='online'>
      <div className='text-center pt-5'>
      <h1 className="text-center mt-3" data-aos="fade-down">
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
  <section className="container" >
        <div className="pt-5 text-center">
          <h1 className="text-center mt-3" data-aos="fade-down">
            {" "}
            <span className="text-danger display-4 fw-bold">T</span>rending{" "}
            <span className="text-danger display-4 fw-bold">G</span>ifts
          </h1>

          <p style={{ color: "grey" }}>Handpicked for your gifting needs</p>
        </div>
        <div
          className="row pt-4"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="col-md-4 text-center px-1">
            <img
              style={{ borderRadius: 50 }}
              src={cake}
              alt=""
              className="w-50"
            />
            <p className="pt-2 fs-5">CAKES</p>{" "}
          </div>
          <div className="col-md-4 text-center  px-1">
            <img
              style={{ borderRadius: 50 }}
              src={flower}
              alt=""
              className="w-50"
            />
            <p className="pt-2 fs-5">FLOWERS</p>
          </div>
          <div className="col-md-4 text-center  px-1">
            <img
              style={{ borderRadius: 50 }}
              src={personal}
              alt=""
              className="w-50"
            />
            <p className="pt-2 fs-5">PERSONALIZED</p>
          </div>
        </div>
        <div className="row pt-4" data-aos="fade-left" data-aos-duration="1500">
          <div className="col-md-4 text-center px-1">
            <img
              style={{ borderRadius: 50 }}
              src={hamper}
              alt=""
              className="w-50"
            />
            <p className="pt-2 fs-5">HAMPERS</p>{" "}
          </div>
          <div className="col-md-4 text-center  px-1">
            <img
              style={{ borderRadius: 50 }}
              src={couple}
              alt=""
              className="w-50"
            />
            <p className="pt-2 fs-5">COUPLE</p>
          </div>
          <div className="col-md-4 text-center  px-1">
            <img
              style={{ borderRadius: 50 }}
              src={plant}
              alt=""
              className="w-50"
            />
            <p className="pt-2 fs-5">PLANT</p>
          </div>
        </div>
      </section>
      <section className="container" id='celebrate'>
        <h1 className="text-center mt-3" data-aos="fade-down"> <span className="text-danger display-4 fw-bold">C</span>elebrate <span className="text-danger display-4 fw-bold">M</span>ilestones</h1>
        <p className="text-center">With our memorable gifts</p>
        <p className="display-6 text-center" data-aos="fade-down"><span className="text-danger display-4 fw-bold">B</span>IRTHDAY & <span className="text-danger display-4 fw-bold">A</span>NNIVERSARY <span className="text-danger display-4 fw-bold">G</span>IFTS</p>
        <div className="row"  data-aos="fade-right" data-aos-duration="1500">
          <div className="col-md-3 mt-3 ">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Birthday_For_Her_d_frames_20220309.jpg"
              className="img-fluid rounded-4 zoom-image"
              alt=""
            />
            <p className="fs-4 text-center ">For Her</p>
          </div>
          <div className="col-md-3 mt-3">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Birthday_Flowers_d_frames_20220309.jpg"
              className="img-fluid rounded-4 zoom-image"
              alt=""
            />
            <p className="fs-4 text-center ">FLOWERS</p>
          </div>
          <div className="col-md-3 mt-3">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Anniversary_Flowers_d_frames_20220309.png"
              className="img-fluid rounded-4 zoom-image"
              alt=""
            />
            <p className="fs-4 text-center">FLOWERS</p>
          </div>
          <div className="col-md-3 mt-3">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Anniversary_Wife_d_frames_20220309.jpg"
              className="img-fluid rounded-4 zoom-image"
              alt=""
            />
            <p className="fs-4 text-center">WIFE</p>
          </div>
        
          <div className="col-md-3 mt-3">
            <img
              src="  https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Birthday_Cakes_d_frames_20220309.jpg"
              className="img-fluid rounded-4 zoom-image"
              alt=""
            />
            <p className="fs-4 text-center">CAKES</p>
          </div>
          <div className="col-md-3 mt-3">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Birthday_For_Him_d_frames_20220309.jpg"
              className="img-fluid rounded-4 zoom-image"
              alt=""
            />
            <p className="fs-4 text-center">FOR HIM</p>
          </div>
          <div className="col-md-3 mt-3">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Anniversary_Husband_d_frames_20220309.jpg"
              className="img-fluid rounded-4 zoom-image"
              alt=""
            />
            <p className="fs-4 text-center">HUSBAND</p>
          </div>
          <div className="col-md-3 mt-3">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/banners/igp_Anniversary_Couples_d_frames_20220309.png"
              className="img-fluid rounded-4 zoom-image"
              alt=""
            />
            <p className="fs-4 text-center">For Here</p>
          </div>
        </div>

       
        
      </section>
     
            <section className="container" id="categories">
        <h1 className="text-center mt-3" data-aos="fade-down" >
          <span className="text-danger display-4 fw-bold"  >C</span>ategories
        </h1>
        <p className="text-center">Wide range of gifts for your celebration</p>
        <div className="row" data-aos="fade-up-right" data-aos-duration="1500">
          <div className="col-md-6 zoom-image ">
            <div className=" mt-3">
              <div className="row ">
                <div className="col-md-8 text-center text-lg-start ">
                  <img
                    src="https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/banners/igp_Personalized_d_categories_20220203.jpg"
                    className="img-h p-2 rounded-4"
                    alt="" data-aos="flip-left" data-aos-duration="1500"
                  />
                </div>
                <div className="col-md-4 text-center  text-lg-start">
                  <span className="text-danger display-4 fw-bold">
                    {" "}
                    <h4>Personalized</h4>
                  </span>
                  <p>Home & Living</p>
                  <p>Collectibles</p>
                  <p>Cushions</p>
                  <p>Caricatures</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6  zoom-image">
            <div className=" mt-3">
              <div className="row">
                <div className="col-md-8 text-center text-lg-start">
                  <img
                    src="https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/banners/igp_Cakes_d_categories_20220203.jpg"
                    className="img-h p-2 rounded-4"
                    alt="" data-aos="flip-right" data-aos-duration="1500"
                  />
                </div>
                <div className="col-md-4 text-center text-lg-start">
                  <span className="text-danger display-4 fw-bold">
                    <h4>Cakes</h4>
                  </span>

                  <p>Chocolate Cakes</p>
                  <p>Blackforest Cakes</p>
                  <p>Butterscotch Cakes</p>
                  <p>Photo Cakes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row"  data-aos="fade-up-left" data-aos-duration="1500">
          <div className="col-md-4  zoom-image">
            <div className=" mt-3">
              <div className="row">
                <div className="col-md-6 text-center text-lg-start">
                  <img
                    src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/igp_Flowers_d_categories_20220126.jpg"
                    className=" p-2 img-fluid  rounded-4"
                    alt=""
                  />
                </div>
                <div className="col-md-6 text-center text-lg-start">
                  <span className="text-danger display-4 fw-bold">
                    <h4>Flowers</h4>
                  </span>

                  <p>Roses</p>
                  <p>Flower Arrangements</p>
                  <p>Exotic Flowers</p>
                  <p>Flower Combos</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  zoom-image">
            <div className=" mt-3">
              <div className="row">
                <div className="col-md-6 text-center text-lg-start">
                  <img
                    src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/igp_Gourmet_d_categories_20220131.jpg"
                    className=" p-2 img-fluid  rounded-4"
                    alt=""
                  />
                </div>
                <div className="col-md-6 text-center text-lg-start">
                  <span className="text-danger display-4 fw-bold">
                    <h4>Gourmet</h4>
                  </span>

                  <p>Sweets</p>
                  <p>Dry Fruits</p>
                  <p>Chocolates</p>
                  <p>Health Hampers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  zoom-image">
            <div className=" mt-3">
              <div className="row">
                <div className="col-md-6 text-center text-lg-start">
                  <img
                    src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/igp_Fashion_d_categories_20220126.jpg"
                    className=" p-2 img-fluid  rounded-4"
                    alt=""
                  />
                </div>
                <div className="col-md-6 text-center text-lg-start">
                  <span className="text-danger display-4 fw-bold">
                    <h4>Fashion</h4>
                  </span>

                  <p>Accessories</p>
                  <p>Bags & Clutches</p>
                  <p>Personal Care</p>
                  <p>Mens Apparel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <h1 className="text-center mt-3" id="occasion" data-aos="fade-down">
          {" "}
          <span className="text-danger display-4 fw-bold">O</span>ccasions
        </h1>
        <p className="text-center">
          Celebrate each occasion with a gift that has a lasting impression
        </p>

        <div className="row justify-content-around" data-aos="zoom-out-up" data-aos-duration="1500">
          <div className="col-lg-3 text-center shadow">
            <div className="mt-3">
              <img
                src="https://www.shutterstock.com/image-photo/chocolate-birthday-cake-ganache-drip-600nw-2105738375.jpg"
                className="img-fluid "
                alt=""
              />
            </div>
            <h3 className="mt-3">BIRTHDAY</h3>
          </div>
          <div className="col-lg-3 text-center shadow">
            <div className="mt-3">
              <img
                src="https://image-tc.galaxy.tf/wijpeg-8o6fi7az0ib3oxivcguw9obx5/wedding-reception-vs-ceremony_standard.jpg?crop=307%2C0%2C1307%2C980"
                className=" img-fluid"
                alt=""
              />
            </div>
            <h3 className="mt-3">WEDDING</h3>

          </div>
          <div className="col-lg-3 text-center shadow">
            <div className="mt-3">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/banners/igp_Anniversary_d_collections_20220309.jpg"
                className=" img-fluid "
                alt=""
              />
            </div>
            <h3 className="mt-3">ANNIVERSITY</h3>
            
          </div>
        </div>
        <div className="row justify-content-around mt-4" data-aos="zoom-in-up" data-aos-duration="1500">
          <div className="col-lg-3 text-center shadow">
            <div className="mt-3">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRQYFxcZGhoaGRoaGSEZHBkdGh0ZHhkhHBkdICwjGh0pIBoZJTYkKS0vMzMzGiI4PjgyPSwyMy8BCwsLDw4PHhISHTIpIyoyMjIyNDMyMjIyMjoyNDQyMjI+MjIyMjI0MzIyMjIyMjQyMjIyMjIyOjIyMjIyMjIyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEYQAAIBAgQDBQYDBwMBBQkAAAECEQADBBIhMQVBUSIyYXGBBhORobHBQtHwFCMzUmKC4XKSshUHU6LT8RY0Q1Rzg5Oz0v/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAqEQACAgEEAQIGAwEBAAAAAAAAAQIRAwQSITFBIlETFGFxgZEyscEFof/aAAwDAQACEQMRAD8A2+HtlhOXLqYk6wJEmY3IOn51ITGlPtCRzOsa9BXbiCRBnrpVhWSNvAMiJ2jWorrEGNDUjMNIGvM9Z/Xzrl4Ty1/OgCGdOVTXNGgGRprH2NdKdoKHCn8Ux65T/N+dRY1ksxnYxmAD7gTr2uZ86ollrxwXLC2vqdZtTBkctIpgYkRUYuZyGBAUgQBz/OrC2FK5WEg8x9jWpQbjZXtIbhPZEnT9fYUy5M78vzqSymRiu8GOldxrKAHgyezAEyd9APX4UpR2q/AbRjL3Z6im31106011uMFJhAYA/E3L0X51y9hV0DS55liTPmvd+AqrdJ9L9jpLtjDiEAIzieg1PwFKzfEmEdv7CPrFFrai3MQJ5aClaYjNHMEUbZe4rj7Ay3TGlt4n+n4atSa5B1t3B/aD/wASaKsjsj9dK4xJMmjbL3C17Al7EppJK/61K/UVJbKlGiDPMHTTyoi+p35bTQ4wqGSVE9Rof9w1oqS8hcRqLoa7lkzA11086Vu241R9vwuJHx3+M1z9og/vAUJ57qf7ht6xRvrtUG32I7luGEGf1/mukgM0rJO2u3XzqQqBMyTy6fTWm3k7fnFTIkL6EEGI2qQ29EM6k7fHU/OliJJHgOkc/CnFCCoO8/nQBANJI68xPPoaSLJM8/v5VOUjl8RPypWUk9PtQAzDIJGsyKYE158518dNOVS4cQRSvallnQk/cfegCD3y/wA4+NKhf+nv1rlKiRf4dBGu0n700rrRLEFQQI0P0ptuznMfHypkUV5JLSSPAeFH2gDAInxqhv3Dbco4hh8+hHgaLwOKlh0GpPQCtDinGixDuL9gqLf8QtEnZeu+lDO8ZrVzt7ZjJEwQwOmu8aVBxjBpiVZHuNbVmDdkjUB82XaddBoQaksolu64cxBESNSIBE9N642sUsEb93X0N+KUZ8eVyNRmA1X4bfPWKOwFySMxIHLxjfTkPHwNFjE2ieojpzqoxBLsUSQJBLL3lG2nyqvDr58QtP7dieGLt9B3E+y5dWzAkDxBjn8DRWHMooOkmT4aaULbT3QbOR7pYhm1J2ifjHrU+Fxlu4TkuA/EfKJrprOtqjJpMxzjV1yiW6ug865dWY0/WtTOO750nXapFJEV7NJBoRp8PvUx7sU0bHTkdaAIrO4HnSLSRXbXeHrSd8xk0AcuIdPEU62sa+FJ11/X66VInPyoAZPeMAeVdU5t9ZHOkdZrto7UABXMLl1t6f0nu+n8vpp4U3PmbbKwAlTv6dR4ij3iTvUOJsB8s6GNCNx5Goba5RLdfZBiE1B28PWu5IAIGx/OuMzAhbkT+Ftgw+zeFEOvZHnTjJSE1REQYnqKVlalns7D9GmJUhDMgzabeO9NxA7Ww9BUumkE+Okfeu4k9ragDnu6VPz12iiRLnXQEgeE9ZjQ+R+BpzXckhdZMDlXneK4ywuLcL5gJJ2GRkNxrY00NvtkDUkTqeh68TzKiA5QFtrqTq4VpgGZnKTM/hHhVGXNsg2ldIeOKnNRZrL9k3AC6o07dfQ708cIUoO17rnCxP8AcWmazCcTCaOxkVZ4fFlrYJJgHbnB1B/WtZdH/wBCWSW2XC9zbm02xWh3DsGLeIdrji4EUG2fFiRMciI/8VR8Xte8cuologjmY2I6n/FB43B3bdwXkIdMrBlG5B1WJgbgaztNQ4LiIuOFUkEmIIIPjpXSyYcepg4t2UQlLHK0DnF3gfdrbcnYQh/QrRcKwL20Y3P4jQTBnKOQn1NTpbuMVJBRF2zRJ6mAT4Ua5nWsOH/nY8E9ydsnn1TnHbVFH7WXCLQVRJZx8ACfqBXLlzuWbQDOoUFxsuUCdfPf4VZY50LLbYLmYiJ3j8UegPwqm4rjRgriFTmRm/eJAkDSCp0137POs2Vylmk+o8Jvz+B41cUkueWkaO42on9fCsl7Z+0V6zdtWcKEztbuXXDDNCIGI3IjRLh9BQrcWxjWlxJuC2Lt33dq0FB7JJEknnpE84J6VFxiyP2rEXHeS1lcOsDUZ1QXGHkPeGP6orZLURS5dEY6eTfv2bXA32uWbdxu86IxHQsoJGvnU926qW2ZtFUFiegAJNCrjLQNq2PxqGTs/hA015aD5U5Ht3VupqQJRuQMyDB56TV3xI9JqzPsd21wVGBx2JuqLlq3aFs5squTnYAkSY7KnTb51LiccfcPcANtlMEbkGQNyPGpOC4F8OSjMGtCSp1zCZkQPj8fKm8YZbmGxAQ6hHJHMELmE/Csm5tNNtOnaf8AhclG+FxaLCwWKW2bdramepIBNE2hv5VkbHtAbdi0VTOqW7KXGL5e04IAAAOsJJmO8KsuIcQujFJh7RQFkLE3MxB70AQf6T8a0rLHb+iDxSv9lo99EHbdVzHKuYgZmMwBO58KfbxKhgkiSCf9u+vLfaslxriKXbOFcwr++VmTcjIWV/TNHxoi2xW7dNuMyX10OgIukgzHKYqjLqZRdRSfX6Jxw8clknHVa8bRtlRna2LmaQzqJIKx2fieVB8P9oHuXUsvZKn96ueYRjaYg5BqTpEyRrVfw2xcOJey2vurxvO+xJdexA8d/XymZot28NiokC/ddz0S87KT5Rlp48k2rfuOWOCdL2NVjEDKFI008/Az1oUXW7jmSO638w/McxSwOKN22XMR7y4EI2ZA7BGHWQN+e/OpMSmZI2IIggbHr41okrqS7KOvSzpMKP1zpqGTXLN6UII7Q0I6Hw86daUkiKnGSkrRFqnQxlAjtAmdd9NafeeNIEmNeY8qGI7Xr96JxT7CBuNee1MRyDSruauUWPg809pcMMHdC/s9sI/8P3fvbjsNe873AM2mwX41t/Ze1btYW2VUg3EDtm7wzCcpB2ABjLyq/wAThrd1AlwBlI1UjQ1W3+HoiqtuEVRAWdI8Dqaljxq+RxXkht8PsNcDe6Uxrzjw7JMeO3KikxKC5mdQIGhJiBzHjt86ruE4m4MU9o2ibapLXBqA2hE6aCCag4xxG0b9tbnaBc2wiDMQwEnNG0CPiJrHmgoT9KSNuP19h2PxNxChtqHRswykHsmMw2G0A/Ckli2hS4qAEyJ8gCI9D8qq14iCxtlWK6gjYAQTr+udaHD8KzW7SFguUlmAGxbUCOWnWnpsvrfPAZ47YpPsMRsyA+f2/wA1x20A8qExme23YII0XKxIAG4II57zoZ9IoK9xR0EutoAaznYaa/0nXbp+SnrMSbt0UfLzlylY/ifB3u30vW7vuyile7m/m1GogwxFR4jgSm3cQS9xgRmYyZ5x0kSJ31ozgPEGvI1woApci2dQWUASYPLNmA8qMOrGOtNYcWRbq7/3yJ5JwdX0ZXEcKvlbJKCLBt+7tArmYIQWOYnKCco0n/JzYTP71ntFbl0ZQJmAxgnMJEwAflV63eE8ppE6DyquWji0km/7H8xIz7YO5aui4V95lte7t5VjUaCZJA0JJM7UR7OXlyBIJJzu7DZdgsnqenhQ/tRibuVUtiFILMebEGAg+vqKtuDYcpZto0BsstygtqZ8piqscb1DSfCv9lk5XiTfbHriIuhNIO2upJB5eh1rKDFhcViUXX3gNtQNe0RHyJNafF8NS6y5iykbMpg8/wBetNwHCLVtsyLLfzNq3jHIelTy4cuSVcUnafmvYjjyQgn7tVX+mQ/YiOH3AoLFLisf7Qs/AE/OjcaExGIS6Ldy7aCBWNsGQ0OwjLrILLMaDnWrSwlssEUKGOYgc2POpLA16aVOOmagk37X+Aeo5bS9/wD0y9r2eZsEbZULeeHJ5yGkKW/06eZNF4Hgj5zcdgDccPcXeMjhlCnnsBV8lctMIEetWPTQdX4VFbzy5AcZwqzcuG46HPlyyrFZHR8pGYeBolba5FXKMsRlgRExEbVLdQamdelMHdHr9avUUnaRU5NqrHXFGwECB6b1DcPZ2jUVPc5+Q+pqN27ER60xAd1IHvBy0bxXr6H5TU6vJEAD7/GnKewRQ2G0lf5Tp5Hb8vSofxl9/wCyfcfsJ0O+kEnnr6jlT8aQBrPKP89ajuKc3Pff/POn8QAyDedP1NTIDcwrtC5qVAywx9wpB5ER61WXcUatr9+2YGZG0OgIPxFZPjeHDglWZddgYEelaYO0SRrMDci0P6pb47fKq67w1WcGBMkg5QSCRBM7zGnlWf4Rxh7NvI6O9pZyuqk5RuR0IqzTi4vAe6EqwnOQRoegOvxpfDi+1ZJSa6KnDXXa5mykkGFbL2RB0IG3IVfY3jowiqpUvccZzJ2EwCT1Ovwp2GsQdxNGY3h9vEILbjUd1hup8D0PMVn1eKXwmsXDLITW5OfJhsbx69dcMzGBsokAenOmXXe6VQSSxAiep1j0mt7hPZuzbEZZPU7nzrM+0WF9xet3VAyqwJjlr2vipIrzE8MoyUp+51IZYNOMTY4O0LdtEH4RHhpvp470g0N6/elYuBkVh+ITHSfEaGmKdT5/evSxquDiS7JHPa9DXWGg8qTPLa9KkeORnSpESNhoIHSkBpTnjKOvOkFMUh2Nsd4frkaclNtd4frkaS6GmIdebtegrib+lNc6n0qSykz4CgBi7nWabh9hT0GprlpNPWgBjgljH6/UV233R6/WuYhCDMaHb5122BlE6DtfWgDt1xG2sCfjUJ7p605h9PuKTL2d/lQA23GRpn0oRzDK39p8jt8/rRK91qhuJmWBuR058udRmrXBKL5OMpk+f2qbGpKf2g/Oord4sNzBgx40ZfSUOoHZpxdqxNUVGSlU3u/6vkv5UqYWD2/ZvDW2zr7z3kklveGSSIaR3Tm56anXcVNhuGoXDO2ZF1KEbnlJ5jwjlQt7H+ZoW/xJbal3OURz5+Q57VOGbFJuKkr+5e8c0ra4NJib6uIGkbVnuLuLDI66BjlcdTuD571XYf2htXI924Y9AZPw3poz44hVMWlMl/5m2heoGutXxSS4Ky0TGA6g1Y8OxXanWBqT4CgsF7NZSCLhI6Har/D4ZVtgFcpBMxzIGk9RrUMkqjwF12VIwl++Q9261tSNEtGIBMgEnc7UzEezCsMq3rgnkxLjQcwTrV2nKpcvaGvI/aud8piaqSv6vsn8xkXTor+FYM2bSWy+fKDBiNJJUQSdAIHpRNthJ0nX4U5Rt5VDb3rRGKikkUttu2SRLelOnQeX3NI6toPw10LoPL7mpCEBoPOnkdK4F7I864+xoA5YHaHn9jT1Tn40zDntD9cjT1H1oAaVGY/KpbS600jtfCpLY1NAES94+tcQRv1p/wCL40xDqfOgCLEnX4feuoJUf3UsQTMTp0rtnujzb6GgCMD6fcU9FBmTGlMgiJ6H7UjtQAxBKtrUaNBnofT505O63lTQsRqNYO9AECGCR0J/Oir3IdVoU99h4/ainUmD0Gvh0qEP419yUuyD9nbqv+9fzrtDyaVMKC7eHtwska+NUftHaRVMbQaGfH+70ZSeh5H1pYFhiLoVwcgktpoQI09SR6TXl1um0kqdna2qNtu0ZC57O3Lqi7ZXKwPfJyDX5keIEVvsBYNi2ilcsCNDIJ5686tbXuy+qwI2EQRt2h16dJoTieLFvKoT3lt5UQYMxKjU9OfhXocGV4l7owOCk6XZLZ4hB3qzuvKhuorBi7luFHJhdZ2zKYIIPQgittYcXLYZWEhRpInLMAx00I9DW+bTipIzSXgkU7elSlDM9QYobaNOlOz97wU1SVkiDaocMwntVLkIAJFD4ZZI1igCVdWIHSpl7o9fqaHVoZvACiLPdB8/qaAOkdmfEU1zpFcLdn1H1p1yYPSgCPDt2l/XI09Dr6mosN3l8j9DUiN2j5mgDrzJ9PpT7DanyqJu8en+KfhhqfKgDpftU205k68zTZ7Z8zXUbtHzoA5iTrGmw+tKydF/1N/xNK9cgkRMgelMtHRf9Z+hoAag0GnNh8j+VMfaa5m2H9R09DUbuYInSgDlptG8qYoIgkGDz6+Vcw7SG8qYmwoA7iHHvCVEDT71O51Xrr9KDu94+lEvuvnHyqGPp/d/2Tn4+yB8t3/u2/2mlU+XwHwpU6FyYdeMXhGV9IA9BtVj7OcVy4hTdPflZPIkgifUR61PxX2VLXD7i4qZtcjzlB55WGoHhBqThPsmLbi5iLi3CuqooOSf6idW8oA8658NHPfwujbLLFoP43iLZuW1uOLaM+QawWc7D1g6UM3E1BNsuQBIEDUCD2pPd051Hx/DokXktKxRs5Gs5iMuYGd40gjx5VkMfxVy4Dr7sMNFUTIGkkjfatD02W6SJLNDabRks4nBulwQpVghntrE5TmP35GK8/w/tILkW0Y2ljRB2B3cuusnKvZAnQaTEhi8bxC49k27UqGGXMRAy7NlPWJrI/sxE510DgGeWYEitWa4JRXRz8k3ZucJx+/ZXMLxW1I76m41yOgIYgaGCqiIE7A1rOB+11rFMyBLtu4UMZlGVoBnKykxp/NH2rzPAWGCHLcZSAdyGTMNTo3dAXtEiNFNXfs/wg3LwYqCyHPKZFbKDGbJdVu6wKuFYMjDbuk54yd8EU7PVSTGsxH2obDrJiiLlwkGTsDHwqDDKSDptWgYk3b0+9HWHOUHz+poFd29PvRtgyo+wjmaAIb+xJ6j611+6dfSuYhyQZ5R9RXLi6UAMwx7S+R+hqVDLGBG9R4YdpfI/Q09e8dIoA7l7RPl9BU2HG9QM5kjlP2qXDNvQA2e2YEb01T2iI5n12rs/vD61meJ4m/au3Wt3CyhpKOAYzagqYkDcf21TmzRxR3S6LceN5JUjRYlhI3mOunwqAYhF92rMoZrsKCQC2wMDnuPjWV/9oMRcMLbTOdBEn/wn86nwXCri3sO91iXa5qSZgKC0fKsj18JNKCb5X4L/lGk3J0aZsx0jQPO339aa1tmBGggdP1NWDdowBoPlQ93D5plo+mlbslqJRCKsCsYZ4z6QNCP5l/mjl5b9TXGdW7jSFJETsecDlQVvGOpYIP3aEgvzMzGnSY5VDdRBc96gksyZpIUDZdOZLEg+Y8ayLJVNGt4rTsOW3mLHMBljQ7ny+NSu5BEczB8qDQky3Kfy5feiLrw68xmFa4fxT/P7MM+zvvP6TSp/wC1p/IPifzrtSsXB3iNwhp/lHyquu4qedW145rhn9bULieF2yzbr5bfDlVuOaiqY0wLDhbkh9V5jrNR47AWLgg21BClQwEETPTffY1DxO57iGFv91oHfMSwYmBKRqNRqDz20oROJ23MC4vxq1zjV2TSvoo1dfd2sKWlrZYuRy7TaD4/Ktnw+xa937traFSNVKgg+YI1rzB7xtYnOTK3SSTEak/StbY4npM0RlHJG0xNeGaC77P4VmDBAnbZiAYDZ8ucEHkwUAgRpO1G4ThyWkbKJMd46sxyKhYn+YhRJG8a1nMBxI3LgE9kc/HwrS4PFAaTIqv4K8Edode1DHwP0qHDDepXaVJHSorDRNVNUROoO96fQ0XYYECBA109TQ9kDtTPKPhU2G7o9frQBFfbssP1vTwsj0qLEbNUkHKPIfSgDmG7y+v0qSBJ9edMw3eSep+lOJ7RoAivPJP65CpcH+Koro1On+dBUmHyhWZjAGsnYCNTPKgBgb94fM1XXsPnuXQsHMFDE8m1yjbX/NZD2h9p2F0hHKDUCGDLmh0kOp1U50aCAQbR01FC8L9sLmHUtpcESQ3NjcEnNuOw3xjSsuoj8WO3wW4snw5bia3feziRnUqVOor0V4vWkdNSCrLEevloTWZxi2uIolywwFxVBdG7wBEgGN9TE+Bq59mbZt2ltMCrDMzzyljHyisGk08oZXFrju/sbs+VTxqS7DVxQtrB0Mkn7VT4vixOYKMxI05weU6jT1q8xGFttJKgzzM/np6VQ4FLSuwByjOdCSdjG5M8tq6Ws1McWPrl8cmfBDdK/Yq7Vm9nu5rkJcC5UAhVgdo7Tq3jrpUuAQ2xLsSZ5mdhppsPStEblohhIrE8Z4m1u7kTKZEwdzrsOUdSdt9dqw6LNF5KycvxXXBozykoOuEaCwhaSBoPltRV3vA/1L9RVBwzjdth24TL3jtbGiycx2Gn4oq9uX1yyMrAlSDuIncEGurafRzAv3dv+Qf7m/OlT8v61rlKh0Pf+KfWuYkgZietdGt0+v1ofi7wpJ8aG6QjKe2vFAtu1ZVQfegFmP4cpU9nxnTwisIzvGcK2UkwYPIkfar/ANp1/eWhAEKSdZJkgyZYn6eVUF3FH9jKTzb/APYazwxrI5WW43tin7ljwTBPcu2xcWFDLow1iGfQHkQseTVvMZw6wy5fdrJBOgAiIE/EiszwOy2V7twv3OzmuZssoXzFhOQMHgcweWpq+9niHD32RyhOUk6lmgDKqnYCR2lIzAHMJq3T5PhxqiclyFcK4BbQLnuOWOnYgb+BBnrRPEcC9oB0bOkgHTtKSYEjmCedR4TEAW2fMW17LtJBJIbQOw07RAUGRBGsCn3scMrrcKsrKVIjSCIM66zrWhZL5IuNFxaQraAO8CTvqTP68q5bYwROlYHh/talp8jvFrKZnllBIjxkR60Knt3d943bt+6F25IygkW0YDsnfNkQx1a8OSxWaOdTV1RCcdr7PSrP4vSp7HdHr9ax3s/7XJdfLdVbJYkKfeKVZ5AFtZILMJgsBlmRM1sLOw8z9ampJ9ERl+Ib1pqPKjXlFSXLBZiBzG/nXRhsi6Pr5RUgobhx2k8z9K5ibioSWMCadhh2gJGhP0qDFXCJhSSSeU7dN6ryS2osxw3PkS4hWZhBB8SIPiPlp40/C3FJe3PaiSNjB0BHhodRUCYi2yqiwrDUZdcs9fXXxqqw166bls3FCtbfLIkZ1ZsjzI1BkMI/lB5VT8Vpq3aLpYk02uKPPvbMXsPedLyr7pmPuzGcFfA97nBzmZBqijRgBAjVWMECQeyDqNhoa91x2BS62W4sqDIOxBgiUYaq0E9oEEVKiW7aZLaIiR3VUAeOgrQsTb4MqRgP+yjht5rlzEl8tnL7oKRrcZSrTrsF256kjlW6xQS1cZwxzXAsgnTsTqP9w+AoJ+I2sMoRQttWZoA0GY6tA8dTHnVRxj3+JSbCFmUnKZCidozMQPMVfDFt7JJUXF7iRPOqHE3VUliQJMyTpJ/zQlq3ig6Wrlsi40DQjL4nyGp57VojwBG7DolyYksA2UjY5W032jprWfXYseSCjLvxRowTlCVozmJ9oAghiqjaSY386wPGMd7+81ySApCKynl2juDBkgmvTuO+xmDxAyG2lm/rD2lCaiJkABXB6ET0ishw72QBdrLM4Csc1xSCCqnuvabtI+vZdMwIMxqa52n0kcTtO2PVZZ5ElVIrcOtxlynJdC/gfsnNMQGXSddyNNJ0FX/svcdHGjC0SAyasnbGZHHu1OSdwWIDQR5Gf9HtrdCoHyF7juDqAhgNqJZlYAqIBIDEmJFXGD4R7u5lgm4CJbQIS5l1AzTEqLmUgwbhIOrVsiqZljCVGgzUqg95Y63P94/Ku1dZLayyC/vDoOf1rLe1eK92zObpXIjdlRn1MlSVnTQmNwcms5RGjxGJyM7wOyGMTAMa78qwXHMfZxYt3FCkhHMhoBAOpH82XKSN92Mc6U3wPHG3yBKgzA3reIOZVVWYErmAYNBgQoEiBy35VHewo/Z3wmRULFWt3CIL+8uiVJIEuAdpOgq74/hrlrDWLLXDcaQ+iwZIbs5lPaEFo66+FUHtJh7t22WBW2bVskHOVaCgZmZdhM5TyjWqoy5J7G10R8K44tp2w19wLYCXLZCoxGaRFxRJDZcuhggRIrTcE47ZDMnuzatuzksxy2wHDkEqDAIadOms6GmewhsvhkvX7dt7l3MxY2kEkEzEL4DQVv8AD8HsL3bNsCBPZGsTEyOUmntQnOVUYbF4/CuzKl0Lcco7ZbZCl0EB1Q6FMxMk6wdeVAvdF5ltJburmzIzupQkDsuRO5JnUaDlHP0TiPCbDKS9m25ykS1tWIGvMjxNefcVwH7HdNwOTacwMxn3Z5ICfwbx02878EOQ3cUE8V9gsG1km2rLcCmD7x2DabEMx+IivFltmSDKwSDPKDrMdK9fxntQqoSXG2gBknwA5mq2x/2fpdT3ty6yXGliqgZQTJjrOp18aMmHn0oqkiy9hfZW0tq3cdA1xwCWPaySJCqNgddSN5raDABJZDBHT71l8DfZFADdzsmOWXw5UY/GFCmHJ615jJlksj3r1Jvz0daGH0qnwaLCY0MsneTPnXL2LHWsvgOJAl0JIYNJBEHUCNDy8anfFTzr1WlTeKMpdtKzn5VFTaj0WyYuHB8/pTrnFl92e0qmcsnkTosef1qs4aQ9ztHswfXlpRvE+HWinYHu2HdZSZB8Z73rTzYt6rz7ixyUZWyiwnE7Rsl7YfMtx0Zo7+UwSp/EJ6eNMxnEhNpspVy41OrBQWO/4Sdf0Km9mcLduK5uspXMyqAoXMA3aZiBzIO1WHFOAWWU6ZDuGTSCNjGzetZceke/1PgvyZ1KNJchl7iQyattQT4wEZgQR1nT41n+BYLEYi5dt3GFtLRyM41LncZQdtCDJ2kb1b4H2LsWma47vc5gOREnqAADEaDxJ8t05xxxszxVmc47mxrratlhaty7XQpKloIUK0QYkyep8DW6wFxLVq3btiERFC8yYG88ydyeZNEYfDHL7wMCRAhea8gf6ufhyoMXLV14D5WBYMv4tOs1njqU2lJVZY8XDa5oixfElTtkFiDAgSRm0+e3wnTWqnE8fZXBsK9w5yuYqQp0LRmB1bcTqNjqKO4/+6tzZ7TAjNJ7WpGUqdAsNlOumXN5jK4DDJct33uXLqXreZ1IIGZiGygNl7XZCjroTyqvUU5WJWo2marE4hMQii5/EU5gmmYwDmXWIB5keFQ4jGW8gt3DlZg6rlaWLWu1ClZggAE6aVmL9we5W8pY3bbrkzMgYxpBOhZI1MHc66ExX4LDNxG5bOHuKl224e4zq4dWEqAAOyA0FzuZIE6RVMI1Kx7/AEpP3NdwfBkYhrt0Z0YF0VTAR2YgsUMdqFAkHUMJ0irO8lxLhYv7xRnUnNrbZcrL7zTtScpEkFQ55Gqy37F4tnDXcQHMZc+ZpK5TpljYmJB333q2xvA8eyiMXbzaAr7uEK6b7kvoO158tKlTI747uEyl/wCr4r/ubnxu/wDmUqtf+j4//wCZX/8AK3/lUqfI96+pdZFe4QVBU5pB1mocL7N2D2vdyYyzJBKgZYJB7UgAEmZAFFYe2TcLBTEsDqDr5cuVWOGQgaiNTVsiiJmMT7Ku95ouRYyqQjS5V1ct2QdAsGI8xVLj/ZsWrn7tC+ZgWtqYJDRnOdjAHnpoOdb7E4nLMbgbbk+gqjGPa57u4tshXYB8xAhQdSPgPPMKom1FF0dzM7wTDJbsCf8A4RcwDIQsS4GckFsk69YrQ+z/ABonsNDZn0Kgqoz9owGJIGrNE6bdKixRspbuJbt2y1xySisquzDvSGMzyIHJuW9A8LxXvH97akWgUUgDUsVJJIB27oJEHblMwjPkTro2eLcG2xBnQ7fnWWu3lYwwBHQ+FXtjEe8UroAf5dN96EPs5blSbjmDMGIPSdNq24pqPZDyVPFuDpiLTKLSkxKNAlWHdIPnWf4pjcRh1IuWyFWBnUShnRdeU6aHWt7fYIQvhVL7Q2hcsOCswMy9My6r89PWtCkq3eAMVhcLeZWvFimaSQImP6pGtbjgHBrCJbuOue4QCSxkAnXRdtPKg/Z/AkWg1xAzHYMVygdInU0Hi+MG0+R+zrprpHKDWZ/LZZJ8N/iy3dOKq3RofaLB28RbKk5bg1S4ujofMbqeY2Iqt4fYtNAyF2GkSTtvImKFwfEzeYW7YzsddOQ6k8hV1w/hYwhZveM5uc2js6kkCBsZHwrTxHhFQzinDLpCNaNtSmmUkgFTyBA0MxHLfrVdjcDjWtFkRc0TlNwT/wDz86ur2O5URwts6tJMTp58/tSbcUAN7P4UWcPbW4QbmWXP9R1YDwBMUFx3FhFLCABv60ZxTCsqE2zJH4Se94A8j51hrHGlv3FtRmGb94DsMp2PjI286cUuwCeBcfCvckjK5DAjUaDJBPI9nboRWxweIt3LZuFoAMGDzHLTw+tFBkyRpEbaR8KwfE7dyxfP7OD7u8cjWxsH/C1udFOp8PtVmi5wpdk8bpl7ZxbQ1wH92rQF/F6/L40zGYtE/fyqAsucsSZJyovgunXnFRp7OMrXGZiTdIYrPcAQKANY8ZHzrK+1nAL5tBbQLKHBuIgJJY6KTzaI+h6Rz44p2rTpGnJkgotrst14fiLrO1sqyFxCkZQoABLEjvZpYHYiFiZJo/HTh8P+zujWxduELcGXLLZvdq2ujAKo2OlSf9l2CuWrd9LiMkXeyGBEqVUgidxB+INbi/h0aM6ghTIkTBGxE7GrpLcZY5JVyeSNYZPd57AZCDJcyZfLmQKQMugOu3d9XezGEfD38WQApuC1dSOSsXjQTrprtqeVej8XtI6jUBSYYiNFO+vL1qmwHBTbuj3ItrYNue+SxbKAsgglliOcCT61ymouicnu7Lng3EFJ9yzL7wAswBEhp7Sso7sAqR1B8Kum2rz3I9tg9y4QGZgunaBGqA65iQAT1nTz2mCudhRmBAUAD8Wg561KE1JEJKnR2KVck9D8KVWERnDe6x6sftRxNC4ZAsgfrQVPTYFPjzD0UmEUgHyPXX86E4uYYetWVk9lfIfSoSipdoabXRUvwd1F3LcE3CzBssMC3RhrFVv7AmHRFSQVEHXQmIJj41rXrNcbbtep+tChFeBFlwcaVa0Bw4dgeQo0mrIgZvj+KCXbYJgEH5VT8T4oty9atFgLawzjkTynwAHzq94rhbT3Fa4gZlHZknSZnSYPrWQ9o8Bbtn31uQNFdZka7ETt0ipZlL4DUSzHW5WaYcZtBJDqCAQFEbz06Vh+OQ+50NDIFJEHUnT7VuuEcFTKJWTHeImesdBXnv4SVdmxxUkyt9gnt27PLMxJY8yQYA8gPvWmxmKV1iaGxPClVcy6HWgOFL712DGAnejqZgfI/Cu/pNVHNw1Ul4MmTHt5TtDrKh7ht5xoMxMcpA2q9tultAq7D5nqfGgmwFlGzouV4icxOmh1BPUU7D4Nri5mbKOWkkxz8BWt1XJUdxGKms7wv2bR8beuu0IxRgi6EsVGck8hInTmTVzcwoUyWlfDQ8p50c1lFUG2ALkc9C2nZzEb686qnnjF7Sag2rOY/AqE/dmGG0kkes1mbOGxDXbV0JCB57RgkEESFjbU6mK1nCbq3bS3CJmZB2BBII032oPiuIa2RcjNJ0UHU7aR4VXkzuMU10OEG5NMkxuNCSW0Ox16eFDcDRrlxnZYQiVkwTy2B22361HddbmU3bR32mCIBjn6a/8ApdYV1NwZR+GGHTuz6bVGOo3LaOePaiwtWFGoGvmaHx98rEUWpqu4oOzNRKit/YixuNLMtwRBOiwDO3WSJqC9ddHW0uRQbQ1dXKgzlyqQwMZft4g3PDD2PU/ajcgNVPEm7snvdUYDCYdveXWCM1hCyqpP4ii5yNTGpJHnWh4c8tEkjkTvsBqeZ0qfiqhVMCJ/OoOBpOvjUoQUSC4L2POlSmlUwA+FTk1LHU95s55fi50earOAuGthhoCW0PnH2qzIoAoONt2l9auLB7K+Q+lUnHzDL61d4cdhfIfSgB9Znjff9fvWoYVluOOPeRI733oAvsAOwPIUSwqHAr2R5CiGFNAZjjobOCqkiNYE8zyqmxOAS6jpfa5bBAylFDEMDIJB5CNtz4VoeKXgjiTEj7mmYfEgg8528NRVu/07aA82Hs81u4rDFFgrBo9w4JAIMd7Stjh8c6wS8Dw5flV+jEhjPdE/Egfeg72ES7OYGY3Bg6fXTrXM1eieSnF8o14NRstS5RX3+LDLlVieXX5VPw/hCWPeXFulrl7IXQgwCoOinwk+dPwfDLVrtKst1Y5j4xyGk8qsmce7kATmA25Qaei0s8DcpPkhqcyyJKPCK3OzHprEnQCiL+NKdmZgRMRPpTkwlu43btoxUFpKgxHQ8qc9pIK7A8gdPhtXUWX6GcHs48lXXLJI0PQ7UBhcXbVVe3czszMr84YGPTXNv0qyezl7OZxHIMR9Ki/Y0MmNTvqZPmZ1rNkgpz3dF0Mziqqw+3isqgc/zoXEYoNEwY28KDxNm5bhdWEAg84O0jrUSW7ryQhgRJOgE7foVsSgo14K9zuyxN03UuLnCsSupG41nUbbD40dwnCrbaEYFcm2s5pE6xtVdbwy9lJbUiTJEk6TFHcIsBLtwZmMAjVidm5TWWcIbrQ/iS214L2q/jB/dmrCqzjR/dn0+tIgd4Q02/U/aj81VvBD+79T9qsaAKrjrdn0+9M4B3PU07jx7PpXPZ7+HQBb0qVKgCt9m/4C+bfU1cmlSoAxntn+DzP0rVYLuJ/pX6ClSoAlasFx/wD94/8AuD/kKVKn4A22D7o8qnalSoQGa49318vvUeA/D5/elSqSAJXa55D/AJLXMJ3vQ/Q0qVNARNy8/saTbUqVJiCeHbv/AKG+1RvvSpUDHcS/iN6fSobdKlRLoEScU7yf/TT6Vy3/AA3/ALfqKVKn4Ait/wARfMUdwz+Lc8z/AMjSpVBiLqqvjv8ADPpSpUhjeBfw/U1aLtSpUAU3H+6PKu+z38IUqVAFxSpUqAP/2Q=="
                className="img-fluid "
                alt=""
              />
            </div>
            <h3 className="mt-3">BABY SHOWER</h3>
          </div>
          <div className="col-lg-3 text-center shadow">
            <div className="mt-3">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt8prodlp/banners/igp_House_Warming_d_collections_20220309.jpg"
                className=" img-fluid"
                alt=""
              />
            </div>
            <h3 className="mt-3">HOUSE WARMING</h3>

          </div>
          <div className="col-lg-3 text-center shadow">
            <div className="mt-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyG8hFnhowN5Lc2hABAW6-oW0jEYX-2AXytA&usqp=CAU"
                className=" img-fluid "
                alt=""
              />
            </div>
            <h3 className="mt-3">BEST WISHES</h3>
            
          </div>
        </div>
      </section>
      <section className="container">
        <div className="pt-5 text-center">
          <h1 className="text-center mt-3" data-aos="fade-down">
            {" "}
            <span className="text-danger display-4 fw-bold">S</span>end{" "}
            <span className="text-danger display-4 fw-bold">G</span>ifts
            <span className="text-danger display-4 fw-bold">W</span>orld
            <span className="text-danger display-4 fw-bold">W</span>ide
          </h1>

          <p style={{ color: "grey" }}>A gift to every part of the world</p>
        </div>
        <div className="row">
          <div className="col-md-3">
            {" "}
            <div className="">
              <img src={taj} className="img-fluid rounded-2" alt="" />
              <p className="px-2 text-center">INDIA</p>
            </div>
          </div>
          <div className="col-md-3">
            {" "}
            <div className="">
              <img src={uk} className="img-fluid rounded-2" alt="" />
              <p className="px-2 text-center">UK</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <img src={canada} className="img-fluid rounded-2" alt="" />
              <p className="px-2 text-center">CANADA</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <img src={germany} className="img-fluid rounded-2" alt="" />
              <p className="px-2 text-center">GERMANY</p>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}

export default Banner;
