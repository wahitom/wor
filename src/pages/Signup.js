import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { api } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; 
import { useContext } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormErrorMessage,
  VStack,
  Center,
} from "@chakra-ui/react";
import * as Yup from "yup";
import toast from "react-hot-toast";

// Validation schema using Yup
const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  role: Yup.string().required("Role is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
      "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character."
    ),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAuthenticated } = useContext(AuthContext);

  const onSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const res = await api.post("users", values);

      toast.success(res.data.message);
      // reset form
      resetForm();
      // 1. store inside local storage
      localStorage.setItem("session", JSON.stringify(res.data));
      setIsAuthenticated(true);
      // 2. navigate user to homepage
      navigate("/profile");
    } catch (error) {
      const data = error.response.data;

      toast.error(data.message);
      console.log("Unable to login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Center h="100vh" bg="black">
      <Box p={4} borderRadius="md" bg="black" shadow="md">
        <Formik
          initialValues={{
            username: "",
            email: "",
            role: "",
            password: "",
          }}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          <Form>
            <VStack spacing={4} align="stretch">
              <Field name="username">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.username && form.touched.username}
                  >
                    <label>Enter username</label>
                    <Input {...field} placeholder="Username" color="white" />
                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.email && form.touched.email}
                  >
                    <label>Enter Email</label>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Email"
                      color="white"
                    />
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="role">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.role && form.touched.role}
                  >
                    <label>Enter role: Member</label>
                    <Input {...field} placeholder="Role" color="white" />
                    <FormErrorMessage>{form.errors.role}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <label>Enter Password</label>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
                      color="white"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button colorScheme="green" type="submit" isLoading={isLoading}>
                Sign Up
              </Button>
            </VStack>
          </Form>
        </Formik>
      </Box>
    </Center>
  );
};

export default SignUp;
