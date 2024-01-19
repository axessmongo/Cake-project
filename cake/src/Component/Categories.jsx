import React from "react";

function Categories() {
  return (
    <div>
      <section className="container">
        <h1 className="text-center mt-3" >
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
    </div>
  );
}

export default Categories;
