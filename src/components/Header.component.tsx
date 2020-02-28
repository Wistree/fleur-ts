import React from 'react';

import './NavHeader.component';

interface IHeaderProps {
  logo: string
  watchLink?: string
  warrantyLink?: string
  distributorLink?: string
  aboutLink?: string
  navHeader: React.ReactNode
}

const Header: React.FC<IHeaderProps> = ({ logo, watchLink, warrantyLink, distributorLink, aboutLink, navHeader }) => {
  return (
    <div>
      <div>
        {navHeader}
      </div>
      <img src = {logo} />
      <div>
        <a href = {watchLink}> Timepieces </a>
        <a href = {warrantyLink}> Warranty </a>
        <a href = {distributorLink}> Distributors </a>
        <a href = {aboutLink}> About Us </a>
      </div>
    </div>
  )
};

export default Header;