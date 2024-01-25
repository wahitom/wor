import * as React from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// URLs for images used in the component
const heroImage =
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const aboutImage =
  "https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const testimonialImage1 =
  "https://images.pexels.com/photos/1144864/pexels-photo-1144864.jpeg?auto=compress&cs=tinysrgb&w=600";
const testimonialImage2 =
  "https://images.pexels.com/photos/4720520/pexels-photo-4720520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const testimonialImage3 =
  "https://images.pexels.com/photos/4720230/pexels-photo-4720230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const Home = () => {
  return (
    <Box>
      <Flex
        bgImage={heroImage}
        bgPosition="center"
        bgSize="cover"
        h="50vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex alignItems="center" ml="4">
          <Input
            bg="white"
            placeholder="Search workouts"
            mr="2"
            style={{ width: "100vh", height: "7.5vh" }}
          />
          <Button colorScheme="purple" size="lg">
            Search
          </Button>
        </Flex>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt="8"
      >
        <Text fontSize="2xl" fontWeight="bold">
          About Our Website
        </Text>
        <Flex w="75%" mt="4" alignItems="center">
          <Image
            src={aboutImage}
            alt="About"
            mr="4"
            mb="2rem"
            borderRadius="10px"
            style={{ width: "70vh" }}
          />
          <Text fontSize="lg">
            At Workout app, we view fitness as a dynamic and personal journey,
            and we are honored to accompany you through each stage of your
            wellness expedition. More than just a destination for an array of
            workout options, our platform is a testament to our commitment to
            crafting a comprehensive fitness experience that accommodates
            individuals at every point in their fitness journey, irrespective of
            their starting point or level of expertise. In your pursuit of a
            healthier lifestyle, Vitality Gym stands as a beacon of support.
          </Text>
        </Flex>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt="8"
      >
        <Text fontSize="2xl" fontWeight="bold">
          More on the Website
        </Text>
        <Flex w="75%" mt="4" alignItems="center">
          <Text fontSize="lg" mr="4">
            In your pursuit of a healthier lifestyle, Vitality Gym stands as a
            beacon of support, providing you with not only a myriad of workout
            options but also fostering an environment that promotes inclusivity
            and encouragement. We're not just a fitness platform; we're a
            community dedicated to making your journey enjoyable, accessible,
            and, most importantly, tailored to your individual needs.
            <br />
            <br />
            <br />
            <Link to="/workouts">
              <Button colorScheme="purple" size="lg">
                View Workouts
              </Button>
            </Link>
          </Text>

          <Image
            src={testimonialImage1}
            alt="Testimonial"
            mb="2rem"
            borderRadius="10px"
            style={{ width: "70vh" }}
          />
        </Flex>
        <Flex w="75%" mt="2" alignItems="center">
          <Image
            src={testimonialImage2}
            alt="Testimonial"
            mr="4"
            mb="2rem"
            borderRadius="10px"
            style={{ width: "70vh" }}
          />
          <Text fontSize="lg" mr="4">
            Navigating the world of fitness can be overwhelming, but we are here
            to simplify the process for you. From beginner-friendly routines to
            advanced training sessions, we have carefully crafted each workout
            to be accessible, enjoyable, and, most importantly, effective.
            <br />
            <br />
            <br />
            <Link to="/contacts">
              <Button colorScheme="purple" size="lg">
                Contact us
              </Button>
            </Link>
          </Text>
        </Flex>
        <Flex w="75%" mt="2" alignItems="center">
          <Text fontSize="lg" mr="4">
            Join us as we redefine the boundaries of what fitness means to you,
            one personalized workout at a time. Welcome to Vitality Gym where
            your fitness aspirations become an integral part of your unique
            journey.
            <br />
            <br />
            <br />
            <Link to="/workouts">
              <Button colorScheme="purple" size="lg">
                Sign up Today
              </Button>
            </Link>
          </Text>
          <Image
            src={testimonialImage3}
            alt="Testimonial"
            mb="2rem"
            borderRadius="10px"
            style={{ width: "70vh" }}
          />
        </Flex>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt="8"
      ></Flex>
    </Box>
  );
};

export default Home;
