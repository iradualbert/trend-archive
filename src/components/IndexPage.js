import * as React from "react"
import Layout from "./layout"
import SEO from "./seo"
import RecentPost from "./RecentPost"
import PostCard from "./PostCard"

const IndexPage = ({ data, location, title }) => {
  const posts = data.allMarkdownRemark.nodes
   if (posts.length === 0) {
     return (
       <Layout location={location} title={title}>
         <SEO title={title} />
         <h1>
           No Post Yet ...
         </h1>
       </Layout>
     )
   }
  return (
    <>
      <Layout location={location}>
        <SEO title={title} />
        <ol style={{ listStyle: `none` }}>
          <RecentPost post={posts[0]} />
          {posts.slice(1).map(post => (
            <PostCard post={post} key={post.fields.slug} />
          ))}
        </ol>
      </Layout>
    </>
  )
}

export default IndexPage;

