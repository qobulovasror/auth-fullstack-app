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
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [token, setToken] = useState(window.localStorage.getItem("user-auth")) 
  return (
    <Suspense fallback={<>Loading</>}>
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={token ? <Home user={user} setUser={setUser} setToken={setToken}/> : <Navigate to="/login" replace />}
          />
          <Route
            path="/login"
            element={
              !token ? <Login setToken={setToken} setUser={setUser} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/regis"
            element={
              !token ? <Regis setToken={setToken} setUser={setUser} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/reset"
            element={
              !token ? <Reset setToken={setToken} setUser={setUser} /> : <Navigate to="/" replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
