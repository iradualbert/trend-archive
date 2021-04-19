import * as React from "react"
import { graphql } from "gatsby"
import IndexPage from "../../components/IndexPage"

const BooksIndex = ({ data, location }) => {
  return <IndexPage data={data} location={location} title={"Books"} />
}
export default BooksIndex

export const pageQuery = () => graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(books)/" } }
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
