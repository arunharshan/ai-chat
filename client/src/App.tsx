import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/home/Home';
import Profile from './pages/Profile/Profile';
import History from './pages/history/History';
import Login from './pages/Login/Login';
import PageNotFound from './pages/notfound/PageNotFound';
import { AiProvider } from './context/AiContext';
import { ThemeProvider } from "./context/ThemeContext";

import ErrorBoundary from './utils/ErrorBoundary';
import UserAuthorizationProvider from './context/AuthContext';

const App = () => {
  return (
    <ErrorBoundary>
        <UserAuthorizationProvider>
            <AiProvider>
                  <ThemeProvider>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="*" element={<PageNotFound/>} />
                <Route path="/history" element={
                    <ProtectedRoute>
                        <History/>
                    </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
         </ThemeProvider>
    </AiProvider>
        </UserAuthorizationProvider>
    </ErrorBoundary>
  )
}

export default App