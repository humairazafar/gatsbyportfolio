import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {portfolio, projectstyles} from '../../styles/projects.module.css'

export default function Projects({ data }) {

    console.log(data)

    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
        <div className={portfolio}>
            <h2>Portfolio</h2>
            <h3>Projects & Websites I've Created</h3>
            <div>
                {projects.map(project => (
                    <Link to={"/projects/" + project.frontmatter.slug} key = {project.id}>
                        <div className={projectstyles}>
                            <h3>{ project.frontmatter.title }</h3>
                            <p>{ project.frontmatter.stack }</p>
                        </div>
                    </Link>
                ))}
            </div>
            <p>Let's create! Email me at { contact } for more information</p>
        </div>
        </Layout>
    )
}

//export page query
export const query = graphql`
query projectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            slug
            stack
            title
          }
          id
        }
      }
    contact: site {
        siteMetadata {
            contact
        }
    }
  }
  
`
