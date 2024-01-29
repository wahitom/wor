import React, { useState, useEffect } from "react";
import { api } from "../utils/utils";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  IconButton,
  useToast,
  Button,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const [bookedWorkouts, setBookedWorkouts] = useState([]);

  useEffect(() => {
    const getBookedWorkouts = async () => {
      try {
        const response = await api.get("userworkouts");
        if (response.status === 200) {
          setBookedWorkouts(response.data);
        } else {
          console.error("Failed to fetch booked workouts");
        }
      } catch (error) {
        console.error("Error fetching booked workouts:", error);
      }
    };
    getBookedWorkouts();
  }, []);

  // Fetch user data when the component mounts
  useEffect(() => {
    api
      .get(`profile`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching user data", error));
  }, []); // Added dependency array to ensure useEffect runs only once

  // Enable editing mode and create a copy of user data for editing
  const handleEdit = () => {
    setIsEditing(true);
    setEditedUserData({ ...userData });
  };

  // Save edited user data to the API
  const handleSave = () => {
    // Set loading state to true before making the API call
    setIsLoading(true);

    api
      .put(`profile`, editedUserData)
      .then((response) => {
        toast({
          title: "Profile Updated",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setIsEditing(false);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error updating user data", error);
        toast({
          title: "Update Failed",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      })
      .finally(() => {
        // Set loading state back to false after the API call is complete
        setIsLoading(false);
      });
  };
  // Handle input changes during editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  // Delete a user's workout
  const handleWorkoutDelete = (id) => {
    api
      .delete(`userworkouts/${id}`)
      .then(() => {
        toast({
          title: "Workout Deleted",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error deleting workout", error);
        toast({
          title: "Deletion Failed",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return (
    <Box p={4}>
      <Heading mb={2} ml={100}>
        My-Profile
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Detail</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isEditing ? (
            <div>
              <Tr>
                <Td>First Name</Td>
                <Td>
                  <Input
                    name="first_name"
                    value={editedUserData.first_name}
                    onChange={handleInputChange}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Last Name</Td>
                <Td>
                  <Input
                    name="last_name"
                    value={editedUserData.last_name}
                    onChange={handleInputChange}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Phone</Td>
                <Td>
                  <Input
                    name="phone"
                    value={editedUserData.phone}
                    onChange={handleInputChange}
                  />
                </Td>
              </Tr>
            </div>
          ) : (
            <div>
              <Tr>
                <Td>First Name</Td>
                <Td>{userData.first_name}</Td>
              </Tr>
              <Tr>
                <Td>Last Name</Td>
                <Td>{userData.last_name}</Td>
              </Tr>
              <Tr>
                <Td>Phone</Td>
                <Td>{userData.phone}</Td>
              </Tr>
            </div>
          )}
        </Tbody>
      </Table>
      {isEditing ? (
        <Button
          colorScheme="teal"
          onClick={handleSave}
          mt={4}
          mr={2}
          isLoading={isLoading}
        >
          Save
        </Button>
      ) : (
        <Button colorScheme="teal" onClick={handleEdit} mt={4} mr={2}>
          Edit
        </Button>
      )}

      <Heading mt={8} mb={4} ml={100}>
        My Workouts
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Trainer</Th>
            <Th>Description</Th>
            <Th>Time</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bookedWorkouts.map((workout) => (
            <Tr key={workout.id}>
              <Td>{workout.workout.name}</Td>
              <Td>{workout.workout.trainer}</Td>
              <Td>{workout.workout.description}</Td>
              <Td>{workout.workout.time}</Td>
              <Td>
                <IconButton
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => handleWorkoutDelete(workout.id)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Profile;
