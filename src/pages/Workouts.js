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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Workout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

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

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(search.toLowerCase())
  );

  const bookWorkout = async (id) => {
    try {
      setLoading(true);

      const response = await api.post("userworkouts", {
        workout_id: id,
      });

      if (response.status === 201) {
        toast.success("Workout booked successfully");
      } else {
        toast.error("Failed to book workout. Please try again.");
      }
    } catch (error) {
      console.error("Error booking workout:", error);
      toast.error("Error booking workout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer />
      <Input
        placeholder="Search workouts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mt={4}
        mb={4}
        width="80%"
      />
      <Flex flexWrap="wrap" justifyContent="space-between" spacing={4}>
        {filteredWorkouts.map((workout) => (
          <Box
            key={workout.id}
            width="20%"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={workout.image} alt={workout.name} maxH="150px" />
            <VStack p={4} align="start">
              <Text fontWeight="bold">Name : {workout.name}</Text>
              <Text>Trainer : {workout.trainer}</Text>
              <Text>Description : {workout.description}</Text>
              <Text>Time : {workout.time}</Text>
              <Text>Price: {workout.price}</Text>
              <Button
                colorScheme="teal"
                mt={4}
                onClick={() => bookWorkout(workout.id)}
                isLoading={loading}
                isDisabled={loading}
              >
                {loading ? "Booking..." : "Book Now"}
              </Button>
            </VStack>
          </Box>
        ))}
      </Flex>
    </div>
  );
};

export default Workout;
