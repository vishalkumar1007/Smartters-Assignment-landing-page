import "./Home.css";
import AutumnBanner from "../../components/AutumnBanner/AutumnBanner";
// import FashionBanner from '../../components/FashionBanner/FashionBanner';
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCategoryCard from "../../components/ProductCategoryCard/ProductCategoryCard";
import CustomizationBanner from "../../components/CustomizationBanner/CustomizationBanner";
import DealsCarousel from "../../components/DiscountCard/DealsCarousel";
import ProductCardImage from "../../assets/card_img_3.jpeg";


// import images 

import CustomizationBannerImage1 from '../../assets/cat_1.jpeg'
import CustomizationBannerImage2 from '../../assets/cat_2.jpeg'
import CustomizationBannerImage3 from '../../assets/cat_3.jpeg'
import CustomizationBannerImage4 from '../../assets/cat_4.jpeg'
import CustomizationBannerImage5 from '../../assets/cat_5.png'
import CustomizationBannerImage6 from '../../assets/cat_6.png'

// catatories images

import ProductCategoryCardImage1 from '../../assets/card_img_1.jpeg'
import ProductCategoryCardImage2 from '../../assets/card_img_8.jpeg'
import ProductCategoryCardImage3 from '../../assets/card_img_3.jpeg'
import ProductCategoryCardImage4 from '../../assets/card_img_6.jpeg'
import ProductCategoryCardImage5 from '../../assets/card_img_4.jpeg'
import ProductCategoryCardImage6 from '../../assets/card_img_7.jpeg'

// import ProductCard image 

import ProductCardImage1 from '../../assets/cloth_1.jpg'
import ProductCardImage2 from '../../assets/cloth_2.jpg'
import ProductCardImage3 from '../../assets/cloth_3.jpg'
import ProductCardImage4 from '../../assets/cloth_4.jpg'
import ProductCardImage5 from '../../assets/cloth_5.jpg'
import ProductCardImage6 from '../../assets/cloth_6.jpg'
import ProductCardImage7 from '../../assets/cloth_7.jpg'
import ProductCardImage8 from '../../assets/cloth_8.jpg'
import ProductCardImage9 from '../../assets/cloth_9.jpg'

// falt off import new born 

import DealsCarouselNewBornImage1 from '../../assets/birth_baby_1.jpg'
import DealsCarouselNewBornImage2 from '../../assets/birth_baby_2.jpg'
import DealsCarouselNewBornImage3 from '../../assets/birth_baby_3.jpg'
import DealsCarouselNewBornImage4 from '../../assets/birth_baby_4.jpg'
import DealsCarouselNewBornImage5 from '../../assets/birth_baby_5.jpg'
import DealsCarouselNewBornImage6 from '../../assets/birth_baby_6.jpg'

// falt off import boys

import DealsCarouselBoysImage1 from '../../assets/boys_cloths_1.jpg'
import DealsCarouselBoysImage2 from '../../assets/boys_cloths_2.jpg'
import DealsCarouselBoysImage3 from '../../assets/boys_cloths_3.jpg'
import DealsCarouselBoysImage4 from '../../assets/boys_cloths_4.jpg'
import DealsCarouselBoysImage5 from '../../assets/boys_cloths_5.jpg'
import DealsCarouselBoysImage6 from '../../assets/boys_cloths_6.jpg'
import DealsCarouselBoysImage8 from '../../assets/boys_cloths_8.jpg'
import DealsCarouselBoysImage9 from '../../assets/boys_cloths_9.jpg'

// falt off import girls

import DealsCarouselGirlsImage1 from '../../assets/girl_cloths_1.jpg'
import DealsCarouselGirlsImage2 from '../../assets/girl_cloth_2.jpg'
import DealsCarouselGirlsImage3 from '../../assets/girl_cloth_3.jpg'
import DealsCarouselGirlsImage4 from '../../assets/girl_cloth_4.jpg'
import DealsCarouselGirlsImage5 from '../../assets/birth_baby_5.jpg'
import DealsCarouselGirlsImage6 from '../../assets/girl_cloth_6.jpg'
import DealsCarouselGirlsImage7 from '../../assets/girl_cloth_7.jpg'
import DealsCarouselGirlsImage8 from '../../assets/girl_cloth_8.jpg'
import DealsCarouselGirlsImage9 from '../../assets/girl_cloth_9.jpg'




const ProductCategoryCardData = [
  {
    id: 1,
    title: "Shop for kids (Him)",
    bgColor: "#FF69B4", // HotPink
    image: ProductCategoryCardImage1,
  },
  {
    id: 2,
    title: "Shop for kids (Her)",
    bgColor: "#FFD700", // Gold
    image: ProductCategoryCardImage2,
  },
  {
    id: 3,
    title: "Shop for new born",
    bgColor: "#98FB98", // PaleGreen
    image: ProductCategoryCardImage3,
  },
  {
    id: 4,
    title: "Shop for above 10y",
    bgColor: "#20B2AA", // LightSeaGreen
    image: ProductCategoryCardImage4,
  },
  {
    id: 5,
    title: "Shop for male",
    bgColor: "#6495ED", // CornflowerBlue
    image: ProductCategoryCardImage5,
  },
  {
    id: 6,
    title: "Shop for female",
    bgColor: "#FF4500", // OrangeRed
    image: ProductCategoryCardImage6,
  },
];

const ProductCardData = [
    {
      id: 1,
      productCardImage: ProductCardImage1,
      discountPercent: "25",
      productTitle: "Feather A-line Casual Party Wear Dress ...",
      productPrice: "1230",
      varientAvailableNo: "11",
      ProductRating: "4.5",
      Review: "51",
      bgColor: "#FF69B4", // HotPink
    },
    {
      id: 2,
      productCardImage: ProductCardImage2,
      discountPercent: "15",
      productTitle: "Elegant Floral Maxi Dress for Women ...",
      productPrice: "1899",
      varientAvailableNo: "7",
      ProductRating: "4.2",
      Review: "76",
      bgColor: "#FFD700", // Gold
    },
    {
      id: 3,
      productCardImage: ProductCardImage3,
      discountPercent: "30",
      productTitle: "Casual Cotton Summer Dress with Pockets ...",
      productPrice: "950",
      varientAvailableNo: "5",
      ProductRating: "4.7",
      Review: "120",
      bgColor: "#98FB98", // PaleGreen
    },
    {
      id: 4,
      productCardImage: ProductCardImage4,
      discountPercent: "20",
      productTitle: "Chic Polka Dot Evening Dress for Party Time ...",
      productPrice: "2150",
      varientAvailableNo: "9",
      ProductRating: "4.3",
      Review: "89",
      bgColor: "#20B2AA", // LightSeaGreen
    },
    {
      id: 5,
      productCardImage: ProductCardImage5,
      discountPercent: "10",
      productTitle: "Bohemian Ruffled Mini Dress for the Girls ...",
      productPrice: "1725",
      varientAvailableNo: "6",
      ProductRating: "4.6",
      Review: "34",
      bgColor: "#6495ED", // CornflowerBlue
    },
    {
      id: 6,
      productCardImage: ProductCardImage6,
      discountPercent: "35",
      productTitle: "Elegant Lace Wedding Dress with a Sleeves ...",
      productPrice: "2999",
      varientAvailableNo: "4",
      ProductRating: "4.8",
      Review: "210",
      bgColor: "#FF4500", // OrangeRed
    },
    {
        id: 7,
        productCardImage: ProductCardImage7,
        discountPercent: "18",
        productTitle: "Stylish Denim Jacket for Casual Wear ...",
        productPrice: "1450",
        varientAvailableNo: "8",
        ProductRating: "4.4",
        Review: "67",
        bgColor: "#FF6347", // Tomato
    },
    {
        id: 8,
        productCardImage: ProductCardImage8,
        discountPercent: "22",
        productTitle: "Classic Striped Cotton Shirt for Men ...",
        productPrice: "1100",
        varientAvailableNo: "10",
        ProductRating: "4.3",
        Review: "98",
        bgColor: "#8A2BE2", // BlueViolet
    },
    {
        id: 9,
        productCardImage: ProductCardImage9,
        discountPercent: "28",
        productTitle: "Trendy Oversized Hoodie for Winter Look ...",
        productPrice: "1750",
        varientAvailableNo: "12",
        ProductRating: "4.6",
        Review: "143",
        bgColor: "#32CD32", // LimeGreen
    }
    
  ];

const CustomizationBannerData = [
  {
    id: 1,
    CustomizationBannerImage: CustomizationBannerImage1,
    title: "FOR CUSTOMIZATION",
  },
  {
    id: 2,
    CustomizationBannerImage: CustomizationBannerImage2,
    title: "PERSONALIZED FASHION",
  },
  {
    id: 3,
    CustomizationBannerImage: CustomizationBannerImage3,
    title: "TAILORED JUST FOR YOU",
  },
  {
    id: 4,
    CustomizationBannerImage: CustomizationBannerImage4,
    title: "DESIGN YOUR OWN STYLE",
  },
  {
    id: 5,
    CustomizationBannerImage: CustomizationBannerImage5,
    title: "EXCLUSIVE CUSTOM WEAR",
  },
  {
    id: 6,
    CustomizationBannerImage: CustomizationBannerImage6,
    title: "CRAFTED TO PERFECTION",
  },
];


const DealsCarouselNewBornData = [
    {
      id: 1,
      title: 'Summer clothes',
      price: '₹11000',
      image: DealsCarouselNewBornImage1
    },
    {
      id: 2,
      title: 'Party wear',
      price: '₹11000',
      image: DealsCarouselNewBornImage2
    },
    {
      id: 3,
      title: 'Jumpers',
      price: '₹11000',
      image: DealsCarouselNewBornImage3
    },
    {
      id: 4,
      title: 'Night suit',
      price: '₹11000',
      image: DealsCarouselNewBornImage4
    },
    {
      id: 5,
      title: 'Burp clothes',
      price: '₹11000',
      image: DealsCarouselNewBornImage5
    },
    {
      id: 6,
      title: 'Casual Dress',
      price: '₹2000',
      image: DealsCarouselNewBornImage6
    },
    {
      id: 7,
      title: 'Jumpers',
      price: '₹6000',
      image: ProductCategoryCardImage2
    },
    {
      id: 8,
      title: 'Party wear',
      price: '₹4100',
      image: ProductCategoryCardImage6
    }
  ];


  const DealsCarouselBoysData = [
    {
      id: 1,
      title: 'Casual Shorts',
      price: '₹9899',
      image: DealsCarouselBoysImage9
    },
    {
      id: 2,
      title: 'Denim Jackets',
      price: '₹1599',
      image: DealsCarouselBoysImage2
    },
    {
      id: 3,
      title: 'Casual Shorts',
      price: '₹749',
      image: DealsCarouselBoysImage3
    },
    {
      id: 4,
      title: 'Hooded Sweatshirts',
      price: '₹1299',
      image: DealsCarouselBoysImage4
    },
    {
      id: 5,
      title: 'Cargo Pants',
      price: '₹1399',
      image: DealsCarouselBoysImage5
    },
    {
      id: 6,
      title: 'Sports Shoes',
      price: '₹1559',
      image: DealsCarouselBoysImage6
    },
    {
      id: 7,
      title: 'formal',
      price: '₹2399',
      image: DealsCarouselBoysImage8
    },
    {
      id: 8,
      title: 'graphic tees',
      price: '₹1999',
      image: DealsCarouselBoysImage1
    }
];

const DealsCarouselGirlsData = [
    {
      id: 1,
      title: 'Floral Frocks',
      price: '₹999',
      image: DealsCarouselGirlsImage1
    },
    {
      id: 2,
      title: 'Denim Skirts',
      price: '₹1199',
      image: DealsCarouselGirlsImage2
    },
    {
      id: 3,
      title: 'Casual Tops',
      price: '₹799',
      image: DealsCarouselGirlsImage3
    },
    {
      id: 4,
      title: 'Party Gowns',
      price: '₹2499',
      image: DealsCarouselGirlsImage4
    },
    {
      id: 5,
      title: 'Leggings Combo',
      price: '₹999',
      image: DealsCarouselGirlsImage5
    },
    {
      id: 6,
      title: 'Sneakers',
      price: '₹1676',
      image: DealsCarouselGirlsImage6
    },
    {
      id: 7,
      title: 'Ballet Flats',
      price: '₹1499',
      image: DealsCarouselGirlsImage7
    },
    {
      id: 8,
      title: 'Cutie',
      price: '₹99',
      image: DealsCarouselGirlsImage8
    },
    {
      id: 9,
      title: 'Billowy',
      price: '₹499',
      image: DealsCarouselGirlsImage9
    }
];


const Home = () => {
  return (
    <div className="Home_main">
      <div className="Home_main_offers_section">
        <AutumnBanner />
      </div>
      <div className="Home_main_catagories">
        <div className="Home_main_catagories_tile">
          <p>CATEGORIES</p>
        </div>
        <div className="Home_main_catagories_card_list">
          {ProductCategoryCardData ? (
            ProductCategoryCardData.map((item) => (
              <ProductCategoryCard
                key={item.id}
                ProductCardImage={item.image}
                bgColor={item.bgColor}
                title={item.title}
              />
            ))
          ) : (
            <ProductCategoryCard
              ProductCardImage={ProductCardImage}
              bgColor="pink"
              title="Shop for kids (Him)"
            />
          )}
        </div>
      </div>
      <div className="Home_main_new_and_trending">
        <div className="Home_main_new_and_trending_title_div">
          <p id="title">NEW & TRENDING</p>
          <p id="view">View all</p>
        </div>
        <div className="Home_main_new_and_trending_card_list">
          {ProductCardData ? (
            ProductCardData.map((item) => (
              <ProductCard
                key={item.id}
                productCardImage={item.productCardImage}
                discountPercent={item.discountPercent}
                productTitle={item.productTitle}
                productPrice={item.productPrice}
                varientAvailableNo={item.varientAvailableNo}
                ProductRating={item.ProductRating}
                Review={item.Review}
              />
            ))
          ) : (
            <ProductCard
              productCardImage={ProductCardImage}
              discountPercent="25"
              productTitle="Feather aline casual party wear dress..."
              productPrice="1230"
              varientAvailableNo="11"
              ProductRating="4.5"
              Review="51"
            />
          )}
        </div>
      </div>
      <div className="Home_main_shop_now">
        <div className="Home_main_shop_now_arrange_width">
          {CustomizationBannerData ? (
            CustomizationBannerData.map((item) => (
              <CustomizationBanner
                key={item.id}
                CustomizationBannerImage={item.CustomizationBannerImage}
                title={item.title}
              />
            ))
          ) : (
            <CustomizationBanner
              CustomizationBannerImage={ProductCardImage}
              title="FOR CUSTOMIZATION"
            />
          )}
        </div>
      </div>
      <div className="Home_main_flat_50_off">
        <DealsCarousel title='DEALS ON NEW BORN CLOTHES' discount='75' data={DealsCarouselNewBornData}/>
        <DealsCarousel title='DEALS ON BOYS CLOTHES' discount='35' data={DealsCarouselBoysData}/>
        <DealsCarousel title='DEALS ON GIRLS CLOTHES' discount='85' data={DealsCarouselGirlsData}/>
      </div>
    </div>
  );
};

export default Home;
