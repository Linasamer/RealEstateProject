"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
} from "@mui/material";

const AddApartment = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Make sure the form is complete
    if (!name || !location || !price || !description) {
      alert("Please fill all fields!");
      return;
    }

    // Send data to the backend
    const apartment = { name, location, price, description };

    try {
      const res = await fetch("http://localhost:5000/api/apartments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apartment),
      });

      if (res.ok) {
        alert("Apartment added successfully");
        // Clear form fields after successful submission
        setName("");
        setLocation("");
        setPrice("");
        setDescription("");
        
        // Redirect to the home page
        router.push("/"); // Navigate back to the home page
      } else {
        alert("Error adding apartment");
      }
    } catch (error) {
      alert("Error connecting to the server");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add Apartment
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box mb={3}>
            <TextField
              label="Location"
              variant="outlined"
              fullWidth
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Box>
          <Box mb={3}>
            <TextField
              label="Price"
              type="number"
              variant="outlined"
              fullWidth
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Box>
          <Box mb={3}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Box>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Add Apartment
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddApartment;
