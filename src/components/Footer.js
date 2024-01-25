import React from 'react';
import { Box, Flex, Heading, Text, Link, IconButton, Icon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
 return (
   <Box bgColor="#2ecc71" color="white" p={6} mt={8}>
     <Flex align="center" justify="space-between" maxW="1200px" margin="auto" wrap="wrap">
       {/* Contact Information */}
       <Box flexBasis={{ base: '100%', md: '30%' }} mb={{ base: 8, md: 0 }}>
         <Heading fontSize="lg" mb={2}>
           Contact Us
         </Heading>
         <Text>Email: gymapp@gmail.com</Text>
         <Text>Phone: +2541234567</Text>
       </Box>


       {/* Social Media Handles */}
       <Box flexBasis={{ base: '100%', md: '30%' }} mb={{ base: 8, md: 0 }}>
         <Heading fontSize="lg" mb={2}>
           Follow Us
         </Heading>
         <Flex>
           <Link href="#" isExternal mx={2}>
             <IconButton icon={<Icon as={FaFacebook} />} colorScheme="white" />
           </Link>
           <Link href="#" isExternal mx={2}>
             <IconButton icon={<Icon as={FaInstagram} />} colorScheme="white" />
           </Link>
           <Link href="#" isExternal mx={2}>
             <IconButton icon={<Icon as={FaTwitter} />} colorScheme="white" />
           </Link>
           <Link href="#" isExternal mx={2}>
             <IconButton icon={<Icon as={FaLinkedin} />} colorScheme="white" />
           </Link>
         </Flex>
       </Box>


       {/* About Section */}
       <Box flexBasis={{ base: '100%', md: '30%' }}>
         <Heading fontSize="lg" mb={2}>
           About Us
         </Heading>
         <Text>
           Welcome to GymApp, your go-to destination for a healthier and stronger lifestyle! At GymApp, we are committed to providing you with the tools and support you need to achieve your fitness goals and embark on a transformative fitness journey.
         </Text>
       </Box>
     </Flex>

   </Box>
 );
};


export default Footer;