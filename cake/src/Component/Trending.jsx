import React from "react";
import cake from "../assets/image/cake.webp";
import flower from "../assets/image/flower.web.jpg";
import personal from "../assets/image/personalized.webp";
import hamper from "../assets/image/hampers.webp";
import couple from "../assets/image/couple.web.webp";
import plant from "../assets/image/plants.web.webp";

export default function Trending() {
  return (
    <div>
      <section className="container">
        <div className="pt-5 text-center">
          <h1 className="text-center mt-3">
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
    </div>
  );
}
