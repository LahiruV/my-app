import React from 'react';
import { Box, Text, Flex, IconButton, Link } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { LocationOn as LocationIcon } from '@material-ui/icons';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon } from '@material-ui/icons';

const Footer = () => {
  return (
    <Box bg="blue.500" py={6} color="white" textAlign="center">
      <Text fontSize="lg" mb={4}>© 2024 SOIL - All rights reserved</Text>
      <Flex justify="center" align="center" flexWrap="wrap">
        <Box flexBasis={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'left' }} mb={{ base: 4, md: 0 }}>
          <Text fontSize="md">Contact Us:</Text>
          <Flex align="center" mt={2}>
            <LocationIcon mr={2} />
            <Text fontSize="md">123 Organic Street, City, Country</Text>
          </Flex>
          <Flex align="center" mt={2}>
            <EmailIcon mr={2} />
            <Link href="mailto:info@example.com" fontSize="md">info@example.com</Link>
          </Flex>
          <Flex align="center" mt={2}>
            <PhoneIcon mr={2} />
            <Link href="tel:+1234567890" fontSize="md">+1 (234) 567-890</Link>
          </Flex>
        </Box>
        <Box flexBasis={{ base: '100%', md: '50%' }} textAlign={{ base: 'center', md: 'right' }}>
          <Text fontSize="md">Follow Us:</Text>
          <Flex justify={{ base: 'center', md: 'flex-end' }} mt={2}>
            <IconButton aria-label="Facebook" icon={<FacebookIcon />} color="white" bg="transparent" _hover={{ color: 'blue.300' }} />
            <IconButton aria-label="Twitter" icon={<TwitterIcon />} color="white" bg="transparent" _hover={{ color: 'blue.300' }} />
            <IconButton aria-label="Instagram" icon={<InstagramIcon />} color="white" bg="transparent" _hover={{ color: 'blue.300' }} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
