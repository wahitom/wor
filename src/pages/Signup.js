// Import necessary libraries and components
import React, { useContext } from "react";
import {
  ChakraProvider,
  Box,
  CSSReset,
  Input,
  Stack,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { api } from "../utils/utils";

// Access the navigation functionality and authentication state from context
function Signup() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  // Formik hook for managing form state and submission with Yup validation
  const formik = useFormik({
    // Define validation rules for each form field
    validationSchema: Yup.object().shape({
      first_name: Yup.string().required("First Name is required"),
      last_name: Yup.string().required("Last Name is required"),

      // Repeat similar structure for other form fields
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email address is required"),
      phone: Yup.number().required("Phone number is required"),
      password: Yup.string().required("Password is required"),
      age: Yup.number().required("Age is required"),
      weight: Yup.number().required("Weight is required"),
      gender: Yup.string().required("Gender is required"),
      role: Yup.string().required("Role is required"),
    }),

    // Initialize form fields with default values
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      age: "",
      weight: "",
      gender: "",
      role: "",
      // Repeat similar structure for other form fields
    },
    // Send a POST request to the API with form values
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await api.post("users", values);
        console.log(res);

        // Show success message using toast notification
        toast.success(res.data.message);

        // Reset the form if successful
        resetForm();

        // Store details inside localStorage
        localStorage.setItem("session", JSON.stringify(res.data));
        setIsAuthenticated(true);

        // Navigate user to homepage
        navigate("/");

        // Handle errors and show error message using toast notification
      } catch (error) {
        const data = error.response.data;

        toast.error(data.message);

        console.log("Unable to sign up");
      }
    },
  });

  return (
    <ChakraProvider>
      {/* Reset default styles for consistent styling */}
      <CSSReset />
      {/* Main container for centering the signup form */}
      <Box
        minH="100vh"
        d="flex"
        alignItems="center"
        justifyContent="center"
        bg="gray.100"
      >
        {/* Form container with border, padding, and shadow */}
        <Box
          borderWidth={1}
          px={4}
          width="md"
          borderRadius={8}
          boxShadow="lg"
          bg="white"
        >
          {/* Form content */}
          <Box p={4}>
            {/* Stack for organizing child components with spacing */}
            <Stack spacing={4}>
              {/* Heading for the signup form */}
              <Heading fontSize="2xl">Signup</Heading>

              {/* Form with input fields and submit button */}
              <form onSubmit={formik.handleSubmit}>
                {/* Input for first name */}
                <Input
                  margin="normal"
                  required
                  id="first_name"
                  placeholder="First Name"
                  name="first_name"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.first_name}
                />

                {/* Input for last name */}
                <Input
                  margin="normal"
                  required
                  id="last_name"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.last_name}
                />

                {/* Input for email */}
                <Input
                  margin="normal"
                  required
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.email}
                />

                {/* Input for phone */}
                <Input
                  margin="normal"
                  required
                  id="phone"
                  placeholder="Phone Number"
                  name="phone"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.phone}
                />

                {/* Input for password */}
                <Input
                  margin="normal"
                  required
                  id="password"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.password}
                />

                {/* Input for age */}
                <Input
                  margin="normal"
                  required
                  id="age"
                  placeholder="Age"
                  type="number"
                  name="age"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.age}
                />

                {/* Input for weight */}
                <Input
                  margin="normal"
                  required
                  id="weight"
                  placeholder="Weight"
                  type="number"
                  name="weight"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.weight}
                />

                {/* Input for gender */}
                <Input
                  margin="normal"
                  required
                  id="gender"
                  placeholder="Gender"
                  name="gender"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.gender}
                />

                {/* Input for role */}
                <Input
                  margin="normal"
                  required
                  id="role"
                  placeholder="Role"
                  name="role"
                  onChange={formik.handleChange}
                  onBlur={formik.onBlur}
                  value={formik.values.role}
                />

                {/* Button for submitting the form */}
                <Button
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  fontSize="md"
                >
                  Signup
                </Button>

                {/* Link to login */}
                <p>
                  Already have an account?{" "}
                  <RouterLink to="/login">Login</RouterLink>
                </p>
              </form>
            </Stack>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Signup;
