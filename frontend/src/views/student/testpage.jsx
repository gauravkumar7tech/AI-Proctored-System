import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Grid, CircularProgress } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import BlankCard from 'src/components/shared/BlankCard';
import MultipleChoiceQuestion from './Components/MultipleChoiceQuestion';
import NumberOfQuestions from './Components/NumberOfQuestions';
import WebCam from './Components/WebCam';
import { useGetExamsQuery, useGetQuestionsQuery } from '../../slices/examApiSlice';
import { useSaveCheatingLogMutation } from 'src/slices/cheatingLogApiSlice';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useCheatingLog } from 'src/context/CheatingLogContext';

const TestPage = () => {
  const { examId, testId } = useParams();
  const [selectedExam, setSelectedExam] = useState(null);
  const [examDurationInSeconds, setExamDurationInSeconds] = useState(0);
  const { data: userExamdata, isLoading: isExamsLoading } = useGetExamsQuery();
  const { userInfo } = useSelector((state) => state.auth);
  const { cheatingLog, updateCheatingLog, resetCheatingLog } = useCheatingLog();
  const [saveCheatingLogMutation] = useSaveCheatingLogMutation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMcqCompleted, setIsMcqCompleted] = useState(false);

  useEffect(() => {
    if (userExamdata) {
      const exam = userExamdata.find((exam) => exam.examId === examId);
      if (exam) {
        setSelectedExam(exam);
        // Convert duration from minutes to seconds
        setExamDurationInSeconds(exam.duration);
        console.log('Exam duration (minutes):', exam.duration);
      }
    }
  }, [userExamdata, examId]);

  const [questions, setQuestions] = useState([]);
  const { data, isLoading } = useGetQuestionsQuery(examId);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setQuestions(data);
    }
  }, [data]);

  const handleMcqCompletion = () => {
    setIsMcqCompleted(true);
    // Reset cheating log for coding exam
    resetCheatingLog(examId);
    navigate(`/exam/${examId}/codedetails`);
  };

  const handleTestSubmission = async () => {
    if (isSubmitting) return; // Prevent multiple submissions

    try {
      setIsSubmitting(true);

      // Make sure we have the latest user info in the log
      const updatedLog = {
        ...cheatingLog,
        username: userInfo.name,
        email: userInfo.email,
        examId: examId,
        noFaceCount: parseInt(cheatingLog.noFaceCount) || 0,
        multipleFaceCount: parseInt(cheatingLog.multipleFaceCount) || 0,
        cellPhoneCount: parseInt(cheatingLog.cellPhoneCount) || 0,
        prohibitedObjectCount: parseInt(cheatingLog.prohibitedObjectCount) || 0,
      };

      console.log('Submitting cheating log:', updatedLog);

      // Save the cheating log
      const result = await saveCheatingLogMutation(updatedLog).unwrap();
      console.log('Cheating log saved:', result);

      toast.success('Test submitted successfully!');
      navigate('/Success');
    } catch (error) {
      console.error('Error saving cheating log:', error);
      toast.error(
        error?.data?.message || error?.message || 'Failed to save test logs. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveUserTestScore = () => {
    setScore(score + 1);
  };

  if (isExamsLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <PageContainer title="TestPage" description="This is TestPage">
      <Box pt="3rem">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} lg={7}>
            <BlankCard>
              <Box
                width="100%"
                minHeight="400px"
                boxShadow={3}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <MultipleChoiceQuestion
                    submitTest={isMcqCompleted ? handleTestSubmission : handleMcqCompletion}
                    questions={data}
                    saveUserTestScore={saveUserTestScore}
                  />
                )}
              </Box>
            </BlankCard>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <BlankCard>
                  <Box
                    maxHeight="300px"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                      justifyContent: 'center',
                      overflowY: 'auto',
                      height: '100%',
                    }}
                  >
                    <NumberOfQuestions
                      questionLength={questions.length}
                      submitTest={isMcqCompleted ? handleTestSubmission : handleMcqCompletion}
                      examDurationInSeconds={examDurationInSeconds}
                    />
                  </Box>
                </BlankCard>
              </Grid>
              <Grid item xs={12}>
                <BlankCard>
                  <Box
                    width="300px"
                    maxHeight="180px"
                    boxShadow={3}
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    justifyContent="center"
                  >
                    <WebCam cheatingLog={cheatingLog} updateCheatingLog={updateCheatingLog} />
                  </Box>
                </BlankCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default TestPage;
