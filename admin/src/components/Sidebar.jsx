import { NavLink } from "react-router-dom"

import { assets } from "../assets/admin_assets/assets"
const Sidebar = () => {
  return (
    <div>
        <NavLink to="/add"> 
    <img src={assets.ass_icon} alt="" />
    <p>Add Items</p>
        </NavLink>
      
    </div>
  )
}

export default Sidebar

