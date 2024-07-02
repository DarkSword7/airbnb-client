import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
