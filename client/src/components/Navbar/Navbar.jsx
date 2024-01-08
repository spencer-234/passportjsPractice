import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  }

  return (
    <div className='navbar'>
        <Link to="/" className='logo regLink'>
            <span>Sombrero Sheriff</span>
        </Link>
        {user
        ? (
          <ul className='itemList'>
              <li className='item'>
                  <img src={user.photos[0].value} alt="" className="avatar" />
              </li>
              <li className='item'>{user.displayName}</li>
              <li className='item' onClick={logout}>Logout</li>
          </ul>
        )
        : (
          <Link to="/login" className="regLink login">Login</Link>
        )
        }
    </div>
  )
}
