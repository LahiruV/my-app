import React, { useState, useEffect } from 'react';
import { Box, Text, Grid, IconButton, Image, Button } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Footer from './Footer';
import Nav from './Navbar';

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handlePrevSlide = () => {
    setActiveStep((prevStep) => (prevStep === 0 ? carouselImages.length - 1 : prevStep - 1));
  };

  const handleNextSlide = () => {
    setActiveStep((prevStep) => (prevStep === carouselImages.length - 1 ? 0 : prevStep + 1));
  };

  const carouselImages = [
    'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const specialDealsData = [
    {
      id: 1,
      name: 'Special Deal 1',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Special Deal 1',
      price: '$19.99',
    },
    {
      id: 2,
      name: 'Special Deal 2',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Special Deal 2',
      price: '$24.99',
    },
    // Add more special deals as needed
  ];

  const productsData = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Product 1',
      price: '$9.99',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      description: 'Description of Product 2',
      price: '$14.99',
    },
    // Add more products as needed
  ];


  return (
    <div>
      <Nav />
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
                    Welcome to SOIL - Organic Food Grocer
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

        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} sx={{ paddingLeft: '90px' }}>
          {specialDealsData.map((deal) => (
            <Box key={deal.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p="2">
              <Image src={deal.image} alt={deal.name} height="200px" objectFit="cover" />
              <Box p="4">
                <Text fontWeight="bold" fontSize="xl" mb="2">{deal.name}</Text>
                <Text color="gray.600" mb="2">{deal.description}</Text>
                <Text fontWeight="bold" mb="2">{deal.price}</Text>
              </Box>
            </Box>
          ))}
        </Grid>


        <hr />
        <Box pt={20} pb={20} bg="#eeeeee" textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb={2}>
            SOIL - Organic Food Grocer
          </Text>
          <hr style={{ width: '500px', margin: 'auto' }} />
          <Text fontSize="lg" fontWeight="light">
            SOIL - Organic Food Grocer
          </Text>
        </Box>
        <hr />

        <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center" style={{ fontSize: '30px' }}>Products</Text>

        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={4} sx={{ paddingLeft: '90px' }}>
          {productsData.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" p="2">
              <Image src={product.image} alt={product.name} height="200px" objectFit="cover" />
              <Box p="4">
                <Text fontWeight="bold" fontSize="xl" mb="2">{product.name}</Text>
                <Text color="gray.600" mb="2">{product.description}</Text>
                <Text fontWeight="bold" mb="2">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </Grid>

      </Box>
      <Footer />
    </div>
  );
};

export default HomePage;

