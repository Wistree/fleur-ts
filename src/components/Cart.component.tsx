import React from "react"
import shoppingCart from "../assets/shoppingCart.svg"
import styled from "styled-components"

interface ICartProps {
  cartCount: number
}

export const CartBox = styled.div`
  display: flex;
  flex-direction: row;
`

export const CartIcon = styled.img.attrs({
  src: `${shoppingCart}`,
})`
  width: 20px;
  height: 20px;
  padding-right: 5px;
`

const Cart: React.FC<ICartProps> = ({ cartCount }) => (
  <CartBox>
    <CartIcon />
    <text style={{ paddingTop: "2px" }}>{cartCount}</text>
  </CartBox>
)

export default Cart
