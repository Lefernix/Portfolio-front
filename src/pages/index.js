import React from "react"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer"
import About from "../pages/about"
import Header from "../components/Header"
import "../styles/styles.scss"
import Banner from "../components/Banner"

import Animation from '../components/Animation'
import MyProject from "../components/MyProjects.js"
import Form from "../components/Form"

const IndexPage = () => (
  <div>
    <Header/>
    <Banner/>
    <Animation/>
    <SEO title="Nombalier Adrien | Fullstack developer" description="Développeur web junior à Tours (37)" />
    <MyProject/>
    <About/>
    <Form/>
    <Footer/>
  </div>
)

export default IndexPage
