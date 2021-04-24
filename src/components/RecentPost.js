import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MainImage } from "./shared";

const RecentPost = ({ post }) => {
  // React.useEffect(() => {
  //   console.log(post.frontmatter)
  // }, [])
  
  const { fields } = post
  const title = post.frontmatter.title || post.fields.slug
  const photo = post.frontmatter.photo;

  return (
    <Card to={fields.slug} itemProp="url">
      <MainImage photo={photo} alt="" />
      <Section>
        <Title>{title}</Title>
        <p
          style={{ color: "#1c1e29", marginTop: 10 }}
          dangerouslySetInnerHTML={{
            __html: post.frontmatter.description || post.excerpt,
          }}
          itemProp="description"
        />
      </Section>
    </Card>
  )
}

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgb(154 160 185 / 5%),
    0 15px 40px rgb(166 173 201 / 20%);
  margin-bottom: 64px;
  text-decoration: none;
`

const Section = styled.section`
  letter-spacing: 0.15px;
  margin: 20px 0;
  padding: 0 26px;
  @media (max-width: 760px){
    padding: 0 16px;
  }
`

const Title = styled.span`
  font-size: 32px;
`

export default RecentPost
