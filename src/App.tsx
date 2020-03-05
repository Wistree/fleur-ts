import React from "react"
import Cart from "./components/Cart.component"
import Currency from "./components/Currency.component"

function App() {
  return (
    <div>
      <Cart cartCount={5} />
      <Currency />
    </div>
  )
}

export default App
