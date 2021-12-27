
import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import truncate from '../helper/helper'


const IndexPage = ({ data }) => (
    <Layout>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div>
                    {data.allStrapiArticle.edges.map(document => (
                        <div key={document.node.id}>
                                <h2>
                                   <Link to={`/${document.node.id}`}>{document.node.title}</Link>
                                </h2>
                                <Img fixed={document.node.image.childImageSharp.fixed}/>
                                <p>{truncate(document.node.content, 150)}</p>
                        </div>
                    ))}
            </div>
            <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`