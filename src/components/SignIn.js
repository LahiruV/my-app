import React from 'react';
import {
    Container,
    Heading,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
} from '@chakra-ui/react';
import Footer from './Footer';
import Nav from './NavbarLog';
import Swal from 'sweetalert2';
import { Link as RouterLink } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });
    localStorage.setItem('profiles', JSON.stringify([]));


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();    
        const storedData = localStorage.getItem('users');
        if (!storedData) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No users found. Please sign up first.',
            });
            return;
        }
        let users = [];
        try {
            users = JSON.parse(storedData);
            localStorage.setItem('email', formData.email);
            window.location.href = '/';
        } catch (error) {
            console.error('Error parsing user data:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error parsing user data. Please try again.',
            });
            return;
        }        
        let isUserFound = false;

        const user = users;
        if (user.email === formData.email && user.password === formData.password) {
            isUserFound = true;
        }

        if (isUserFound) {
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Login successful.',
            });            
            setFormData({ email: '', password: '' });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid email or password.',
            });
        }
    };

    return (
        <div>
            <Nav />

            <Container maxW="600px" mt="50px" p="20px" borderWidth="1px" borderRadius="5px" boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)" style={{ margin: '0 auto', marginBottom: '150px', marginTop: '150px', height: "350px" }}>
                <Heading textAlign="center" fontSize="28px" mb="20px">Sign In</Heading>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box mb="20px">
                        <FormControl>
                            <FormLabel fontSize="18px">Email Address</FormLabel>
                            <Input type="email" name="email" value={formData.email} onChange={handleChange} sx={{ width: '300px' }} />
                        </FormControl>
                    </Box>
                    <Box mb="20px">
                        <FormControl>
                            <FormLabel fontSize="18px">Password</FormLabel>
                            <Input type="password" name="password" value={formData.password} onChange={handleChange} sx={{ width: '300px' }} />
                        </FormControl>
                    </Box>
                    <Button type="submit" size="lg" bg="#007bff" color="#fff" borderRadius="5px" _hover={{ bg: '#0056b3' }} sx={{ width: '100px', height: '40px' }}>Sign In</Button>
                </form>
                <Box mt="20px" textAlign="center">
                    If you don't have an account, <Link as={RouterLink} to="/signup" color="#007bff" fontWeight="bold">Sign up here.
                    </Link>
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default SignIn;
