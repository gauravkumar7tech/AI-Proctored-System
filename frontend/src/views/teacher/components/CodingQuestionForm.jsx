import React from 'react';
import { TextField, Box, Typography } from '@mui/material';

const CodingQuestionForm = ({ formik }) => {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Coding Question
      </Typography>

      <TextField
        fullWidth
        id="codingQuestion.question"
        name="codingQuestion.question"
        label="Question"
        multiline
        rows={3}
        value={formik.values.codingQuestion.question}
        onChange={formik.handleChange}
        error={
          formik.touched.codingQuestion?.question && Boolean(formik.errors.codingQuestion?.question)
        }
        helperText={
          formik.touched.codingQuestion?.question && formik.errors.codingQuestion?.question
        }
        sx={{ mb: 2 }}
      />

      <TextField
        fullWidth
        id="codingQuestion.description"
        name="codingQuestion.description"
        label="Description/Instructions"
        multiline
        rows={4}
        value={formik.values.codingQuestion.description}
        onChange={formik.handleChange}
        error={
          formik.touched.codingQuestion?.description &&
          Boolean(formik.errors.codingQuestion?.description)
        }
        helperText={
          formik.touched.codingQuestion?.description && formik.errors.codingQuestion?.description
        }
        sx={{ mb: 3 }}
      />
    </Box>
  );
};

export default CodingQuestionForm;
