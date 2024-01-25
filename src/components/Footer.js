import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// Footer component containing contact information, social media handles, and about section
const Footer = () => {
  return (
    <Box bg="blue.200" color="white" p={6} mt={8}>
      <Flex
        align="center"
        justify="space-between"
        maxW="1200px"
        margin="auto"
        wrap="wrap"
      >
        {/* Contact Information */}
        <Box flexBasis={{ base: "100%", md: "30%" }} mb={{ base: 8, md: 0 }}>
          <Heading fontSize="lg" mb={2}>
            Contact Us
          </Heading>
          <Text>Email: vitalitygym@gmail.com</Text>
          <Text>Phone: +2541234567</Text>
          <Text>All rights preserved @copyright 2024 Vitality Gym</Text>
        </Box>

        {/* Social Media Handles */}
        <Box flexBasis={{ base: "100%", md: "30%" }} mb={{ base: 8, md: 0 }}>
          <Heading fontSize="lg" mb={2}>
            Follow Us
          </Heading>
          <Flex>
            <Link href="#" isExternal mx={2}>
              <IconButton icon={<Icon as={FaFacebook} />} colorScheme="white" />
            </Link>
            <Link href="#" isExternal mx={2}>
              <IconButton
                icon={<Icon as={FaInstagram} />}
                colorScheme="white"
              />
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
        <Box flexBasis={{ base: "100%", md: "30%" }}>
          <Heading fontSize="lg" mb={2}>
            About Us
          </Heading>
          <Text></Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
