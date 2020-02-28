import React from "react"
import styled from 'styled-components';

export const DropBtn = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
`

const Currency = () => (
  <div className = "dropdown">
    <button className="dropbtn"> Dropdown </button>
    <div className="dropdown-content">
      <a href="#"> USA </a>
      <a href="#"> AUS </a>
    </div>
  </div>
)

export default Currency