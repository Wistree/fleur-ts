import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Test } from "./components/Test"
import styled from "styled-components"
import Currency from "./components/Currency.component"

export const AppBox = styled.div`
  text-align: center;
`

function App() {
  return (
    <AppBox>
      <Test
        logo={logo}
        text="Edit src/App.tsx and save to reload."
        text2="Learn React"
        link="https://reactjs.org"
      />
    </AppBox>
  )
}

export default App
