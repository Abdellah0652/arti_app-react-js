import React, { useEffect } from "react"

function HomeSection() {
  return (
    <>
      <section id="home" className="home bg-black fix">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="main_home text-center">
              <div className="col-md-12">
                <div className="hello_slid">
                  <div className="slid_item">
                    <div className="home_text ">
                      <h2 className="text-white">
                        Bienvenue chez <strong>ARTIGITAL</strong>{" "}
                      </h2>
                      <h1 className="text-white">Nous intervenons aux secteurs </h1>
                      <h3 className="text-white">
                        <ul>
                          <li>
                            <strong>Développement Web </strong>
                          </li>
                          <li>
                            <strong>Développement Mobile </strong>
                          </li>
                          <li>
                            <strong> Web Marketing</strong>
                          </li>
                        </ul>
                      </h3>
                    </div>
                  </div>
                  <div className="slid_item">
                    <div className="home_text ">
                      <h2 className="text-white">
                        Bienvenue chez <strong>ARTIGITAL</strong>
                      </h2>
                      <h1 className="text-white">Nous intervenons aux secteurs </h1>
                      <h3 className="text-white">
                        <ul>
                          <li>
                            <strong>Design Graphic</strong>
                          </li>
                          <li>
                            <strong>Référencement </strong>
                          </li>
                          <li>
                            <strong> Web Marketing</strong>
                          </li>
                        </ul>{" "}
                      </h3>
                    </div>
                  </div>
                  <div className="slid_item">
                    <div className="home_text ">
                      <h2 className="text-white">
                        Bienvenue chez <strong>ARTIGITAL</strong>
                      </h2>
                      <h1 className="text-white">Nous intervenons aux secteurs </h1>
                      <h3 className="text-white">
                        <ul>
                          <li>
                            <strong>Audit et Maintenance</strong>
                          </li>
                          <li>
                            <strong>Social Media </strong>
                          </li>
                        </ul>{" "}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSection
