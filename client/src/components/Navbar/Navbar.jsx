import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {

  return (
    <div className='navbar'>
        <Link to="/" className='logo regLink'>
            <span>Sombrero Sheriff</span>
        </Link>
        {user
        ? (
          <ul className='itemList'>
              <li className='item'>
                  <img src="https://pbs.twimg.com/profile_images/455804843534594048/buEki1IK_400x400.jpeg" alt="" className="avatar" />
              </li>
              <li className='item'>hello</li>
              <li className='item'>Logout</li>
          </ul>
        )
        : (
          <Link to="/login" className="regLink login">Login</Link>
        )
        }
    </div>
  )
}
