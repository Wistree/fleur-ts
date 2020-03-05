import React from "react"
import "./Cart.component"
import "./Currency.component"
import "./SignInAndSignUp.component"

interface INavHeaderProps {
  cart: React.ReactNode
  currency: React.ReactNode
  signInAndSignUp: React.ReactNode
}

const NavHeader: React.FC<INavHeaderProps> = ({ cart, currency, signInAndSignUp }) => (
  <div>
    {signInAndSignUp}
    {cart}
    {currency}
  </div>
)

export default NavHeader
