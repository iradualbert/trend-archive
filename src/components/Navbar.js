import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { FaBars } from "react-icons/fa";
import { navOptions as options } from "../constants";

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`



const Navbar = ({ toggle }) => {
  const { site } = useStaticQuery(query);
  // React.useEffect(() => { console.log(site)}, [])
  return (
    <Nav>
      <NavLink to="/">
        <h1>{site.siteMetadata.title}</h1>
      </NavLink>
      <Bars onClick={toggle}/>
      <NavMenu>
        {options.map(option => (
          <NavLink
            to={option.link}
            activeClassName="active-nav-link"
            key={option.title}
          >
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
  .active-nav-link {
    border-bottom: 1px solid black;
  }
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
    font-size: 30px;
    font-weight: 600;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 24px;
    }
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

const Bars = styled(FaBars)`
  display: none;
  color: #1a202c;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired
}

export default Navbar
