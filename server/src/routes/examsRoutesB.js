import { Router } from "express";
import {
    handleCreateExamLevel,
    handleCreateExamQuestion,
    handleAddOptionsForQuestion,
    handleGetAllExams,
    handleUpdateExamQuestion,
    handleDeleteExamQuestion,
} from "../controls/examControllerB.js";

const examsRoute = Router();

// Create a new exam level
examsRoute.post("/levels", handleCreateExamLevel);

// Create a new exam question
examsRoute.post("/questions", handleCreateExamQuestion);

// Add options for a question
examsRoute.post("/options", handleAddOptionsForQuestion);

// Get all exams with their questions and options
examsRoute.get("/exams", handleGetAllExams);

// Update an exam question
examsRoute.put("/questions/:exam_id", handleUpdateExamQuestion);

// Delete an exam question
examsRoute.delete("/questions/:exam_id", handleDeleteExamQuestion);

export default examsRoute