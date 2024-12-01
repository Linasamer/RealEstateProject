"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Apartment_1 = __importDefault(require("../models/Apartment"));
const router = express_1.default.Router();
// Get all apartments
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apartments = yield Apartment_1.default.find();
    res.json(apartments);
}));
// Get apartment details
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apartment = yield Apartment_1.default.findById(req.params.id);
    if (!apartment)
        return res.status(404).json({ error: "Apartment not found" });
    res.json(apartment);
}));
// Add a new apartment
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apartment = new Apartment_1.default(req.body);
    yield apartment.save();
    res.status(201).json(apartment);
}));
exports.default = router;
