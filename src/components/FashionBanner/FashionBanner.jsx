import bannerImage from '../../assets/card_img_1.jpeg';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components
const BannerContainer = styled(Box)(() => ({
  width: '100%',
  height: '300px',
  background: '#ece7e1',
  display: 'flex',
  position: 'relative',
  justifyContent:'center',
  alignItems:'center',
  overflow: 'hidden',
}));

const ContentSection = styled(Box)(({ theme }) => ({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
}));

const ImageSection = styled(Box)(() => ({
  flex: '1',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const ShopButton = styled(Button)(() => ({
  backgroundColor: '#C4A484',
  color: 'white',
  padding: '8px 24px',
  borderRadius: '25px',
  textTransform: 'none',
  maxWidth: '150px',
  '&:hover': {
    backgroundColor: '#B08968',
  },
}));

const DiscountText = styled(Typography)(() => ({
  color: '#6B4423',
  fontFamily: 'serif',
  fontWeight: 500,
  fontSize: '2.5rem',
}));

const SubheadingText = styled(Typography)(({ theme }) => ({
  color: '#6B4423',
  letterSpacing: '1px',
  marginBottom: theme.spacing(2),
}));

const FashionBanner = () => {
  return (
    <BannerContainer>
      <Container maxWidth="xl" sx={{ display: 'flex', padding: 0 }}>
        <ContentSection>
          <DiscountText variant="h2">
            Up to<br />30% Off
          </DiscountText>
          <SubheadingText variant="h6">
            ON ALL AUTUMN FASHION WEAR
          </SubheadingText>
          <ShopButton variant="contained">
            Shop now
          </ShopButton>
        </ContentSection>
        <ImageSection>
          <img 
            src={bannerImage}
            alt="Children in autumn fashion wear"
          />
        </ImageSection>
      </Container>
    </BannerContainer>
  );
};

export default FashionBanner;