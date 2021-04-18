import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PostCard = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const photo = post.frontmatter.photo
  const link = post.fields.slug
  return (
    <Card>
      <Link to={link}>
        <Image src={photo} alt="" />
      </Link>

      <Article itemScope>
        <small>{post.frontmatter.date}</small>
        <h2>
          <Link to={post.fields.slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>

        <p
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </Article>
    </Card>
  )
}

const Card = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  margin: 10px 0 0;
  border-bottom: 1px solid #e0e0e0;
  @media (max-width: 768px){
      flex-direction: column;
  }
`
const Image = styled.img`
  object-fit: cover;
  height: 160px;
  width: 200px;
  border-radius: 10px;
  @media (max-width: 768px) {
      width: 100%;
      height: 300px;
  }
`
const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 32px;
  width: 100%;
  small {
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: #dbdbde;
  }
  h2 {
    padding: 0;
    margin: 0 0 20px;
  }
  @media (max-width: 768px){
      margin-left: 0;
      margin-top: 10px;
  }
`

export default PostCard
