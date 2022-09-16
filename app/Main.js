import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import HomeSection from "./components/HomeSection"
import Footer from "./components/Footer"
import A_propos from "./components/A_propos"
import Services from "./components/Services"
import Brand from "./components/Brand"
import ContactPro from "./components/ContactPro"
import ContactQuest from "./components/ContactQuest"

function HeaderMain() {
  window.scrollTo(0, 0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/A_propos" element={<A_propos />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Brand" element={<Brand />} />
          <Route path="/ContactPro" element={<ContactPro />} />
          <Route path="/ContactQuest" element={<ContactQuest />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default HeaderMain
const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<HeaderMain />)

if (module.hot) {
  module.hot.accept()
}
