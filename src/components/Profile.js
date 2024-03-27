import React from 'react';
import {
    Container,
    Heading,
    Box,
    Text,
} from '@chakra-ui/react';
import Footer from './Footer';
import Nav from './Navbar';

const Profile = () => {    
    const storedUserData = localStorage.getItem('user');
    const user = storedUserData ? JSON.parse(storedUserData) : null;
    const date = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();

    return (
        <div>
            <Nav />

            <Container maxW="600px" mt="50px" p="20px" borderWidth="1px" borderRadius="5px" boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)" style={{ margin: '0 auto', marginBottom:'150px', marginTop: '150px', height: "400px" }}>
                <Heading textAlign="center" fontSize="28px" mb="20px">User Profile</Heading>
                {user ? (
                    <>
                        <Box mb="20px" >
                            <Text fontSize="18px" fontWeight="bold">Name:</Text>
                            <Text fontSize="16px">{user.name}</Text>
                        </Box>
                        <Box mb="20px" >
                            <Text fontSize="18px" fontWeight="bold">Email:</Text>
                            <Text fontSize="16px">{user.email}</Text>
                        </Box>
                        <Box mb="20px" >
                            <Text fontSize="18px" fontWeight="bold">Date Joined:</Text>
                            <Text fontSize="16px">{date}</Text>
                        </Box>
                    </>
                ) : (
                    <Text fontSize="16px" textAlign="center">No user data found. Please sign up first.</Text>
                )}
            </Container>
            <Footer />
        </div>
    );
};

export default Profile;
