import * as React from "react"
import 'semantic-ui-css/semantic.min.css'
import Navbar from '../components/Navigation'
// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>El Entramado Social</title>
      <Navbar />
    </main>
  )
}

export default IndexPage