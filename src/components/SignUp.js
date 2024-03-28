import { useState } from 'react';
import {
    Container,
    Heading,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Link,
    Text
} from '@chakra-ui/react';
import Footer from './Footer';
import Nav from './NavbarLog';
import Swal from 'sweetalert2';
import { Link as RouterLink } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form validation
        if (!formData.name || !formData.email || !formData.password) {
            showError('Please fill in all fields.');
            return;
        }
        // Perform email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            showError('Please enter a valid email address.');
            return;
        }
        // Perform password strength validation (e.g., at least 8 characters)
        if (formData.password.length < 8) {
            showError('Password must be at least 8 characters long.');
            return;
        }
        // Save user details in localStorage
        localStorage.setItem('users', JSON.stringify(formData));
        showSuccess('Registration successful');
        // Clear form fields
        setFormData({ name: '', email: '', password: '' });
    };

    const showError = (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
        });
    };

    const showSuccess = (message) => {
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: message,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <Nav />

            <Container maxW="600px" mt="50px" p="20px" borderWidth="1px" borderRadius="5px" boxShadow="0 2px 5px rgba(0, 0, 0, 0.1)" style={{ margin: '0 auto', marginBottom:'150px', marginTop: '150px', height: "400px" }}>
                <Heading textAlign="center" fontSize="28px" mb="20px">Sign Up</Heading>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box mb="20px" >
                        <FormControl>
                            <FormLabel fontSize="18px">Name</FormLabel>
                            <Input type="text" name="name" value={formData.name} onChange={handleChange} sx={{ width: '300px' }} />
                        </FormControl>
                    </Box>
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
                    <Button type="submit" size="lg" bg="#007bff" color="#fff" borderRadius="5px" _hover={{ bg: '#0056b3' }} sx={{ width: '100px', height: '40px' }}>Sign Up</Button>
                </form>
                <Box mt="20px" textAlign="center">
                    <Text>
                        Already have an account?{' '}
                        <Link as={RouterLink} to="/signin" color="#007bff" fontWeight="bold">
                            Sign in here.
                        </Link>
                    </Text>
                </Box>
            </Container>
            <Footer />
        </div>
    );
};

export default SignUp;
