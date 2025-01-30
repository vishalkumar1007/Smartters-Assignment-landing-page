import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <>
      <div className="Navbar_main">
        <div className="Navbar_main_arrange_width">
          <div className="Navbar_main_left_logo">
            <button
              className="Navbar_main_open_drawer_responsive"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              {openDrawer ? (
                <svg
                  className="open_drawer_responsive_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                  <path d="M3 6h18" />
                </svg>
              ) : (
                <svg
                  className="close_drawer_responsive_svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              )}
            </button>
            <img id="nav_logo" src={logo} alt="" />
          </div>
          <div className="Navbar_main_mid_search">
            <div className="Navbar_main_mid_search_div">
              <svg
                className="search_icon_svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                className="nav_product_search"
                placeholder="Search for products..."
              />
            </div>
          </div>
          <div className="Navbar_main_rigth_login_and_cart">
            <div className="Navbar_main_rigth_cart">
              <svg
                className="cart_icon_nav"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <div className="Navbar_main_rigth_login">
              {/* <button className="nav_login_btn">Login</button> */}
              <Stack direction="row">
                <Button variant="contained" style={{fontSize:'12px' , width:'80px',height:'37px',backgroundColor:'#A8794D',borderRadius:'8px'}}>Login</Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <div className="Navbar_main_responsive_search_box_arrange_width">
        <div className="Navbar_main_responsive_search_box">
            <svg
                className="search_icon_svg_responsive"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            <input
                type="text"
                className="nav_product_search_responsive"
                placeholder="Search for products..."
              />
        </div>
      </div>
    </>
  );
};

export default Navbar;
