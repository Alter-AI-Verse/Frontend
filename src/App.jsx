import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import ChatPage from "./components/chat/ChatPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/chat-history" element={<ChatPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
