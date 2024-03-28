import React, { useState } from 'react';
import {
    Container,
    Heading,
    Box,
    Text,
    Button,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react';
import Footer from './Footer';
import Nav from './Navbar';

const Profile = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('users')));
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedName, setEditedName] = useState(user ? user.name : '');
    const [editedEmail, setEditedEmail] = useState(user ? user.email : '');

    const handleEditClick = () => {
        setIsEditModalOpen(true);
    };

    const handleEditSubmit = () => {
        setUser({ ...user, name: editedName, email: editedEmail });
        localStorage.setItem('users', JSON.stringify({ ...user, name: editedName, email: editedEmail }));
        setIsEditModalOpen(false);
    };

    const handleDeleteClick = () => {
        localStorage.removeItem('users');
        setUser(null);
    };

    const date = new Date().toLocaleDateString();

    return (
        <div>
            <Nav />
            {isEditModalOpen == false ? (
            <Container maxW="600px" mt="50px" p="20px" borderWidth="1px" borderRadius="5px" boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)" style={{ margin: '0 auto', marginBottom: '150px', marginTop: '150px', height: "400px" }}>
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
                        <Box display="flex" justifyContent="center">
                            <Button onClick={handleEditClick} size="md" mr="10px">Edit</Button>
                            <Button onClick={handleDeleteClick} size="md" colorScheme="red">Delete</Button>
                        </Box>
                    </>
                ) : (
                    <Text fontSize="16px" textAlign="center">No user data found. Please sign up first.</Text>
                )}
            </Container>
            ):(
            <Container maxW="600px" mt="50px" p="20px" borderWidth="1px" borderRadius="5px" boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)" style={{ margin: '0 auto', marginBottom: '150px', marginTop: '150px', height: "400px" }}>
                <Heading textAlign="center" fontSize="28px" mb="20px">Edit Profile</Heading>
                <form onSubmit={handleEditSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box mb="20px" >
                        <FormControl>
                            <FormLabel fontSize="18px">Name</FormLabel>
                            <Input type="text" name="name" value={editedName} onChange={(e) => setEditedName(e.target.value)} sx={{ width: '300px' }} />
                        </FormControl>
                    </Box>
                    <Box mb="20px">
                        <FormControl>
                            <FormLabel fontSize="18px">Email Address</FormLabel>
                            <Input type="email" name="email" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} sx={{ width: '300px' }} />
                        </FormControl>
                    </Box>
                    <Box display="flex" justifyContent="center">
                    <Button type="submit" size="lg" bg="#007bff" color="#fff" borderRadius="5px" _hover={{ bg: '#0056b3' }} sx={{ width: '100px', height: '40px' }}>Edit</Button>
                        <Button ml="10px" onClick={() => setIsEditModalOpen(false)} size="md" variant="outline"  bg="#007bff" color="#fff" borderRadius="5px" _hover={{ bg: '#0056b3' }} sx={{ width: '100px', height: '40px' }}>Cancel</Button>
                    </Box>
                    
                </form>
            </Container>
            )};
            <Footer />
        </div>
    );
};

export default Profile;
