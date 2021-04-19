import * as React from "react"
import { graphql } from "gatsby"
import IndexPage from "../../components/IndexPage"

const MoviesIndex = ({ data, location }) => {
  return <IndexPage data={data} location={location} title={"Movies"} />
}
export default MoviesIndex

export const pageQuery = () => graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(movies)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          photo
        }
      }
    }
  }
`
