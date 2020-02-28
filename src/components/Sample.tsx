import React from 'react';

interface IProps {
  text: string
  onClick?: () => null
  true?: boolean
}

export const Sample: React.SFC<IProps> = ({ text, onClick }) => {
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={onClick}></button>
      </div>
    );
};
