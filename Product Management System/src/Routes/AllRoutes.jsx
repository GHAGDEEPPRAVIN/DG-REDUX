import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home/Home"
import Description from "../Pages/Description/Description"
import AddProduct from "../Pages/AddProduct/AddProduct"
import EditProduct from "../Pages/EditProduct/EditProduct"

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct" element={<EditProduct />} />
      </Routes>
    </div>
  )
}
