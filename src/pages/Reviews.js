import React, { useState, useEffect } from 'react';


import {
 Box,
 Heading,
 Text,
 Button,
 VStack,
 FormControl,
 FormLabel,
 Input,
 Textarea,
} from '@chakra-ui/react';
import {api} from '../utils/utils'


const Reviews = () => {
 // State for storing reviews from the backend
 const [reviews, setReviews] = useState([]);
 // State to track loading state while fetching reviews
 const [loading, setLoading] = useState(true);
 // State for managing form data for new reviews
 const [newReview, setNewReview] = useState({ title: '', body: '', status: '' });
 // State for managing the review being edited
 const [editingReview, setEditingReview] = useState(null);


 // Fetch reviews data from the backend when the component mounts
 useEffect(() => {
   const fetchReviews = async () => {
     try {
       const response = await api.get('reviews');
       setReviews(response.data);
       setLoading(false);
     } catch (error) {
       console.error('Error fetching reviews:', error);
       setLoading(false);
     }
   };


   fetchReviews();
 }, []); // Empty dependency array ensures the effect runs once on component mount


 // Handle input changes in the review form
 const handleInputChange = (e) => {
   setNewReview({
     ...newReview,
     [e.target.name]: e.target.value,
   });
 };


 // Handle form submission for creating a new review
 const handleFormSubmit = async (e) => {
   e.preventDefault();


   try {
     const response = await api.post('reviews', newReview);
     setReviews([...reviews, response.data]);
     setNewReview({ title: '', body: '', status: '' });
   } catch (error) {
     console.error('Error submitting review:', error);
   }
 };


 // Handle click on "Edit" button for a specific review
 const handleEditClick = (review) => {
   setEditingReview(review);
   setNewReview(review);
 };


 // Handle click on "Cancel Edit" button
 const handleCancelEdit = () => {
   setEditingReview(null);
   setNewReview({ title: '', body: '', status: '' });
 };


 // Handle click on "Update Review" button for an edited review
 const handleUpdateReview = async () => {
   try {
     const response = await api.patch(`reviews/${editingReview.id}`, newReview);
     const updatedReviews = reviews.map((r) => (r.id === editingReview.id ? response.data : r));
     setReviews(updatedReviews);
     setEditingReview(null);
     setNewReview({ title: '', body: '', status: '' });
   } catch (error) {
     console.error('Error updating review:', error);
   }
 };


 // Handle click on "Delete" button for a specific review
 const handleDeleteReview = async (id) => {
   try {
     await api.delete(`reviews/${id}`);
     const updatedReviews = reviews.filter((r) => r.id !== id);
     setReviews(updatedReviews);
   } catch (error) {
     console.error('Error deleting review:', error);
   }
 };


 // Render reviews in a list
 const renderReviews = () => {
   if (loading) {
     return <p>Loading reviews...</p>;
   }


   if (reviews.length === 0) {
     return <p>No reviews available.</p>;
   }


   return (
     <VStack align="start" spacing={4}>
       {reviews.map((review) => (
         <Box
           key={review.id}
           borderWidth="1px"
           borderRadius="lg"
           p={4}
           bgColor="#2ecc71"  // Green color for the gym feel
           color="white"
           boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
         >
           <Heading fontSize="xl">{review.title}</Heading>
           <Text>{review.body}</Text>
           <Text>Status: {review.status}</Text>
           <Box mt={2}>
             <Button
               onClick={() => handleEditClick(review)}
               colorScheme="teal"
               size="sm"
               mr={2}
               style={{ backgroundColor: '#27ae60' }}  // Darker green for button
             >
               Edit
             </Button>
             <Button
               onClick={() => handleDeleteReview(review.id)}
               colorScheme="red"
               size="sm"
               style={{ backgroundColor: '#c0392b' }}  // Reddish color for button
             >
               Delete
             </Button>
           </Box>
         </Box>
       ))}
     </VStack>
   );
 };


 return (
   <Box p={4}>
     <Heading mb={4} style={{ color: '#2ecc71', textAlign: 'center' }}>
       Reviews Page
     </Heading>


     {renderReviews()}


     {/* New Review Form */}
     <form onSubmit={editingReview ? handleUpdateReview : handleFormSubmit}>
       <VStack align="start" spacing={4}>
         <FormControl>
           <FormLabel>Title</FormLabel>
           <Input
             type="text"
             name="title"
             value={newReview.title}
             onChange={handleInputChange}
             bgColor="#3498db"  // Blueish color for input
             color="white"
           />
         </FormControl>
         <FormControl>
           <FormLabel>Body</FormLabel>
           <Textarea
             name="body"
             value={newReview.body}
             onChange={handleInputChange}
             bgColor="#3498db"
             color="white"
           />
         </FormControl>
         <FormControl>
           <FormLabel>Status</FormLabel>
           <Input
             type="text"
             name="status"
             value={newReview.status}
             onChange={handleInputChange}
             bgColor="#3498db"
             color="white"
           />
         </FormControl>
         {editingReview ? (
           <>
             <Button
               colorScheme="gray"
               onClick={handleCancelEdit}
               style={{ backgroundColor: '#95a5a6' }}  // Lighter gray for button
             >
               Cancel Edit
             </Button>
             <Button
               type="button"
               colorScheme="teal"
               onClick={handleUpdateReview}
               style={{ backgroundColor: '#27ae60' }}
             >
               Update Review
             </Button>
           </>
         ) : (
           <Button type="submit" colorScheme="teal" style={{ backgroundColor: '#2ecc71' }}>
             Submit Review
           </Button>
         )}
       </VStack>
     </form>
   </Box>
 );
};


export default Reviews;