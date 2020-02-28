import React from "react"
import "../App.css"
import styled from "styled-components"

export const HeaderBox = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

interface IProps {
  logo: string
  text: string
  text2: string
  link: string
}

export const Test: React.FC<IProps> = ({ logo, text, text2, link }) => (
  <HeaderBox>
    <img src={logo} className="App-logo" alt="logo" />
    <p>{text}</p>
    <a className="App-link" href={link} target="_blank" rel="noopener noreferrer">
      {text2}
    </a>
  </HeaderBox>
)
