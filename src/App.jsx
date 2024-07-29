import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Events from "./Components/Events";
import EventPage from "./Components/EventPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorComponent from "./Components/ErrorComponent";
import RootLayout from "./Pages/RootLayout.jsx";
import Test from "./Components/Test.jsx";
import Signup from "./Components/Signup.jsx";
import AddEventPage from "./Components/AddEventPage.jsx";
import Chat from "./Components/Chat.jsx";
import ProtectedRoutesChat from "./Components/ProtectedRoutes/ProtectedRoutesChat.jsx";
import ManangerRegister from "./Components/ManagerRegister.jsx";
import UploadClubs from "./Components/UploadClub.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route
            index
            path="/"
            element={
              <div>
                <Hero />
                <Features />
                <Footer />
              </div>
            }
          />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventId" element={<EventPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addevent" element={<AddEventPage />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoutesChat>
                <Chat />
              </ProtectedRoutesChat>
            }
          />
          <Route
            path="/manager-register"
            element={<ManangerRegister />}
          ></Route>
          <Route path="/upload-clubs" element={<UploadClubs />}></Route>
        </Route>

        <Route path="*" element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
