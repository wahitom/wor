import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  Box,
  Flex,
  Image,
  Spacer,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";

import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const linkStyles = {
    padding: "10px",
    fontSize: "18px",
  };

  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Box bg="blue.200" color="white" p="4" style={{ height: "20vh" }}>
      <Flex align="center">
        <Image
          src="https://images.template.net/wp-content/uploads/2014/09/Zenith-Fitness-Logo.jpg"
          alt="Gym Logo"
          boxSize="40px"
          mr="4"
        />
        <Text fontSize="lg" fontWeight="bold" color="white">
          Vitality Gym
        </Text>
        <Spacer />
        {isAuthenticated && (
          <Box display={{ base: "none", md: "block" }}>
            <Link to="/" style={linkStyles}>
              Home
            </Link>
            <Link to="/workouts" style={linkStyles}>
              Workouts
            </Link>
            <Link to="/reviews" style={linkStyles}>
              Reviews
            </Link>
            <Link to="/announcements" style={linkStyles}>
              Announcements
            </Link>
          </Box>
        )}
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          size="sm"
          ml={2}
          style={linkStyles}
        />
        {isAuthenticated ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="black"
              color="white"
            >
              <Avatar size="sm" name="User" />
            </MenuButton>
            <MenuList color="white">
              <Link to="/profile">
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuItem onClick={logout}>
                <Button variant="link" color="red.500">
                  <Link onClick={logout}> Logout</Link>
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Box display={{ base: "none", md: "block" }}>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              <Link to={"/login"}>Login</Link>
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              <Link to={"/Signup"}>create account</Link>
            </Button>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
