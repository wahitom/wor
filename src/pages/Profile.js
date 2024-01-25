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
  Button,
  Input,
  IconButton,
  useToast
} from "@chakra-ui/react";
import {  DeleteIcon } from "@chakra-ui/icons";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});
  const { isAuthenticated } = useContext(AuthContext);
  const toast = useToast();

  useEffect(() => {
    api
      .get(`users/${1}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching user data", error));
  });

  const handleEdit = () => {
    setIsEditing(true);
    setEditedUserData({ ...userData });
  };

  const handleSave = () => {
    api
      .patch(`users/${1}`, editedUserData)
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
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleWorkoutDelete = (workoutId) => {
    api
      .delete(`workouts/${workoutId}`)
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
        User Profile
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
                <Td>Email</Td>
                <Td>
                  <Input
                    name="email"
                    value={editedUserData.email}
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
              <Tr>
                <Td>Password</Td>
                <Td>
                  <Input
                    name="password"
                    type = "password"
                    value={editedUserData.password}
                    onChange={handleInputChange}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Gender</Td>
                <Td>
                  <Input
                    name="gender"
                    value={editedUserData.gender}
                    onChange={handleInputChange}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Age</Td>
                <Td>
                  <Input
                    name="age"
                    value={editedUserData.age}
                    onChange={handleInputChange}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Weight</Td>
                <Td>
                  <Input
                    name="weight"
                    value={editedUserData.weight}
                    onChange={handleInputChange}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>Role</Td>
                <Td>
                  <Input
                    name="role"
                    value={editedUserData.role}
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
                <Td>Email</Td>
                <Td>{userData.email}</Td>
              </Tr>
              <Tr>
                <Td>Phone</Td>
                <Td>{userData.phone}</Td>
              </Tr>
              <Tr>
                <Td>Gender</Td>
                <Td>{userData.gender}</Td>
              </Tr>
              <Tr>
                <Td>Password</Td>
                <Td>{userData.password}</Td>
              </Tr>
              <Tr>
                <Td>Age</Td>
                <Td>{userData.age}</Td>
              </Tr>
              <Tr>
                <Td>Weight</Td>
                <Td>{userData.weight}</Td>
              </Tr>
              <Tr>
                <Td>Role</Td>
                <Td>{userData.role}</Td>
              </Tr>
            </div>
          )}
        </Tbody>
      </Table>

      {isEditing ? (
        <Button colorScheme="teal" onClick={() => handleSave()} mt={4} mr={2}>
          Save
        </Button>
      ) : (
        <Button colorScheme="teal" onClick={handleEdit} mt={4} mr={2}>
          Edit
        </Button>
      )}

      <Heading mt={8} mb={4} ml={100}>
        User Workouts
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
          {userData.user_workouts &&
            userData.user_workouts.map((workout) => (
              <Tr key={workout.id}>
                <Td>{workout.name}</Td>
                <Td>{workout.trainer}</Td>
                <Td>{workout.description}</Td>
                <Td>{workout.time}</Td>
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
