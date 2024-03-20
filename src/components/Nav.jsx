import { FaChevronCircleRight, FaSearch } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import profile from '../images/profile.jpeg';
import { CiMenuKebab } from "react-icons/ci";

const Nav = () => {

  return (
    <div className="content-up mt-3 d-flex justify-content-between px-5 ">
        <div className="position-relative w-25 a">
            <input type="text" placeholder='Search' className="form-control w-100" />
            <FaSearch className="position-absolute search-icon"/>
        </div>
        <div className="profile d-flex gap-3 align-items-center">
         <LuMoon className="profile-icon"/>
         <IoMdNotificationsOutline className="profile-icon"/>
         <img src={profile} alt="profile" />
         <CiMenuKebab className="profile-icon"/>
        </div>
    </div>
  )
}

export default Nav
