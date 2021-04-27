import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo"
import { MainImage } from "../components/shared"
// import ShareOptions from "../components/ShareOptions";

const localUrl = "http://127.0.0.1:8000/add-view/"
const prodUrl = "https://trendarchive.herokuapp.com/add-view/"
const analytics_url =
  window.location.hostname === "www.thetrendarchive.com/" ? prodUrl : localUrl

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Archive Trend`
  let { previous, next } = data
  if (previous?.frontmatter?.notBlog) {
    previous = null
  }
  if (next?.frontmatter?.notBlog) {
    next = null
  }
  const isBlog = post.frontmatter.notBlog ? false : true
  const photo = post.frontmatter.photo
  const addView = React.useRef()
  addView.current = async () => {
    if (!isBlog) return
    const data = {
      title: post.frontmatter?.title,
      slug: post.fields.slug,
      url: window.location.href,
    }
    try {
      fetch(analytics_url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
    } catch (err) {}
  }

  React.useEffect(() => {
    addView.current()
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      {/* <ShareOptions title={title}/> */}
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          {photo && <MainImage photo={photo} alt={post.frontmatter.title} />}
        </header>
        <section
          style={{ marginTop: 20 }}
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          {isBlog && (
            <>
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </>
          )}
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        notBlog
        photo {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }

    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        notBlog
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        notBlog
      }
    }
  }
`
