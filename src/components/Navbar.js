import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  Flex,
  Image,
  Spacer,
  Button,
  Avatar,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";

import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

// Access color mode and toggle function from Chakra UI
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const linkStyles = {
    padding: "10px",
  };

  // here we check if a user is signed in using the authprovider
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <Flex p="4" bg="blue.200" color="white">
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
      {isAuthenticated ? (
        <>
          <Link to="/" style={linkStyles}>
            Home
          </Link>
          <Link to="/workouts" style={linkStyles}>
            Workouts
          </Link>
          <Link to="/announcements" style={linkStyles}>
            Announcements
          </Link>
          <Link to="/reviews" style={linkStyles}>
            Reviews
          </Link>
          <Spacer />
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            size="sm"
            ml={2}
            style={linkStyles}
          />
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
                  Logout
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </>
      ) : (
          
          // Display Login Button if not authenticated
        <Button sx={{ my: 2, color: "black", display: "block" }}>
          <Link to={"/login "}>Login</Link>
        </Button>
      )}
    </Flex>
  );
};

export default Navbar;
