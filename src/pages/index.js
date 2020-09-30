import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Router } from "@reach/router";

import Home from "../components/home";


const IndexPage = () => {
  return (
    <Layout>
        <Home />
    </Layout>
  )
}

export default IndexPage
