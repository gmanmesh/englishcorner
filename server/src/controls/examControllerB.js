import {
    createExamLevel,
    createExamQuestion,
    addOptionsForQuestion,
    getAllExams,
    updateExamQuestion,
    deleteExamQuestion,
} from "../models/examModelB.js";

// Create a new exam level
export const handleCreateExamLevel = async (req, res) => {
    try {
        const { level_name } = req.body;
        const levelId = await createExamLevel(level_name);
        res.status(201).json({ message: "Exam level created successfully", levelId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new exam question
export const handleCreateExamQuestion = async (req, res) => {
    try {
        const { exam_level_id, question_text } = req.body;
        const questionId = await createExamQuestion(exam_level_id, question_text);
        res.status(201).json({ message: "Exam question created successfully", questionId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add options for a question
export const handleAddOptionsForQuestion = async (req, res) => {
    try {
        const { exam_id, options } = req.body;
        const result = await addOptionsForQuestion(exam_id, options);
        res.status(201).json({ message: `${result} options added successfully` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all exams with their questions and options
export const handleGetAllExams = async (req, res) => {
    try {
        const exams = await getAllExams();
        res.status(200).json(exams);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an exam question
export const handleUpdateExamQuestion = async (req, res) => {
    try {
        const { exam_id, question_text } = req.body;
        const success = await updateExamQuestion(exam_id, question_text);
        if (!success) {
            return res.status(404).json({ error: "Exam question not found" });
        }
        res.status(200).json({ message: "Exam question updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an exam question
export const handleDeleteExamQuestion = async (req, res) => {
    try {
        const { exam_id } = req.params;
        const success = await deleteExamQuestion(exam_id);
        if (!success) {
            return res.status(404).json({ error: "Exam question not found" });
        }
        res.status(200).json({ message: "Exam question deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};