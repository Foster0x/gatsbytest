import * as React from "react"
import Home from './home'

const IndexPage = () => {
  return (
    <div>
    <h1>This is where the content will go. </h1>
    <p>Below this is what is being displayed in the home.js file. </p>
    <Home />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
