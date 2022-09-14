import React, { useEffect } from "react"

function Services() {
  window.scrollTo(0, -120)

  return (
    <>
      <section id="test" className="test bg-grey roomy-100 fix">
        <div className="container">
          <div className="row">
            <div className="main_test fix">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="head_title text-center fix">
                  <h2 className="text-uppercase">Nos services </h2>
                  <h5>Nous intervenons dans les secteurs suivants</h5>
                </div>
              </div>

              <div className="col-md-6">
                <div className="test_item fix">
                  <div className="item_img">
                    <img className="img-circle" src="assets/images/logo.png" alt="" />
                    <i className="fa fa-quote-left"></i>
                  </div>

                  <div className="item_text">
                    <h5>Développement Web</h5>

                    <ul>
                      <li>-Réalisation de produits avec les CMS : Wordpress, Drupal, Joomla</li>
                      <li>-Conception et réalisation de sites ecommerces</li>
                      <li>-Conception et réalisation de site vitrines</li>
                      <li>-Conception et réalisation de plateformes web</li>
                      <li>-Réalisation de produits avec les frameworks et langages : Laravel, React Js, Php, Java script</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="test_item fix sm-m-top-30">
                  <div className="item_img">
                    <img className="img-circle" src="assets/images/logo.png" alt="" />
                    <i className="fa fa-quote-left"></i>
                  </div>

                  <div className="item_text">
                    <h5>Développement Mobile</h5>

                    <p>
                      <ul>
                        <li>-Conception et réalisation de solutions mobiles</li>
                        <li>-Conception et réalisation d applications mobiles multiplateformes</li>
                        <li>-Conception et réalisation d applications mobiles natives : IOS & Android</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="main_test fix">
              <div className="col-md-6">
                <div className="test_item fix">
                  <div className="item_img">
                    <img className="img-circle" src="assets/images/logo.png" alt="" />
                    <i className="fa fa-quote-left"></i>
                  </div>

                  <div className="item_text">
                    <h5>Design Graphic</h5>

                    <p>Infographie</p>
                    <ul>
                      <li>-Conception et réalisation de logos</li>
                      <li>-Création Affiche , Flyers / Carte de visites / Packaging</li>
                      <li>-Création graphique pour réseaux sociaux , events</li>
                    </ul>
                    <br />
                    <ul>
                      <p>UX/UI</p>
                      <li>-Conception de prototype d applications web / mobile / Desktop</li>
                      <li>-Motion Design</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="test_item fix sm-m-top-30">
                  <div className="item_img">
                    <img className="img-circle" src="assets/images/logo.png" alt="" />
                    <i className="fa fa-quote-left"></i>
                  </div>

                  <div className="item_text">
                    <h5>Marketing Digital</h5>

                    <p>Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.</p>
                    <ul>
                      <li>-Stratégie éditoriale</li>
                      <li>-Stratégie marketing</li>
                      <li>-Accompagnement Marketing</li>
                      <li>-Élaboration de plan marketing</li>
                      <li>Optimisation de performances :</li>
                      <li>-Audit marketing</li>
                      <li>-Audit marketing</li>
                      <li>-Pilotage de stratégie</li>
                      <li>-Accompagnement opérationnel</li>
                    </ul>
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

export default Services
