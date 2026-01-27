# AI-Proctored-System

An intelligent AI-powered proctoring system designed for secure and fair online examinations. The system uses computer vision and machine learning to detect cheating behaviors and maintains comprehensive logs for teachers and administrators.

## 🎯 Features

### For Students
- 📝 **Take Online Exams** - Multiple choice and coding questions
- 🎥 **Webcam Proctoring** - Real-time monitoring during exams
- 💻 **Coding Environment** - In-built code editor with syntax highlighting
- ⏱️ **Exam Timer** - Countdown timer for each exam
- 📊 **View Results** - Check exam scores and detailed feedback

### For Teachers
- ✅ **Create Exams** - Add multiple choice and coding questions
- 👁️ **Cheating Detection** - View logs of detected suspicious activities
- 📈 **Monitor Students** - Track exam progress and completion status
- 🔍 **Detailed Reports** - Review cheating logs with timestamps and evidence

### Core Technologies
- 🤖 **COCO-SSD** - Object detection for person detection
- 👤 **Face Detection** - Verify student identity during exams
- 📹 **TensorFlow.js** - Client-side ML model execution
- 🎬 **Webcam Integration** - Real-time video capture and analysis

## 🏗️ Project Structure

```
AI-Proctored-System/
├── backend/                    # Node.js + Express backend
│   ├── server.js              # Main server file
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── userController.js   # User authentication & management
│   │   ├── examController.js   # Exam management
│   │   ├── quesController.js   # Question management
│   │   ├── codingController.js # Coding question handling
│   │   ├── resultController.js # Exam results
│   │   ├── cheatingLogController.js # Cheating detection logs
│   │   └── calculatemarks.js   # Grade calculation
│   ├── models/
│   │   ├── userModel.js        # User schema
│   │   ├── examModel.js        # Exam schema
│   │   ├── quesModel.js        # Question schema
│   │   ├── codingQuestionModel.js
│   │   ├── resultModel.js      # Result schema
│   │   └── cheatingLogModel.js # Cheating log schema
│   ├── routes/
│   │   ├── userRoutes.js       # User endpoints
│   │   ├── examRoutes.js       # Exam endpoints
│   │   ├── codingRoutes.js     # Coding endpoints
│   │   └── resultRoutes.js     # Result endpoints
│   ├── middleware/
│   │   ├── authMiddleware.js   # JWT authentication
│   │   └── errorMiddleware.js  # Error handling
│   ├── utils/
│   │   └── generateToken.js    # JWT token generation
│   └── .env                    # Environment variables
│
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── App.js              # Main app component
│   │   ├── index.js            # React entry point
│   │   ├── store.js            # Redux store configuration
│   │   ├── axios.js            # Axios instance
│   │   ├── theme/
│   │   │   ├── DefaultColors.js   # Light theme
│   │   │   ├── DarkColors.js      # Dark theme
│   │   │   ├── Typography.js
│   │   │   └── Shadows.js
│   │   ├── slices/
│   │   │   ├── authSlice.js    # Auth state management
│   │   │   ├── themeSlice.js   # Theme state management
│   │   │   ├── examApiSlice.js # Exam API calls
│   │   │   ├── apiSlice.js     # Base API configuration
│   │   │   ├── cheatingLogApiSlice.js
│   │   │   └── usersApiSlice.js
│   │   ├── components/
│   │   │   ├── shared/
│   │   │   ├── forms/
│   │   │   └── custom-scroll/
│   │   ├── layouts/
│   │   │   ├── full/
│   │   │   │   ├── FullLayout.js
│   │   │   │   ├── ExamLayout.jsx
│   │   │   │   ├── header/
│   │   │   │   └── sidebar/
│   │   │   └── blank/
│   │   ├── views/
│   │   │   ├── authentication/
│   │   │   │   ├── Login.js
│   │   │   │   ├── Register.js
│   │   │   │   ├── PrivateRoute.jsx
│   │   │   │   └── TeacherRoute.jsx
│   │   │   ├── student/
│   │   │   │   ├── ExamPage.jsx
│   │   │   │   ├── TestPage.jsx
│   │   │   │   ├── CodeDetails.jsx
│   │   │   │   ├── ResultPage.jsx
│   │   │   │   └── Components/
│   │   │   ├── teacher/
│   │   │   │   ├── CreateExamPage.jsx
│   │   │   │   ├── AddQuestions.jsx
│   │   │   │   ├── ExamLogPage.jsx
│   │   │   │   └── components/
│   │   │   └── utilities/
│   │   ├── routes/
│   │   │   └── Router.js       # Route configuration
│   │   ├── context/
│   │   │   └── CheatingLogContext.jsx
│   │   ├── assets/
│   │   └── public/
│   ├── package.json
│   └── .env
│
└── package.json               # Root package.json (concurrently)
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Git**

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/gauravkumar7tech/AI-Proctored-System.git
   cd AI-Proctored-System
   ```

2. **Install Root Dependencies**
   ```bash
   npm install
   ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   
   Create `.env` file in the backend folder:
   ```env
   MONGODB_URI=mongodb://localhost:27017/ai-proctored
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```
   
   Create `.env` file in the frontend folder:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

### Running the Project

#### Option 1: Run Both Backend & Frontend Concurrently
```bash
# From root directory
npm run dev
```

#### Option 2: Run Separately
```bash
# Terminal 1 - Backend
npm run server

# Terminal 2 - Frontend
npm run client
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📋 User Roles & Authentication

### Student
- Register/Login with email and password
- Take assigned exams
- View exam results
- See code submissions

### Teacher
- Create and manage exams
- Add questions (multiple choice & coding)
- Monitor student exam sessions
- Review cheating detection logs
- Generate exam reports

### Authentication
- JWT-based authentication
- Secure password hashing with bcryptjs
- Protected routes with PrivateRoute & TeacherRoute components

## 🎓 Exam Types

### Multiple Choice Questions
- Single correct answer per question
- Instant marking
- Options shuffled for fairness

### Coding Questions
- In-built code editor with syntax highlighting
- Support for multiple programming languages
- Real-time code execution and testing

## 👁️ Cheating Detection Features

### Detection Methods
1. **Face Detection** - Verify student identity
2. **Person Detection** - Detect if multiple people are present
3. **Tab Switching** - Detect window focus changes
4. **Activity Logging** - Track all suspicious activities

### Cheating Log Features
- **Timestamp** - When the incident occurred
- **Event Type** - Type of suspicious activity
- **Student Info** - Which student triggered the alert
- **Exam Details** - Exam name and question details
- **Evidence** - Screenshot or description of incident

## 🎨 Theme System

The application includes a **dark/light theme switcher**:
- **Light Theme** - Professional light colors for daytime use
- **Dark Theme** - Dark mode for comfortable viewing
- **Toggle Button** - Sun/Moon icon in the header
- **Persistent Storage** - Theme preference saved in localStorage

## 🛠️ Technology Stack

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - UI library
- **Redux Toolkit** - State management
- **Material-UI (MUI)** - Component library
- **React Router v6** - Routing
- **Axios** - HTTP client
- **TensorFlow.js** - ML models
- **React Webcam** - Video capture

### AI/ML
- **COCO-SSD** - Object detection
- **Face-api.js** - Face detection
- **TensorFlow.js** - ML runtime

## 📦 Dependencies

### Backend Key Dependencies
- express
- mongoose
- jsonwebtoken
- bcryptjs
- dotenv
- cors
- cookie-parser
- express-async-handler

### Frontend Key Dependencies
- react
- react-dom
- react-router-dom
- redux
- @reduxjs/toolkit
- @mui/material
- axios
- @tensorflow/tfjs
- @tensorflow-models/coco-ssd
- @tensorflow-models/face-detection
- react-webcam

## 🔐 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/ai-proctored
PORT=5000
JWT_SECRET=your_secure_secret_key
NODE_ENV=development
```

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:5000
```

## 📚 API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `POST /api/users/logout` - User logout
- `GET /api/users/profile` - Get user profile

### Exams
- `GET /api/exams` - Get all exams
- `POST /api/exams` - Create exam (Teacher)
- `GET /api/exams/:id` - Get exam details
- `PUT /api/exams/:id` - Update exam (Teacher)
- `DELETE /api/exams/:id` - Delete exam (Teacher)

### Questions
- `GET /api/questions` - Get all questions
- `POST /api/questions` - Create question (Teacher)
- `GET /api/questions/:id` - Get question details
- `PUT /api/questions/:id` - Update question (Teacher)
- `DELETE /api/questions/:id` - Delete question (Teacher)

### Results
- `POST /api/results` - Submit exam result
- `GET /api/results/:examId` - Get exam results
- `GET /api/results/student/:studentId` - Get student results

### Cheating Logs
- `POST /api/cheating-logs` - Create cheating log
- `GET /api/cheating-logs` - Get all logs
- `GET /api/cheating-logs/:examId` - Get logs for specific exam

## 🔄 Redux Store Structure

```javascript
{
  auth: {
    userInfo: { id, name, email, role, ... },
    loading: boolean,
    error: string
  },
  theme: {
    mode: 'light' | 'dark'
  },
  [apiSlice]: { ... }
}
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB service is running
- Check connection string in `.env`
- Verify network access if using MongoDB Atlas

### Frontend Not Starting
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`
- Check Node.js version compatibility

### Webcam/Camera Issues
- Grant browser permissions for camera access
- Check camera drivers are up to date
- Try a different browser if issues persist

### CORS Errors
- Verify backend is running on port 5000
- Check `REACT_APP_API_URL` in frontend `.env`
- Ensure CORS is properly configured in backend

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push -u origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**Gaurav Kumar**
- GitHub: [@gauravkumar7tech](https://github.com/gauravkumar7tech)

## 🙏 Acknowledgments

- Material-UI for excellent component library
- TensorFlow.js team for ML models
- React community for amazing tools and libraries
- All contributors and testers

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact the development team
- Check existing documentation

---

**Happy Proctoring! 🎓**

*Last Updated: January 27, 2026*
