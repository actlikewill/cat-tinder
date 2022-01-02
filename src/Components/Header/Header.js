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
            <Link to="/likes">My Likes</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


