"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const apartmentRoutes_1 = __importDefault(require("./routes/apartmentRoutes"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
// Use routes
app.use('/api/apartments', apartmentRoutes_1.default);
// Error handling for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});
// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
