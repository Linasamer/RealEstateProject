"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apartmentController_1 = require("../controllers/apartmentController");
const router = express_1.default.Router();
// Routes for apartments
router.get('/', apartmentController_1.fetchAllApartments); // Get all apartments
router.get('/:id', apartmentController_1.fetchApartmentById); // Get apartment by ID
router.post('/', apartmentController_1.createNewApartment); // Create a new apartment
exports.default = router;
