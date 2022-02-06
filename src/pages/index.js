import * as React from "react"
import 'semantic-ui-css/semantic.min.css'
import '../style/styles.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./home";
import { AboutUs } from "./about";


// markup
const IndexPage = () => {
  return (
    <main>
      <title>El Entramado Social</title>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </main>
  )
}

export default IndexPage