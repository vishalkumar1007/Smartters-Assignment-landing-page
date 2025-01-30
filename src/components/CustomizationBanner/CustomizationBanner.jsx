import './CustomizationBanner.css';
// import backgroundImage from '../../assets/card_img_4.jpeg'
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const CustomizationBanner = ({CustomizationBannerImage='',title='title'}) => {
  return (
    <div 
      className="banner-container"
      style={{ 
        backgroundImage: `url(${CustomizationBannerImage})` ,
      }}
    >
      <div className="banner-overlay">
        {/* <h2 className="banner-title">FOR CUSTOMIZATION</h2> */}
        <h2 className="banner-title">{title}</h2>
        <Button
        variant="contained"
        className="CustomizationBanner-shop-button"
        style={{
          backgroundColor: "white",
          boxShadow: "white",
          borderRadius: "50px",
          color: "black",
          fontSize:'12px'
        }}
      >
        ADD TO CART
      </Button>
      </div>
    </div>
  );
};

CustomizationBanner.propTypes = {
  CustomizationBannerImage: PropTypes.string,
  title: PropTypes.string,
}

export default CustomizationBanner;