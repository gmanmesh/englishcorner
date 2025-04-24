import db from "../config/db.js"

// Create a new exam level
export const createExamLevel = async (levelName) => {
    const [result] = await db.query("INSERT INTO exam_level (level_name) VALUES (?)", [levelName]);
    return result.insertId;
};

// Create a new exam question
export const createExamQuestion = async (examLevelId, questionText) => {
    const [result] = await db.query("INSERT INTO exams (exam_level_id, question_text) VALUES (?, ?)", [
        examLevelId,
        questionText,
    ]);
    return result.insertId;
};

// Add options for a question
export const addOptionsForQuestion = async (examId, optionsData) => {
    const values = optionsData.map((option) => [examId, option.option_text, option.is_correct]);
    const [result] = await db.query(
        "INSERT INTO options (exam_id, option_text, is_correct) VALUES ?",
        [values]
    );
    return result.affectedRows;
};

// Fetch all exams with their questions and options
export const getAllExams = async () => {
    const [rows] = await db.query(`
    SELECT e.id AS exam_id, e.question_text, o.id AS option_id, o.option_text, o.is_correct
    FROM exams e
    LEFT JOIN options o ON e.id = o.exam_id
  `);

    // Group options by question
    const groupedExams = {};
    rows.forEach((row) => {
        if (!groupedExams[row.exam_id]) {
            groupedExams[row.exam_id] = {
                exam_id: row.exam_id,
                question_text: row.question_text,
                options: [],
            };
        }
        if (row.option_id) {
            groupedExams[row.exam_id].options.push({
                option_id: row.option_id,
                option_text: row.option_text,
                is_correct: row.is_correct,
            });
        }
    });

    return Object.values(groupedExams);
};

// Update an exam question
export const updateExamQuestion = async (examId, updatedQuestionText) => {
    const [result] = await db.query("UPDATE exams SET question_text = ? WHERE id = ?", [
        updatedQuestionText,
        examId,
    ]);
    return result.affectedRows > 0;
};

// Delete an exam question and its options
export const deleteExamQuestion = async (examId) => {
    const [result] = await db.query("DELETE FROM exams WHERE id = ?", [examId]);
    return result.affectedRows > 0;
};