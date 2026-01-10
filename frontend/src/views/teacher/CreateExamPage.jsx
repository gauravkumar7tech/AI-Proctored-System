import React from 'react';
import { Grid, Box, Card, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import ExamForm from './components/ExamForm';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useCreateExamMutation } from '../../slices/examApiSlice.js';
import axiosInstance from '../../axios';

const examValidationSchema = yup.object({
  examName: yup.string().required('Exam Name is required'),
  totalQuestions: yup
    .number()
    .typeError('Total Number of Questions must be a number')
    .integer('Total Number of Questions must be an integer')
    .positive('Total Number of Questions must be positive')
    .required('Total Number of Questions is required'),
  duration: yup
    .number()
    .typeError('Exam Duration must be a number')
    .integer('Exam Duration must be an integer')
    .min(1, 'Exam Duration must be at least 1 minute')
    .required('Exam Duration is required'),
  liveDate: yup.date().required('Live Date and Time is required'),
  deadDate: yup.date().required('Dead Date and Time is required'),
  codingQuestion: yup.object().shape({
    question: yup.string().required('Coding Question is required'),
    description: yup.string().required('Question Description is required'),
  }),
});

const CreateExamPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [createExam, { isLoading }] = useCreateExamMutation();

  const initialExamValues = {
    examName: '',
    totalQuestions: '',
    duration: '',
    liveDate: '',
    deadDate: '',
    codingQuestion: {
      question: '',
      description: '',
    },
  };

  const handleSubmit = async (values) => {
    try {
      // First create the exam
      const examResponse = await createExam(values).unwrap();
      console.log('Exam Response:', examResponse);

      if (examResponse) {
        // Get exam ID from response (handle different possible formats)
        const examId = examResponse.examId || examResponse._id || examResponse.id;

        if (!examId) {
          console.error('No exam ID found in response:', examResponse);
          toast.error('Failed to get exam ID');
          return;
        }

        // Then create the coding question
        const codingQuestionData = {
          question: values.codingQuestion.question,
          description: values.codingQuestion.description,
          examId: examId,
        };

        console.log('Coding Question Data:', codingQuestionData);

        try {
          const codingResponse = await axiosInstance.post(
            '/api/coding/question',
            codingQuestionData,
            {
              withCredentials: true,
            },
          );
          console.log('Coding Response:', codingResponse.data);

          if (codingResponse.data.success) {
            toast.success('Exam and coding question created successfully');
            formik.resetForm();
          } else {
            console.error('Failed to create coding question:', codingResponse.data);
            toast.error('Failed to create coding question');
          }
        } catch (codingError) {
          console.error('Coding Question Error:', codingError.response?.data || codingError);
          toast.error(codingError.response?.data?.message || 'Failed to create coding question');
        }
      }
    } catch (err) {
      console.error('Exam Creation Error:', err);
      toast.error(err?.data?.message || err.error || 'Failed to create exam');
    }
  };

  const formik = useFormik({
    initialValues: initialExamValues,
    validationSchema: examValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <PageContainer title="Create Exam" description="Create a new exam">
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            xl={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '800px' }}>
              <ExamForm
                formik={formik}
                title={
                  <Typography variant="h3" textAlign="center" color="textPrimary" mb={1}>
                    Create Exam
                  </Typography>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default CreateExamPage;
