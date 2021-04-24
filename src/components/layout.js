import * as React from "react"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const [isOpen, setIsOpen] = React.useState(false);

  let props = { toggle: () => setIsOpen(false), isOpen: undefined}
  if (isOpen) {
    props.isOpen = "true";
  }

  return (
    <>
      <Navbar toggle={() => setIsOpen(prev => !prev)}/>
      <Sidebar {...props}/>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
