import React, { useState, useEffect } from 'react';
import { Box, Text, Grid, IconButton, Image, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Footer from './Footer';
import Nav from './Navbar';
import NavBar from './NavbarLog';

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const user_mail = localStorage.getItem('email');
  console.log(user_mail);

  const handlePrevSlide = () => {
    setActiveStep((prevStep) => (prevStep === 0 ? carouselImages.length - 1 : prevStep - 1));
  };

  const handleNextSlide = () => {
    setActiveStep((prevStep) => (prevStep === carouselImages.length - 1 ? 0 : prevStep + 1));
  };

  const carouselImages = [
    'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1533478583204-680d4ff74891?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const specialDealsData = [
    {
      id: 1,
      name: 'Organic Fruit Basket',
      image: 'https://images.unsplash.com/photo-1519097000072-e44ffa116485?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'A delightful assortment of fresh, organic fruits sourced from local farms.',
      price: '$29.99',
    },
    {
      id: 2,
      name: 'Superfood Smoothie Kit',
      image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Kickstart your day with our superfood smoothie kit, packed with antioxidants and nutrients.',
      price: '$19.99',
    },
    {
      id: 3,
      name: 'Organic Spice Set',
      image: 'https://images.unsplash.com/photo-1581600140682-d4e68c8cde32?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Elevate your culinary creations with our premium organic spice set, sourced from around the world.',
      price: '$14.99',
    },
    {
      id: 4,
      name: 'Healthy Snack Pack',
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Stay fueled throughout the day with our curated selection of healthy snacks, perfect for on-the-go lifestyles.',
      price: '$9.99',
    },
    {
      id: 5,
      name: 'Gourmet Tea Sampler',
      image: 'https://images.unsplash.com/38/QoR8Bv1S2SEqH6UcSJCA_Tea.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Indulge in a variety of gourmet teas from across the globe with our exclusive sampler pack.',
      price: '$17.99',
    },
  ];


  const productsData = [
    {
      id: 1,
      name: 'Organic Avocado Oil',
      image: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Cold-pressed avocado oil, rich in nutrients and perfect for cooking or skincare.',
      price: '$12.99',
    },
    {
      id: 2,
      name: 'Himalayan Pink Salt',
      image: 'https://images.unsplash.com/photo-1633727783375-750547d0fc21?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Pure, unrefined Himalayan pink salt, packed with essential minerals for a healthier diet.',
      price: '$8.99',
    },
    {
      id: 3,
      name: 'Organic Quinoa',
      image: 'https://plus.unsplash.com/premium_photo-1664476002571-ead0cbfc6d74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Premium organic quinoa, a versatile and nutritious grain for salads, bowls, and more.',
      price: '$5.99',
    },
    {
      id: 4,
      name: 'Raw Honey',
      image: 'https://images.unsplash.com/photo-1550411294-098af68c8c2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Locally sourced raw honey, unpasteurized and full of natural enzymes and antioxidants.',
      price: '$10.49',
    },
    {
      id: 5,
      name: 'Green Tea Leaves',
      image: 'https://plus.unsplash.com/premium_photo-1661594835845-7035de5abb30?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'High-quality green tea leaves, packed with antioxidants for a refreshing and health-boosting beverage.',
      price: '$7.99',
    },
  ];


  return (
    <div>
      {user_mail === '' ? (
        <NavBar />
      ) : (
        <Nav />
      )}
      <Box p={4}>
        <Text pt="60px" fontSize="50px" textAlign="center" fontWeight="bold">
          Welcome to SOIL - Organic Food Grocer
        </Text>
        <hr style={{ width: '600px', margin: 'auto' }} />
        <Grid justifyContent="center">
          <Grid item xs={12} lg={'auto'}>
            <Box position="relative" mt={4} mb={4} display="flex" justifyContent="center" alignItems="center">
              <Box position="relative">
                {carouselImages.map((image, index) => (
                  <Box key={index} display={activeStep === index ? 'block' : 'none'}>
                    <Image src={image} alt={`Carousel Image ${index + 1}`} height="700px" borderRadius="md" />
                  </Box>
                ))}
                <Text
                  position="absolute"
                  textAlign="center"
                  bg="rgba(0, 0, 0, 0.7)"
                  color="#fff"
                  p={4}
                  width="85%"
                  left="50%"
                  top="50%"
                  transform="translate(-50%, -50%)"
                  borderRadius="md"
                >
                  <Text as="h3" fontSize="2xl" fontWeight="bold" mb={2}>
                    SOIL - Organic Food Grocer
                  </Text>
                  <Text fontSize="lg" fontWeight="light">

                    "Welcome to SOIL - your premium destination for organic goodness! At SOIL, we're dedicated to providing the finest selection of organic foods, curated with care to nourish both body and soul. Explore our extensive range of fresh produce and nutritious offerings, handpicked to support a healthy lifestyle. Whether you're seeking wholesome ingredients for your next meal or expert advice on nutrition and small-scale farming, SOIL has you covered. Join us on a journey towards a healthier, more sustainable future. Start exploring now!"
                  </Text>
                </Text>

                <IconButton
                  position="absolute"
                  left={2}
                  top="50%"
                  transform="translateY(-50%)"
                  bg="rgba(0, 0, 0, 0.7)"
                  borderRadius="50%"
                  p={2}
                  _hover={{ bg: 'rgba(0, 0, 0, 0.8)' }}
                  onClick={handlePrevSlide}
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton
                  position="absolute"
                  right={2}
                  top="50%"
                  transform="translateY(-50%)"
                  bg="rgba(0, 0, 0, 0.7)"
                  borderRadius="50%"
                  p={2}
                  _hover={{ bg: 'rgba(0, 0, 0, 0.8)' }}
                  onClick={handleNextSlide}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <hr />

        <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center" style={{ fontSize: '30px' }}>Special Deals</Text>
        <br />
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} sx={{ paddingLeft: '90px' }}>
          {specialDealsData.map((deal) => (
            <Box key={deal.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p="2">
              <Image src={deal.image} alt={deal.name} height="200px" objectFit="cover" width='200px'/>
              <Box p="4">
                <Text fontWeight="bold" fontSize="xl" mb="2">{deal.name}</Text>
                <Text color="gray.600" mb="2">{deal.description}</Text>
                <Text fontWeight="bold" mb="2">{deal.price}</Text>
              </Box>
            </Box>
          ))}
        </Grid>

        <br />
        <hr />
        <Box pt={20} pb={20} bg="#eeeeee" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb={5} style={{ fontSize: 23 }}>
            SOIL - Organic Food Grocer
          </Text>
          <hr style={{ width: '500px', margin: 'auto' }} />
          <Text fontSize="lg" fontWeight="light">

            "Discover the essence of organic living at SOIL - your trusted organic food grocer. Embrace a lifestyle rooted in sustainability and well-being with our handpicked selection of premium organic products. From farm-fresh produce to pantry essentials, each item is thoughtfully sourced to ensure quality and authenticity. Delve into a world of wholesome goodness and elevate your culinary experience with SOIL. Join us in nurturing health, supporting local farmers, and cultivating a greener tomorrow. Experience the difference of truly organic living with SOIL today."
          </Text>
        </Box>
        <hr />

        <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center" style={{ fontSize: '30px' }}>Products</Text>
        <br />
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4} sx={{ paddingLeft: '90px' }}>
          {productsData.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p="2">
              <Image src={product.image} alt={product.name} height="200px" width='200px' objectFit="cover" />
              <Box p="4">
                <Text fontWeight="bold" fontSize="xl" mb="2">{product.name}</Text>
                <Text color="gray.600" mb="2">{product.description}</Text>
                <Text fontWeight="bold" mb="2">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        <br />
      </Box>
      <Footer />
    </div>
  );
};

export default HomePage;

