import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const LMainImage = styled(GatsbyImage)`
  object-fit: cover;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  @media (max-width: 760px){
      height: auto;
      object-fit: unset;
  }
`
export const MainImage = ({ photo, ...rest }) => {
  const image  = getImage(photo)
  return <LMainImage image={image} {...rest}/>
} 



// export const PostCardImage = styled.img`
//   object-fit: cover;
//   height: 160px;
//   width: 200px;
//   border-radius: 10px;
//   @media (max-width: 768px) {
//     width: 100%;
//     height: 300px;
//   }
// `

export const CardFluidImage = styled(GatsbyImage)`
  object-fit: cover;
  height: 160px;
  width: 200px;
  border-radius: 10px;
  margin-right: 32px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-right: 0
  }
`

export const PostCardImage = ({ photo, alt, ...rest }) => {
  const image = getImage(photo)
  return <CardFluidImage image={image} alt={alt} {...rest} />
}

