import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import emailjs from "emailjs-com"
function ContactQuest() {
  function send_email(e) {
    e.preventDefault()
    emailjs
      .sendForm("service_0honlje", "template_74pvnko", e.target, "2z8xLYXMzD4SH0Vbe")
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row align-items-stretch no-gutters contact-wrap">
            <div className="col-md-12">
              <div className="form h-70">
                <h3>Contacter - nous </h3>
                <form onSubmit={send_email} className="mb-5" method="post" id="contactForm" name="contactForm">
                  <div className="row">
                    <div className="col-md-6 form-group mb-3">
                      <label for="" className="col-form-label">
                        Nom et Prenom *
                      </label>
                      <input type="text" className="form-control" name="name" id="name" placeholder="Saisir votre nom et prenom" />
                    </div>

                    <div className="col-md-6 form-group mb-3">
                      <label for="" className="col-form-label">
                        Email *
                      </label>
                      <input type="text" className="form-control" name="email" id="email" placeholder="Saisir votre adresse email" />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label>
                        {" "}
                        Avez-vous un cahier de charge? <br />
                        <input type="radio" value="Yes" name="cahier_charge" />
                        Yes
                      </label>
                      <label>
                        <input type="radio" value="No" name="cahier_charge" />
                        No
                      </label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label for="budget" className="col-form-label">
                        choisir le type de site de projet
                      </label>
                      <select className="custom-select" id="budget" name="t_site">
                        <option value="Blog" selected>
                          Blog
                        </option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Education">Education</option>
                        <option value="start-up">Start-up</option>
                        <option value="Application web">Application web</option>
                        <option value="Application mobile">Application mobile</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label for="message" className="col-form-label">
                        Message *
                      </label>
                      <textarea className="form-control" name="message" id="message" cols="30" rows="4" placeholder="Write your message"></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input type="submit" value="Envoyez  Message" className="btn btn-primary rounded-0 py-2 px-4" />
                      <span className="submitting">
                        {" "}
                        <Link id="Lnk" to="/">
                          Avez-vous des Questions{" "}
                        </Link>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.validate.min.js"></script>
      <script src="js/main.js"></script>
    </>
  )
}

export default ContactQuest
