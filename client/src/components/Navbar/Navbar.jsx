import "./navbar.scss";

export default function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>Sombrero Sheriff</span>
        <ul className='itemList'>
            <li className='item'>
                <img src="https://pbs.twimg.com/profile_images/455804843534594048/buEki1IK_400x400.jpeg" alt="" className="avatar" />
            </li>
            <li className='item'>That Guy</li>
            <li className='item'>Logout</li>
        </ul>
    </div>
  )
}
