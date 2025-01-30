import "./Footer.css";
import td_image from "../../assets/taddy_image.png";
import logo from "../../assets/logo.png";
import x_logo from '../../assets/twitter_icon.png';
import whatsapp_logo from '../../assets/whatsapp_icon.jpeg';

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_content">
        <div className="footer_content_wrapper_text_img_td">
          <img src={td_image} alt="" />
          <h2 className="footer_title">MADE WITH LOVE</h2>
        </div>
        <p className="footer_subtitle">
          SUBSCRIBE FOR EXCLUSIVE <br /> SALES & NEWS
        </p>
        <p className="footer_description">
          We will provide detailed information about our services, types of
          work, and top projects.
        </p>
        <div className="footer_input_group">
          <input
            id="footer_input"
            type="text"
            placeholder="+91"
            className="footer_input"
          />
          <button className="footer_button">SEND REQUEST</button>
        </div>
      </div>

      <p className="footer_copyright">
        Copyrights 2024. | All Rights Reserved. | Privacy | Terms | Infringement
      </p>
      <div className="footer_links_arrange_width">
        <div className="footer_links">
          <div className="footer_section_1">
            <h3 className="footer_heading">FASHION</h3>
            <div className="footer_heading_title">
              <p>Apparel & Style</p>
              <p>Trendy Wear</p>
              <p>Clothing & Fashion</p>
              <p>Modern Outfits</p>
              <p>Tech & Gadgets</p>
              <p>Smart Devices</p>
              <p>Electronics Hub</p>
              <p>Digital Trends</p>
              <p>Wearable Tech</p>
              <p>Latest Innovations</p>
              <p>Gadget World</p>
            </div>
          </div>

          <div className="footer_section_2">
            <h3 className="footer_heading">SUPPORT & HELP</h3>

            <div className="footer_heading_title">
              <p>Chat with customer Service</p>
              <p>Chat with Service</p>
              <p>Contact us</p>
              <p>Send feedback</p>
            </div>
          </div>

          <div className="footer_section_3">
            <h3 className="footer_heading">QUICK LINKS</h3>

            <div className="footer_heading_title">
              <p>Chat with customer Service</p>
              <p>Contact us</p>
              <p>Send feedback</p>
              <p>Contact us</p>
            </div>
          </div>

          <div className="footer_section_4">
            <div className="footer_company">
              <div className="footer_company_img">
                <img src={logo} alt="" />
              </div>
              <div className="footer_company_info">
                <p>+91 6205594943</p>
                <p>https://vishalkumar07.me</p>
              </div>
            </div>
          </div>
          <div className="footer_section_5">
            <div className="footer_section_5_top">
              <button className="footer_call_back_button">Call Back</button>
            </div>
            <div className="footer_section_5_bottom">
              <div className="footer_section_5_bottom_telegram"><img src={whatsapp_logo} alt="" /></div>
              <div className="footer_section_5_bottom_telegram"><img src={x_logo} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
