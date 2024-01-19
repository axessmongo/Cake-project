import React from "react";
import taj from "../assets/image/india.jpg";
import uk from "../assets/image/uk.avif";
import canada from "../assets/image/canada.avif";
import germany from "../assets/image/germany2.avif";

export default function Sending() {
  return (
    <div>
      <section className="container">
        <div className="pt-5 text-center">
          <h1 className="text-center mt-3">
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
    </div>
  );
}
