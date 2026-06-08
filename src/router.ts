import { Router } from "express";
import { createBank, getBanks } from "./middleware/Banks";

const router = Router();

//GET all banks
router.get('/', getBanks)


//POST create a new bank
router.post('/', createBank)

export default router;