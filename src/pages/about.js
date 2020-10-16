import React from 'react'

import Layout from "../components/layout"

const About = () => (
  <Layout>
    <div>
    <p>A Persistent Identifier (PID) provides us with a unique and stable way to refer to a scientific resource and reliably locate information about it. Connecting multiple PIDs together in a PID Graph allows for even more information to be discovered.</p>
    <p>This website presents a collection of Jupyter notebooks that were produced by the <a href="https://www.project-freya.eu/en" rel="nofollow">FREYA project</a> which interact with the DataCite's GraphQL API to access the PID Graph and retrieve information to address specific use cases.</p>
    <p>You can read more about the concept of the PID Graph <a href="https://www.project-freya.eu/en/pid-graph/the-pid-graph" rel="nofollow">here</a> and the implementation using GraphQL is described in more detail <a href="https://doi.org/10.5438/yfck-mv39" rel="nofollow">here</a>.</p>
    </div>
    <div>
        The PID Jupyter Notebooks showcase is maintained by CERN and was developed within the FREYA project
    </div>
  </Layout>
)

export default About
