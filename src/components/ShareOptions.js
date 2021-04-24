import React from "react"
import styled from "styled-components"

const ShareOptions = ({ title }) => {
    const url = window.location.href;
    const text = `${title} ${url}`
    const handleTwitterClick = () => {
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`)
  }
  return (
    <Container>
      <Button onClick={handleTwitterClick}>Twitter</Button>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  width: 60px;
  top: 90px;
  z-index: 9;
  background: transparent;
`

const Button = styled.button`
  cursor: pointer;
`

export default ShareOptions
