//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

//styled-component
import { DashboardBody, StyledContainer } from "./components/Styles";

//LoginSpinner
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <StyledContainer>
            <Login />
          </StyledContainer>
        </Route>

        <Route path="/dashboard">
          <DashboardBody>
            <Dashboard />
          </DashboardBody>
        </Route>

        <Route path="/">
          <StyledContainer>
            <Home />
          </StyledContainer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
