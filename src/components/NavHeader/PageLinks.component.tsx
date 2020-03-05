import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import styled from "styled-components"
import homeLogoBig from "../../assets/homeLogoBig.png"

interface IPageLinksProps {
  homeLink: string
  productsLink: string
  warrantyLink: string
  distributorsLink: string
  aboutLink: string
}

const Links = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 2rem;
  font-size: 20px;
  font-family: Tiempos_Headline_Regular, serif;
  line-height: 1.2;
  font-weight: 400;
  &:hover {
    color: #D7AB6D;
  }
`

export const HomeLogo = styled.img.attrs({
  src: `${homeLogoBig}`,
})`
  width: 20%;
  height: auto;
  margin-bottom: 3rem;
`

const PageLinks: React.FC<IPageLinksProps> = ({
  homeLink,
  productsLink,
  warrantyLink,
  distributorsLink,
  aboutLink,
}) => (
  <Router>
    <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
      <Link to={homeLink} style={{padding: "1rem"}}>
        <HomeLogo />
      </Link>
      <div>
        <Links to={productsLink}>Our Timepieces</Links>
        <Links to={warrantyLink}>Warranty</Links>
        <Links to={distributorsLink}>Distributors</Links>
        <Links to={aboutLink}>About Us</Links>
      </div>
    </div>
  </Router>
)

export default PageLinks
