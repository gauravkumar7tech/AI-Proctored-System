import asyncHandler from "express-async-handler";
import CheatingLog from "../models/cheatingLogModel.js";

// @desc Save cheating log data
// @route POST /api/cheatingLogs
// @access Private
const saveCheatingLog = asyncHandler(async (req, res) => {
  const {
    noFaceCount,
    multipleFaceCount,
    cellPhoneCount,
    prohibitedObjectCount,
    examId,
    username,
    email,
    screenshots,
  } = req.body;

  console.log("Received cheating log data:", {
    noFaceCount,
    multipleFaceCount,
    cellPhoneCount,
    prohibitedObjectCount,
    examId,
    username,
    email,
    screenshots,
  });

  const cheatingLog = new CheatingLog({
    noFaceCount,
    multipleFaceCount,
    cellPhoneCount,
    prohibitedObjectCount,
    examId,
    username,
    email,
    screenshots: screenshots || [],
  });

  const savedLog = await cheatingLog.save();
  console.log("Saved cheating log:", savedLog);

  if (savedLog) {
    res.status(201).json(savedLog);
  } else {
    res.status(400);
    throw new Error("Invalid Cheating Log Data");
  }
});

// @desc Get all cheating log data for a specific exam
// @route GET /api/cheatingLogs/:examId
// @access Private
const getCheatingLogsByExamId = asyncHandler(async (req, res) => {
  const examId = req.params.examId;
  const cheatingLogs = await CheatingLog.find({ examId });

  res.status(200).json(cheatingLogs);
});

export { saveCheatingLog, getCheatingLogsByExamId };
