import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      {" "}
      <nav className="navbar navbar-default bootsnav navbar-fixed">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i className="fa fa-bars"></i>
          </button>
          <Link className="navbar-brand navbar-top" to="/">
            <img src="assets/images/logo.png" alt="" id="logo" />
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/A_propos">A propos</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>

            <li>
              <Link to="/ContactPro">Contacter-nous</Link>
            </li>
          </ul>
        </div>
        <div />
      </nav>
    </>
  )
}

export default Header
