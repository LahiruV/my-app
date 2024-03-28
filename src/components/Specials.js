import React from 'react';
import {
    Container,
    Heading,
    Box,
    Text,
} from '@chakra-ui/react';
import Footer from './Footer';
import Nav from './Navbar';

const Specials = () => {
    const data = [
        {
            "product": "Organic Apples",
            "price": "$2.99 per pound"
        },
        {
            "product": "Fresh Spinach",
            "price": "$1.49 per bunch"
        },
        {
            "product": "Free-range Eggs",
            "price": "$3.99 per dozen"
        }
    ];
    localStorage.setItem('specials', JSON.stringify(data));
    const storedSpecialsData = localStorage.getItem('specials');
    const specials = storedSpecialsData ? JSON.parse(storedSpecialsData) : [];

    return (
        <div>
            <Nav />
            <Container maxW="600px" mt="50px" p="20px" borderWidth="1px" borderRadius="5px" boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)" style={{ margin: '0 auto', marginBottom: '150px', marginTop: '150px', height: "auto" }}>
                <Heading textAlign="center" fontSize="28px" mb="20px">Specials of the Week</Heading>
                {specials.length > 0 ? (
                    specials.map((special, index) => (
                        <Box key={index} mb="20px" p="20px" borderRadius="5px" bg="#f8f8f8" boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)">
                            <Text fontSize="18px" fontWeight="bold" mb="10px">Product: {special.product}</Text>
                            <Text fontSize="16px">Price: {special.price}</Text>
                        </Box>
                    ))
                ) : (
                    <Text fontSize="16px" textAlign="center">No specials available for this week.</Text>
                )}
            </Container>
            <Footer />
        </div>
    );
};

export default Specials;
