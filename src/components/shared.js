import React from "react";
import styled from "styled-components";

const cache = {}

export const MainImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  @media (max-width: 760px){
      height: auto;
      object-fit: unset;
  }
`
export const PostCardImage = styled.img`
  object-fit: cover;
  height: 160px;
  width: 200px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`