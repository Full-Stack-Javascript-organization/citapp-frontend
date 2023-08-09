import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { Login } from "./views/auth/SignIn";
import { Register } from "./views/auth/SignUp";
import { Dashboard } from "./views/admin/Dashboard";
import { Sidebar } from "./views/admin/Sidebar";
import { Header } from "./views/admin/Header";
import { Main } from "./views/admin/Main";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Navbar } from "./views/client/Navbar";
import { MainClient } from "./views/client/MainClient";
import { Plan } from "./views/client/Plan";
import { Company } from "./views/client/Company";
import { ImageSlider } from "./views/client/ImageSlider";
import { Footer } from "./views/client/Footer";
import { CreateReservation } from "./views/reservations/CreateReservation";
import { HomePageBody } from "./views/client/HomePage";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <MainClient />
                <Plan />
                <Company />
                {
                  // <ImageSlider />
                }
                <Footer />
              </>
            }
          />
          <Route
            path="/homepage"
            element={
              <ProtectedRoute>
                <div className="flex">
                  <div className="basis-[100%] border  h-[100vh]">
                    <Header />
                    <div>
                      <HomePageBody />
                    </div>
                    <Footer />
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/reservation"
            element={
              <div className="">
                
                <CreateReservation />
                <Footer />
              </div>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <div className="flex overflow-scroll ">
                  <div className="basis-[12%] h-[100vh]">
                    <Sidebar />
                  </div>
                  <div className="basis-[88%] border overflow-scroll h-[100vh]">
                    <Header />
                    <div>
                      <Main />
                    </div>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
