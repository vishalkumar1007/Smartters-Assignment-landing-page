import './DealsCarousel.css';
import PropTypes from 'prop-types';

const DealsCarousel = ({title,discount,data}) => {
  console.log(data);

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const scrollLeft = () => {
    document.getElementById('carousel').scrollLeft -= 280;
  };

  const scrollRight = () => {
    document.getElementById('carousel').scrollLeft += 280;
  };

  return (
    <div className="deals-section">
      <div className="deals-header">
        <h2>{title}</h2>
        <h1>Flat {discount}% Off</h1>
        <button className="view-all">View all</button>
      </div>
      
      <div className="carousel-container">
        <button className="nav-button prev" onClick={scrollLeft}>
          ‹
        </button>
        
        
        <div className="carousel" id="carousel">
          {data.map((category) => (
            <div key={category.id} className="category-card">
              <div className="card-image">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="card-content">
                <h3>{category.title}</h3>
                <p>Starts from {category.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav-button next" onClick={scrollRight}>
          ›
        </button>
      </div>
    </div>
  );
};
DealsCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string,
  discount: PropTypes.string,
};

export default DealsCarousel;