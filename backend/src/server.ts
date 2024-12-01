import express from 'express';
import cors from 'cors';
import apartmentRoutes from './routes/apartmentRoutes';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Use routes
app.use('/api/apartments', apartmentRoutes);

// Error handling for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
