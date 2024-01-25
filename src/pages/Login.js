import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ChakraProvider, Box, CSSReset, Input, Stack, Button, Heading } from '@chakra-ui/react';

function Login() {
  // State variables to track the username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  function handleLogin(e) {
    e.preventDefault();
    // TODO: Send a request to the authentication API with username and password.
    // Handle the response accordingly, e.g., display an error message or redirect on success.
  }

  return (
    <ChakraProvider>
      {/* Reset default styles for consistent styling */}
      <CSSReset />
      {/* Main container for centering the login form */}
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
              {/* Heading for the login form */}
              <Heading fontSize="2xl">Login</Heading>
              {/* Form with input fields and submit button */}
              <form onSubmit={handleLogin}>
                {/* Input for username or email */}
                <Input
                  type="text"
                  placeholder="Username or Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  Log In
                </Button>
                {/* Link to sign up */}
                <p>Don't have an account? <RouterLink to="/signup">Signup</RouterLink></p>
              </form>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
