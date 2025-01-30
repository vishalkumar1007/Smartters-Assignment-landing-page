import './AutumnBanner.css';
import bannerImage from '../../assets/card_img_1.jpeg';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const AutumnBanner = () => {
  return (
    <div className="autumn-banner">
      <div className="banner-content">
        <div className="offer-text">
          <h1>Up to</h1>
          <h2>30 % Off</h2>
        </div>
        <div className="banner-info">
          <p>ON ALL AUTUMN FASHION WEAR</p>
          {/* <button className="shop-button">Shop now</button> */}
          <div className="AutumnBanner_shop_button">
            <Button variant="contained" style={{backgroundColor:'#a8865c'}}>Shop now</Button>
          </div>
        </div>
      </div>
      <div className="banner-image">
        <div className="banner-image-container">
            <img 
              src={bannerImage} 
            alt="Children wearing autumn fashion" 
            className="fashion-image"
            />
        </div>
      </div>
    </div>
  );
};

export default AutumnBanner;