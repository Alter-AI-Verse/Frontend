import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import ChatPage from "./components/chat/ChatPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import { ProfileComponent } from "./components/profile/ProfileComponent";
import UserProtectedWrapper from "./components/protectedWrappers/UserProtectedWrappe";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat-history" element={<UserProtectedWrapper><ChatPage /></UserProtectedWrapper>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/onboarding" element={<UserProtectedWrapper><Onboarding /></UserProtectedWrapper>} />
        <Route path="/dashboard" element={<UserProtectedWrapper><Dashboard /></UserProtectedWrapper>} />
        <Route path="/profile" element={<UserProtectedWrapper><ProfileComponent /></UserProtectedWrapper>} />
      </Routes>
    </>
  );
}

export default App;
