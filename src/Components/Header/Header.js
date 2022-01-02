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
          <li className="">
            <Link className="link" to="/likes">My Likes</Link>

          </li>
          <li>
            <Link className="link" to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


