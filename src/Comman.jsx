import React from "react";
import { NavLink } from "react-router-dom";

const Comman = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg gy-5">
          <div className="row">
            <div className="col-10 mx-auto mt-5">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Zafeer Kamran</strong>
                  </h1>
                  <h2 className="my-3">We are team of website developer</h2>
                  <div className=" mt-3">
                    <NavLink
                      to={props.visit}
                      className="btn btn-get-started mb-5"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img mt-3">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Comman;
