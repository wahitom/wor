import { useEffect, useState } from 'react';
import { Box, Image, Text, VStack, Button, Flex } from '@chakra-ui/react';
import { api } from '../utils/utils';

const Workout = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        api.get('workouts')
            .then(response => {
                setWorkouts(response.data);
                console.log(response.data);  
            })
            .catch(error => {
                console.error('Error:', error);  
            });
    }); 

    return (
        <Flex flexWrap="wrap" justifyContent="space-between" spacing={4}>
            {workouts.map(workout => (
                <Box key={workout.id} width="20%" borderWidth="2px" borderRadius="lg" overflow="hidden">
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
    );
};

export default Workout;
