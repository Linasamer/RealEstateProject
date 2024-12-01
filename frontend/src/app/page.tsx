"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Delete, Visibility } from "@mui/icons-material";

const Home = () => {
  const [apartments, setApartments] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data on the client-side
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/apartments", {
        cache: "no-store", // Ensure it fetches fresh data every time
      });
      const data = await res.json();
      setApartments(data);
      setFilteredData(data);
    };

    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setFilteredData(
      apartments.filter(
        (apartment: any) =>
          apartment.name.toLowerCase().includes(value) ||
          apartment.location.toLowerCase().includes(value)
      )
    );
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this apartment?");
    if (confirmDelete) {
      try {
        const res = await fetch(`http://localhost:5000/api/apartments/${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          setApartments(apartments.filter((apartment: any) => apartment.id !== id));
          setFilteredData(filteredData.filter((apartment: any) => apartment.id !== id));
        } else {
          alert("Error deleting apartment");
        }
      } catch (error) {
        alert("Error connecting to the server");
      }
    }
  };

  return (
    <div>
      <h1>Apartment Listings</h1>
      <Link href="/add-apartment">
        <Button variant="contained" color="primary" style={{ marginBottom: "16px" }}>
          Add New Apartment
        </Button>
      </Link>

      {/* Search Bar */}
      <TextField
        label="Search"
        variant="outlined"
        value={search}
        onChange={handleSearch}
        style={{ margin: "10px 0", width: "100%" }}
      />

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell> {/* Added Actions column */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((apartment: any) => (
              <TableRow key={apartment.id}>
                <TableCell>{apartment.name}</TableCell>
                <TableCell>{apartment.location}</TableCell>
                <TableCell>{apartment.price}</TableCell>
                <TableCell>{apartment.description}</TableCell>
                <TableCell>
                  {/* View Button (Link to the Apartment Details Page) */}
                  <Link href={`/apartment-details/${apartment.id}`} passHref>
                  <Tooltip title="View Details">
                    <IconButton color="primary">
                      <Visibility />
                    </IconButton>
                  </Tooltip>
                </Link>

                  {/* Delete Button */}
                  <Tooltip title="Delete Apartment">
                    <IconButton color="secondary" onClick={() => handleDelete(apartment.id)}>
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
