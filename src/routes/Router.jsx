import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../components/Home/Home"
import Login from "../components/Login/Login"
import Navbar from "../components/Navbar/Navbar"
import Register from "../components/Register/Register"

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router