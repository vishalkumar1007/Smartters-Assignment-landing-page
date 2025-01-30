import './ProductCategoryCard.css';
import PropTypes from 'prop-types';

const ProductCategoryCard = ({ProductCardImage='', bgColor='white',title='Shop for kids (Him)'}) => {
  return (
    <div className="category-card" style={{backgroundColor:bgColor}}>
      <div className="image-container">
        <img 
          src={ProductCardImage}
          alt="Young boy in winter jacket"
          className="category-image"
        />
      </div>
      <div className="category-title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};
ProductCategoryCard.propTypes = {
  bgColor: PropTypes.string,
  title: PropTypes.string,
  ProductCardImage: PropTypes.string,
};

export default ProductCategoryCard;