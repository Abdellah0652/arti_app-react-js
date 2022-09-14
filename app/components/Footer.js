import React, { useEffect } from "react"

function Footer() {
  return (
    <>
      <div id="foot" className="navbar-button bg-grey fix">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="navbar-callus text-left sm-text-center">
                <ul className="list-inline">
                  <li>
                    <a href="">
                      <i className="fa fa-phone"></i> appler-nous: +212658989153
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-location-arrow"></i> Contacter us: www.artigital.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="navbar-socail text-right sm-text-center">
                <ul className="list-inline">
                  <li>
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-behance"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
