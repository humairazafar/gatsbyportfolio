import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {header,btn} from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  console.log(data)
    return (
    <Layout>
    <section className={header}>
      <div>
        <h2>
          Design
        </h2>
        <h3>Develop and Deploy</h3>
        <p>Web developer based in Chicago</p>
        <Link className={btn} to="/projects">My Portfolio Projects</Link>
      </div>
        <GatsbyImage image={getImage(data.file)} alt="Humaira Zafar" />
          </section>
    </Layout>
  )
}

export const query = graphql`
query Mypic {
  file(relativePath: {eq: "pic.jpg"}) {
    childImageSharp {
      gatsbyImageData(
      layout: FULL_WIDTH
      placeholder: BLURRED
      formats: [AUTO, WEBP]
      )
      
    }
  }
}
`
