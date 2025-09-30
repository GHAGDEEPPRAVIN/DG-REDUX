import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const pages = [
    { id: "1", title: "Home", path: "/" },
    { id: "2", title: "Add Product", path: "/addproduct" },
  ]

  return (
    <nav className="navbar">
      {pages.map((el, index) => (
        <NavLink
          key={index}
          to={el.path}
          style={({ isActive }) => ({
            color: isActive ? "blue" : "black",
            marginRight: "10px",
            textDecoration: "none",
            fontWeight: isActive ? "bold" : "normal"
          })}
        >
          {el.title}
        </NavLink>
      ))}
    </nav>
  )
}
