import React, { useState } from 'react';
import {
  ChakraProvider,
  CSSReset,
  Box,
  Input,
  Stack,
  Button,
  Heading,
} from '@chakra-ui/react';

function Signup() {
  // State variables to track the sign-up information
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  function handleSignup(e) {
    e.preventDefault();
    // TODO: Send a request to the sign-up API with username, email, and password.
    // Handle the response accordingly, e.g., display an error message or redirect on success.
  }

  return (
    <ChakraProvider>
      {/* Reset default styles for consistent styling */}
      <CSSReset />
      {/* Main container for centering the sign-up form */}
      <Box
        minH="100vh"
        d="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.100" // Background color
      >
        {/* Form container with border, padding, and shadow */}
        <Box
          borderWidth={1}
          px={4}
          width="md"
          borderRadius={8}
          boxShadow="lg"
          bg="white" // Background color
        >
          {/* Form content */}
          <Box p={4}>
            {/* Stack for organizing child components with spacing */}
            <Stack spacing={4}>
              {/* Heading for the sign-up form */}
              <Heading fontSize="2xl">Sign Up</Heading>
              {/* Form with input fields and submit button */}
              <form onSubmit={handleSignup}>
                {/* Input for username */}
                <Input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {/* Input for email */}
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Input for password */}
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Button for submitting the form */}
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  fontSize="md"
                >
                  Sign Up
                </Button>
              </form>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Signup;