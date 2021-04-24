import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { navOptions as options } from "../constants"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        {options.map(option => (
          <SidebarLink to={option.link} key={option.title}>
            {option.title}
          </SidebarLink>
        ))}
      </SidebarMenu>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 20;
  width: 100%;
  height: 100%;
  background: #000;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
`

const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 400px;
`

const SidebarLink = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  padding: 2rem;
  margin: 1rem;
  transition: 0.2s ease-in-out;
  color: #fff;
  &:hover {
    color: #f26a2e;
    transition: 0.2s ease-in-out;
  }
`

Sidebar.propTypes = {
  isOpen: PropTypes.string,
  toggle: PropTypes.func.isRequired,
}

export default Sidebar
