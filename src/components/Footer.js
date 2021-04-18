import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const contactData = []

const supportData = [
  { title: "Help Center", link: "/help" },
  { title: "Privacy Policy", link: "/privacy-policy" },
  { title: "Terms of Service", link: "/terms" },
  { title: "Security", link: "/security" },
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
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Explore</h1>
          <p>Live your experience with Unreal Destinations</p>
        </FooterDesc>
      </FooterLinksWrapper>
      {renderColumn("Support", supportData)}
      {renderColumn("Community", communityData)}
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #000;
  color: #fafafb;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const FooterLinksWrapper = styled.div``
const FooterDesc = styled.div`
  padding: 0 2rem;
  h1 {
    margin-bottom: 1rem;
    color: #f26a2e;
  }
  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
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
