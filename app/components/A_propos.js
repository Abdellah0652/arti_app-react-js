import React, { useEffect } from "react"

function A_propos() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
  return (
    <>
      <section id="features" className="features">
        <div className="container">
          <div className="row">
            <div className="main_features fix roomy-100">
              <div className="col-md-4">
                <div className="features_item sm-m-top-30">
                  <div className="f_item_icon">
                    <i className="fa fa-info-circle"></i>
                  </div>
                  <div className="f_item_text">
                    <h3>A PROPOS</h3>
                    <p> L'entreprise ARTIGITAL SARL est une entreprise numérique dont le siège est au Maroc et exerçant dans le secteur des nouvelles Technologies, nous accompagnons entrepreneurs et entreprises dans la réalisation de leurs projets</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="features_item sm-m-top-30">
                  <div className="f_item_icon">
                    <i className="fa fa-line-chart"></i>
                  </div>
                  <div className="f_item_text">
                    <h3>Notre vision</h3>
                    <p>
                      Nous voulons aider les entrepreneurs et les porteurs de projets de tout genre à développer leurs marques et participer à la révolution numérique en cours.
                      <ul>
                        <li>·Créativité </li>
                        <li>·Efficacité </li>
                        <li>·Résultat Notre devise.. </li>
                      </ul>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="features_item sm-m-top-30">
                  <div className="f_item_icon">
                    <i className="fa fa-sliders"></i>
                  </div>
                  <div className="f_item_text">
                    <h3>Services</h3>
                    <p>
                      Design Graphic Nous intervenons dans les secteurs suivants :
                      <ul>
                        <li>-Développement Web et Mobile Web Marketing </li>
                        <li>-Référencement Audit et Maintenance </li>
                        <li>-Social Media </li>
                        <li>-Design Graphic</li>
                      </ul>
                    </p>
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

export default A_propos
