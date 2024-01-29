import { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate, Link } from "react-router-dom";
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
import { AuthContext } from "../context/AuthContext"; 
import { api } from "../utils/utils";

// Using yup for validation
const schema = Yup.object().shape({
  usernameOrEmail: Yup.string().required("Username or Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const res = await api.post("login", values);

      toast.success(res.data.message);
      // reset form
      resetForm();
      // 1. store inside local storage
      localStorage.setItem("session", JSON.stringify(res.data));
      setIsAuthenticated(true);
      // 2. navigate user to homepage
      navigate("/home");
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
            usernameOrEmail: "",
            password: "",
          }}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          <Form>
            <VStack spacing={4} align="stretch">
              <Field name="usernameOrEmail">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.usernameOrEmail &&
                      form.touched.usernameOrEmail
                    }
                  >
                    <label>Enter Username or Email</label>
                    <Input {...field} placeholder="Username or Email" />
                    <FormErrorMessage>
                      {form.errors.usernameOrEmail}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <label>Enter Password</label>
                    <Input {...field} type="password" placeholder="Password" />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Button colorScheme="green" type="submit" isLoading={isLoading}>
                Log In
              </Button>
              <Link to="/Signup">
                <p>Dont have an account?</p>
                <br />
                <Button colorScheme="teal">Sign Up</Button>
              </Link>
            </VStack>
          </Form>
        </Formik>
      </Box>
    </Center>
  );
};

export default Login;
