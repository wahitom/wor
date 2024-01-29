import React, { useState, useEffect } from "react";
import { api } from "../utils/utils";
import {
  Box,
  Heading,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function Review() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const fetchComments = async () => {
    try {
      const response = await api.get("reviews");

      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handlePostComment = async () => {
    try {
      const response = await api.post(
        "reviews",
        {
          comment: newComment,
          username: newUsername,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_JWT_TOKEN`, //
          },
        }
      );

      console.log(response.data);
      fetchComments();
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Review App</Heading>
      <FormControl mb={4}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          placeholder="Enter your username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Comment</FormLabel>
        <Textarea
          placeholder="Enter your comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </FormControl>
      <Button colorScheme="blue" onClick={handlePostComment} mb={4}>
        Post Comment
      </Button>

      {Array.isArray(comments) &&
        comments.map((comment) => (
          <Box key={comment.id} borderWidth="1px" p={4} mb={4}>
            <Heading size="md">{comment.username}</Heading>
            <p>{comment.comment}</p>
          </Box>
        ))}

      <Button colorScheme="teal" onClick={fetchComments}>
        See More Comments
      </Button>
    </Box>
  );
}

export default Review;
