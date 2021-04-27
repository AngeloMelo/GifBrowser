import { Link } from "react-router-dom"

const Navbar = () => {

    return (
          
      <header>
        <div className="nav-bar">
            <div className="logo">
              <Link to="/">Gif browser</Link>
            </div>
        </div>
      </header>
    )
}

export default Navbar