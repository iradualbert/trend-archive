import * as React from "react"
import { Link } from "gatsby"
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Navbar />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
