import './App.css';
import {
  Route,
  Navigate,
  Routes,
  Outlet
} from "react-router-dom";
import { withSnackbar } from 'notistack';
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Home from './pages/Home'
import ChangePassword from './pages/ChangePassword'
import CoachesList from './pages/List'
import PersonalInfo from './pages/PersonalInfo';
import MasterDashbaord from './pages/MasterDashbaord';
import Calender from './pages/Calender';
import InstructorDashboard from './pages/InstructorDashboard';
import NutritionDashboard from './pages/NutritionDashboard';
import { useStore } from './ContextApi/MyContext';

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export const My404Component = () => <div>Not found</div>

function App() {
  const [{ user }, dispatch] = useStore()
  return (
    <Routes  >
      <Route path="/" element={<Home />} />
      <Route
        path="instructor-dashboard"
        element={
          <ProtectedRoute user={user}>
            <InstructorDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="nutrition-dashboard"
        element={
          <ProtectedRoute user={user}>
            <NutritionDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="master-dashboard"
        element={
          <ProtectedRoute user={user}>
            <MasterDashbaord />
          </ProtectedRoute>
        }
      />
      <Route
        path="change-password"
        element={
          <ProtectedRoute user={user}>
            <ChangePassword />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="personal-info"
        element={
          <ProtectedRoute user={user}>
            <PersonalInfo />
          </ProtectedRoute>
        }
      />
      <Route
        path="calender"
        element={
          <ProtectedRoute user={user}>
            <Calender />
          </ProtectedRoute>
        }
      />
      <Route path="/list" element={<CoachesList />} />
      <Route path="/register" element={<SignUp />} />
      <Route path='/*' exact={true} element={<My404Component />} />
    </Routes>
  );
}
export default withSnackbar(App);
