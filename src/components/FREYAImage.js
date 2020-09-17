
import PropTypes from "prop-types"
import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FREYAImage = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "freya_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{width: "100px", float: "left"}} alt="FREYA"/>
  )
}

FREYAImage.propTypes = {
  siteTitle: PropTypes.string,
}

FREYAImage.defaultProps = {
  siteTitle: ``,
}

export default FREYAImage

