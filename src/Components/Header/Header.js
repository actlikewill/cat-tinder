import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  return (
    <header>
        <Link to="/">
          <p className="logo">Meow Tinder</p>
        </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


