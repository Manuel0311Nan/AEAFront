
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "./config/routes";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/"/>} />
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
