import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import("./Pages/Home/Home"));
const Login = lazy(() => import("./Pages/Auth/Login"));
const Regis = lazy(() => import("./Pages/Auth/Regis"));
const Reset = lazy(() => import("./Pages/Auth/Reset"));

function App() {
  const [user, setUser] = useState(window.localStorage.getItem("user-auth"));
  return (
    <Suspense fallback={<>Loading</>}>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/login"
            element={
              !user ? <Login setUser={setUser} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/regis"
            element={
              !user ? <Regis setUser={setUser} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/reset"
            element={
              !user ? <Reset setUser={setUser} /> : <Navigate to="/" replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
