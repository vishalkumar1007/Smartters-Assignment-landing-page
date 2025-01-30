import "./ProductCard.css";
// import cardImage_1 from "../../assets/card_img_1.jpeg";
import Button from "@mui/material/Button";
import PropTypes from "prop-types"; 

const ProductCard = ({productCardImage ='',discountPercent='0' ,productTitle='title' , productPrice='0' , varientAvailableNo = '0' , ProductRating='0.0' , Review='0'}) => {
  return (
    <div className="product_card">
      <div className="discount_badge">{discountPercent}% off</div>
      <div className="product_image">
        <img
          src={productCardImage}
          alt="Baby wearing hoodie"
          className="main_image"
        />
      </div>
      {/* <button className="add_to_cart_btn">ADD TO CART</button> */}
      {/* <Stack direction="row" spacing={2}> */}

      {/* </Stack> */}

      <div className="product_info">
        <h3 className="product_title">
          {productTitle}
        </h3>
        <div className="price_section">
          <span className="price_label">From:</span>
          <span className="price_amount">₹{productPrice}</span>
          <p className="variant_available_title">{varientAvailableNo} varient available</p>
        </div>
        <div className="product_meta">
          <div className="rating">
            <span className="stars">⭐</span>
            <span className="rating_count">({ProductRating}/5)</span>
          </div>
          <span>|</span>
          <div className="reviews">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#0dd910"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
            </svg>
            <p>{Review} Reviews</p>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        className="add_to_cart_btn"
        style={{
          backgroundColor: "#f3b006",
          boxShadow: "white",
          borderRadius: "0px",
        }}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

ProductCard.propTypes = {
  productCardImage: PropTypes.string,
  discountPercent: PropTypes.string,
  productTitle: PropTypes.string,
  productPrice: PropTypes.string,
  varientAvailableNo: PropTypes.string,
  ProductRating: PropTypes.string,
  Review: PropTypes.string,
};

export default ProductCard;
