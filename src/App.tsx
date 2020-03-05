import React from "react"
import Cart from "./components/Cart.component"
import PageLinks from "./components/NavHeader/PageLinks.component"

function App() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#0f1913" }}>
      <Cart cartCount={5} />
      <PageLinks
        homeLink="/"
        productsLink="/products"
        warrantyLink="/warranty"
        distributorsLink="/distributors"
        aboutLink="/about"
      />
    </div>
  )
}

export default App
