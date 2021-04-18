import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "../constants"

const options = [
  { title: "Home", link: "/" },
  { title: "Books", link: "/books" },
  { title: "Movies", link: "/movies" },
  { title: "Gaming", link: "/gaming" },
  { title: "About Us", link: "/about" },
]

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <h1>Trend Archive</h1>
      </NavLink>
      <NavMenu>
        {options.map(option => (
          <NavLink to={option.link} key={option.title}>
            {option.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  text-decoration: none;
  text-transform: uppercase;
  height: 100%;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
  h1 {
    font-size: 32px;
    font-weight: 600;
  }
  
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media (max-width: 768px) {
    display: none;
  }
`

export default Navbar
