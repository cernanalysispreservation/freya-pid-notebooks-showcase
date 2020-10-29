import React from 'react'

import Layout from "../components/layout"

const About = () => (
  <Layout>
    <div>
    <p>A Persistent Identifier (PID) provides us with a unique and stable way to refer to a scientific resource and reliably locate information about it. Connecting multiple PIDs together in a PID Graph allows for even more information to be discovered.</p>
    <p>This website presents a collection of Jupyter notebooks that were produced by the <a href="https://www.project-freya.eu/en" rel="nofollow">FREYA project</a> which interact with DataCite's GraphQL API to access the PID Graph and retrieve information to address specific use cases. You can read more about the concept of the PID Graph <a href="https://www.project-freya.eu/en/pid-graph/the-pid-graph" rel="nofollow">here</a> and the implementation using GraphQL is described in more detail <a href="https://doi.org/10.5438/yfck-mv39" rel="nofollow">here</a>.</p>
    <p> The notebooks can be easily reused by using different PIDs and/or queries as input parameters. Each notebook has a DOI and the Binder links included in each record make it easy to launch a notebook in a Binder instance directly from the website. The Jupyter notebooks are hosted on a separate GitHub repository available <a href="https://github.com/datacite/pidgraph-notebooks-python" rel="nofollow">here</a>.</p>
    </div>
    <div>
        The PID Jupyter Notebooks showcase website is maintained by CERN and was developed under the project goals of the FREYA Project.
    </div>
  </Layout>
)

export default About
