import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { LoadingContextProvider } from "./context/Loading";
import Page1 from "./screens/Page1";
import Page2 from "./screens/Page2";
import { ActionExampleContextProvider } from "./context/actionExampleContext";
import PrivateRoute from "./hoc/PrivateRoute";
import { ROLE } from "./constants/roles";

function App() {
  return (
    <Router>
      <ActionExampleContextProvider>
        <LoadingContextProvider>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route 
              path="/page2" 
              element={
                <PrivateRoute navigateToRouteIfNotAuthenticated={'/'} roles={[ROLE.user]}>
                  <Page2 />
                </PrivateRoute>
              } 
            />
          </Routes>
        </LoadingContextProvider>
      </ActionExampleContextProvider>
    </Router>
  );
}

export default App;
