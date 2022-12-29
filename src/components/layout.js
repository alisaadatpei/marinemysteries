import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import Logo from '../../static/img/logo.png'

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div className="global-wrapper" data-is-root-path={isHomePage}>
      <header className="global-header">
        <h1 className="main-heading">
            <Link to="/">
              <img src={Logo} alt="Logo" className="fluid-img" style={{width: 110}} />
            </Link>
        </h1>
      </header>

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()}, Marine Mysteries. All Contents Of This Site Belong To Marine Mysteries.
      </footer>
    </div>
  )
}

export default Layout
