import { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
import { api } from "../utils/utils";

// State to store the list of workouts
const Workout = () => {
  const [workouts, setWorkouts] = useState([]);

  // State for search input
  const [search, setSearch] = useState("");

  // Fetch workouts from the API when the component mounts
  useEffect(() => {
    api
      .get("workouts")
      .then((response) => {
        setWorkouts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // Filter workouts based on search input
  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Input
        placeholder="Search workouts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mt={4}
        mb={4}
        width="80%"
      />
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        spacing={4}
        style={{ padding: "20px", marginLeft: "auto", marginRight: "auto" }}
      >
        {filteredWorkouts.map((workout) => (
          <Box
            key={workout.id}
            width="20%"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            style={{
              padding: "20px",
              marginBottom: 4,
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <Image src={workout.image} alt={workout.name} maxH="150px" />
            <VStack p={4} align="start">
              <Text fontWeight="bold">Name : {workout.name}</Text>
              <Text>Trainer : {workout.trainer}</Text>
              <Text>Description : {workout.description}</Text>
              <Text>ksh.{workout.price}</Text>
              <Text>{workout.time}</Text>
              <Button colorScheme="teal" mt={4}>
                Book Now
              </Button>
            </VStack>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default Workout;
