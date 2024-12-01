"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation for client-side routing
import { Container, Typography, Box, Grid, Paper, Divider, Button } from "@mui/material";

// Dynamic route using params automatically passed by Next.js
const ApartmentDetailsPage = ({ params }: { params: { id: string } }) => {
  const [apartment, setApartment] = useState<any>(null);
  const router = useRouter(); // Initialize the router for navigation

  // Fetch apartment details based on params.id
  useEffect(() => {
    const fetchApartmentDetails = async () => {
      const res = await fetch(`http://localhost:5000/api/apartments/${params.id}`);
      const data = await res.json();
      setApartment(data);
    };

    fetchApartmentDetails();
  }, [params.id]); // Effect will run whenever the id in params changes

  const handleGoBack = () => {
    router.push("/"); // Navigate to the home page
  };

  if (!apartment) return <Typography variant="h6">Loading...</Typography>;

  return (
    <Container maxWidth="md">
      <Paper sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h4" gutterBottom>
          Apartment Details
        </Typography>
        <Divider sx={{ marginBottom: 3 }} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2">
              Name:
            </Typography>
            <Typography>{apartment.name}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2">
              Location:
            </Typography>
            <Typography>{apartment.location}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2">
              Price:
            </Typography>
            <Typography>{apartment.price}</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" component="h2">
              Created at:
            </Typography>
            <Typography>{new Date(apartment.createdAt).toLocaleString()}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              Description:
            </Typography>
            <Typography>{apartment.description}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" component="h2">
              Last Updated:
            </Typography>
            <Typography>{new Date(apartment.updatedAt).toLocaleString()}</Typography>
          </Grid>
        </Grid>

        <Box mt={3}>
          <Button variant="contained" color="primary" onClick={handleGoBack}>
            Go Back
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ApartmentDetailsPage;
