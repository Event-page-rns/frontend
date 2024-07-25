import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Features from "./Components/Features"
import Footer from "./Components/Footer"
import Login from "./Components/Login"
import Events from "./Components/Events"
import EventPage from "./Components/EventPage"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ErrorComponent from "./Components/ErrorComponent"
import RootLayout from "./Pages/RootLayout.jsx"
import Test from "./Components/Test.jsx"
import Signup from "./Components/Signup.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout/>}>
        <Route index path="/" element={<div>
          <Hero/>
          <Features/>
          <Footer/>
        </div>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/events/:eventId" element={<EventPage/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Route>
        <Route path="*" element={<ErrorComponent/>}/>
        
      </Routes>
      
    </BrowserRouter>
  )
}