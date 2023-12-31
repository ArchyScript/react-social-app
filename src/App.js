import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={ <Home /> } />
        <Route path="/profile" element={ <Profile /> } /> }
        <Route path="/login" element={ <Login /> } /> }
        <Route path="/register" element={ <Register /> } /> }
      </Routes>
    </Router>
  );
}

export default App;

