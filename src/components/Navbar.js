import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.setItem('email', '');
    window.location.href = '/';
  };

  return (
    <Flex as="nav" align="center" justify="space-between" bg="#212121" p="4">
      <Link as={RouterLink} to="/" fontSize="2xl" fontWeight="bold" color="#FFA500" textDecoration="none">
        SOIL - Organic Food Grocer
      </Link>
      <Flex align="center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Specials">Specials</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
        <NavLink to="/SmallScaleFarmingInfo">Small Scale Farming Info</NavLink>
        <NavLink to="/DietFeature">DietFeature</NavLink>
        <NavLink to="/Profile">Profile</NavLink>
        <NavLink onClick={handleLogout}>Logout</NavLink>        
      </Flex>
    </Flex>
  );
};

const NavLink = ({ to, children, onClick }) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      color="#fff"
      mx="1rem"
      textDecoration="none"
      onClick={onClick} 
    >
      <Text fontSize="lg">{children}</Text>
    </Link>
  );
};

export default Navbar;
