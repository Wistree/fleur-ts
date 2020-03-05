import React from "react"
import styled from "styled-components"

export const DropBtn = styled.button`
  background-color: #000;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`
export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`

const Currency = () => (
  <DropDown>
    <DropBtn> Currency </DropBtn>
    <DropDownContent>
      <a href="#"> USA </a>
      <a href="#"> AUS </a>
    </DropDownContent>
  </DropDown>
)

export default Currency
