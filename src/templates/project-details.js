import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {featured, html} from '../styles/project-details.module.css'
import { graphql } from 'gatsby'

export default function ProjectDetails({ data }) {

    const { html } = data.markdownRemark
    const { title, stack } = data.markdownRemark.frontmatter
    const featuresImage = getImage(data.markdownRemark.frontmatter.featuresImg.childImageSharp.gatsbyImageData)
    return (
        <Layout>
        <div>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className={featured}>
            <GatsbyImage image={featuresImage} alt="Banner" />
            </div>
           <div className={html} dangerouslySetInnerHTML={{__html: html }} /> 
        </div>
        </Layout>
    )
}

export const query = graphql `
query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
        featuresImg {
          childImageSharp {
            gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats:[AUTO,AVIF]
            )
          }
        }
      }
    }
  }
`