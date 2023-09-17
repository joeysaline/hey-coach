// eslint-disable-next-line no-unused-vars
import { Container } from "react-bootstrap";
import { AuthProvider } from "./user-auth/contexts/AuthContexts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Main from "./Main.tsx";
import SignUp from "./user-auth/SignUp";
import LogIn from "./user-auth/LogIn";
import { ActivityProvider } from "./contexts/ActivityContexts";

function App() {
  return (
    <Router>
      <AuthProvider>
        <ActivityProvider>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/dash" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </ActivityProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
