import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import emailjs from "emailjs-com"
function ContactPro() {
  function send_email(e) {
    e.preventDefault()
    emailjs
      .sendForm("service_ha6dmq8", "template_ipegd52", e.target, "2z8xLYXMzD4SH0Vbe")
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
                        Telephone *
                      </label>
                      <input type="text" className="form-control" name="telephone" placeholder="Saisir votre telephone complete" />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label for="" className="col-form-label">
                        Email *
                      </label>
                      <input type="text" className="form-control" name="email" id="email" placeholder="Saisir votre adresse email" />
                    </div>
                    <div className="col-md-6 form-group mb-3">
                      <label for="" className="col-form-label">
                        Nom de Societe *
                      </label>
                      <input type="text" className="form-control" name="societe" placeholder=" Saisir votre nom de societe" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label for="budget" className="col-form-label">
                        Budget
                      </label>
                      <select className="custom-select" id="budget" name="budget">
                        <option value="$20,000 +" selected>
                          $20,000 +
                        </option>
                        <option value="$50,000 +">$50,000 +</option>
                        <option value="$100,000 +">$100,000 +</option>
                        <option value="je n'ai pas une idée  ">je n'ai pas une idée </option>
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
                        <Link id="Lnk" to="/ContactQuest">
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

export default ContactPro
