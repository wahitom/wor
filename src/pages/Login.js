import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  CSSReset,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { api } from "../utils/utils";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();

  const { setIsAuthenticated } = useContext(AuthContext);

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email address is required"),
      password: Yup.string().required("Password is required"),
    }),
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm }) => {
      // here is where we can run our query to our server

      try {
        const res = await api.post("login", values);
        console.log(res);

        toast.success(res.data.message);

        //   reset for if successful
        resetForm();

        // 1. store details inside localstorage
        localStorage.setItem("session", JSON.stringify(res.data));
        setIsAuthenticated(true);

        // 2. navigate user to homepage
        navigate("/");

        //persist user
        //    redirect user to home page
      } catch (error) {
        const data = error.response.data;

        toast.error(data.message);

        console.log("Unable to log in");
      }
    },
  });

  console.log(formik.errors);

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
              <form onSubmit={formik.handleSubmit}>
                {/* Input for username or email */}
                <Input
                  margin="normal"
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.email}
                  // error={Boolean(formik.errors.email)}
                  // helperText={formik.errors.email}
                />
                {/* Input for password */}
                <Input
                  margin="normal"
                  required
                  id="password"
                  label="Password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.password}
                  // error={Boolean(formik.errors.password)}
                  // helperText={formik.errors.password}
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
                <p>
                  Don't have an account?{" "}
                  <RouterLink to="/signup">Signup</RouterLink>
                </p>
              </form>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Login;
