import { NavLink } from 'react-router-dom';
import "../styles/navbar.css"

export default function Navbar() {
  const PageData = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Blog", path: "/blog" },
    { id: 4, title: "Contact", path: "/contact" }
  ];

  return (
    <div className="main container m-auto" 
         style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "10px" }}>
            <div className="logo">🌍 Beyond Borders</div>
      <div className='list'>
        {PageData.map((el) => (
        <NavLink
          key={el.id}
          to={el.path}
          style={({ isActive }) => ({
            textDecoration: "none",
            fontSize: "18px",
            marginLeft:"20px",
            color: isActive ? 'blue' : 'black',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          {el.title}
        </NavLink>
      ))}
      </div>
    </div>

  );
}
