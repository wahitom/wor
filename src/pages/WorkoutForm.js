import React from 'react';
import { useFormik } from 'formik';
import { Input, Button, FormControl, FormLabel, Box } from '@chakra-ui/react';
import { api } from '../utils/utils';

// Formik hook for managing form state and submission
const WorkoutForm = () => {
  const formik = useFormik({
    initialValues: {
      users_id: 0,
      name: '',
      trainer: '',
      description: '',
      image: '',
      price: 0,
      time: '',
    },
    onSubmit: async (values, { resetForm }) => {
      try {
         
        // Send a POST request to the API with form values
        const response = await api.post('workouts', values);

        // Reset form after successful submission
        resetForm();
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    },
  });

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      maxW="400px"
      mx="auto"
      boxShadow="md"
      mb={8}
    >
      <form onSubmit={formik.handleSubmit}>
        <FormControl id="users_id" mb={4}>
          <FormLabel>Users_id:</FormLabel>
          <Input
            type="number"
            id="users_id"
            name="users_id"
            onChange={formik.handleChange}
            value={formik.values.users_id}
          />
        </FormControl>
        <FormControl id="name" mb={4}>
          <FormLabel>Name:</FormLabel>
          <Input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormControl>

        <FormControl id="trainer" mb={4}>
          <FormLabel>Trainer:</FormLabel>
          <Input
            type="text"
            id="trainer"
            name="trainer"
            onChange={formik.handleChange}
            value={formik.values.trainer}
          />
        </FormControl>

        <FormControl id="description" mb={4}>
          <FormLabel>Description:</FormLabel>
          <Input
            type="text"
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </FormControl>

        <FormControl id="image" mb={4}>
          <FormLabel>Image:</FormLabel>
          <Input
            type="text"
            id="image"
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </FormControl>

        <FormControl id="price" mb={4}>
          <FormLabel>Price:</FormLabel>
          <Input
            type="number"
            id="price"
            name="price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
        </FormControl>

        <FormControl id="time" mb={4}>
          <FormLabel>Time:</FormLabel>
          <Input
            type="text"
            id="time"
            name="time"
            onChange={formik.handleChange}
            value={formik.values.time}
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" mt={4}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default WorkoutForm;
