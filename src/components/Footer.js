import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


const contentData = [
  { title: "Books", link: "/books" },
  { title: "Movies", link: "/movies" },
  { title: "Gaming", link: "/gaming" },
]
const supportData = [
  { title: "About Us", link: "/about" },
  { title: "Contact Us", link: "/contact" },
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Disclaimer", link: "/disclaimer" },
]

const communityData = [
  { title: "Facebook", link: "/" },
  { title: "Instagram", link: "/" },
  { title: "Twitter", link: "/" },
  { title: "LinkedIn", link: "/" },
]

const Footer = () => {
  const renderColumn = (name, data) => (
    <FooterLinksWrapper>
      <FooterLinkItems>
        <FooterLinkTitle>{name}</FooterLinkTitle>
        {data.map(item => (
          <FooterLink key={item.title} to={item.link}>
            {item.title}
          </FooterLink>
        ))}
      </FooterLinkItems>
    </FooterLinksWrapper>
  )

  return (
    <FooterContainer>
      {renderColumn('Content', contentData)}
      {renderColumn("Support", supportData)}
      {renderColumn("Community", communityData)}
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  padding: 1.5rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #000;
  color: #fafafb;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const FooterLinksWrapper = styled.div``

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
 
`
const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;
  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`

export default Footer
