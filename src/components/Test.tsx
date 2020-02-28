import React from "react"
import "../App.css"

interface IProps {
  logo: string
  text: string
  text2: string
  link: string
}

export const Test: React.FC<IProps> = ({ logo, text, text2, link }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{text}</p>
      <a className="App-link" href={link} target="_blank" rel="noopener noreferrer">
        {text2}
      </a>
    </header>
  </div>
)
