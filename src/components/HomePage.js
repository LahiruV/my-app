import React from 'react';
import { Container, Heading, Text } from '@chakra-ui/react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>      
      <Navbar />
      <Container maxW="container.lg" my={8} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>Welcome to SOIL - Organic Food Grocer</Heading>
        <Text fontSize="xl" color="blue.500">Explore the freshest organic produce straight from local farms.</Text>
        <Text fontSize="xl" mt={4}>Discover our wide range of organic products and start living a healthier lifestyle today!</Text>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
