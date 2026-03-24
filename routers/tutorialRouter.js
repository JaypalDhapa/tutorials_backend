import express  from 'express';
const router = express.Router();
import {
    getTutorials,
    getTutorial,
    createTutorial,
    updateTutorial,
    deleteTutorial,
} from '../controllers/tutorialController.js'

router.get("/getTutorials",getTutorials);
router.get("/getTutorial/:slug",getTutorial)
router.post("/createTutorial",createTutorial);
router.put("/updateTutorial/:slug",updateTutorial)
router.delete("/deleteTutorial/:slug",deleteTutorial);

export default router;