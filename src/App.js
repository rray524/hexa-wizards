import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import SingleMem from './Pages/Home/Team/SingleMem';
import ScrollToTop from './Shared/ScrollToTop';
import Login from './Pages/Access/Login';
import Registration from './Pages/Access/Registration';
import AuthProvider from './context/AuthProvider';
import AdminRoute from './Pages/Access/AdminRoute/AdminRoute';
import Privacy from './Pages/Privacy/Privacy';


function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };



  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/privacy">
                <Privacy></Privacy>
              </Route>
              <AdminRoute path="/dashboard">
                <Dashboard></Dashboard>
              </AdminRoute>
              <Route path="/members/:memID">
                <SingleMem></SingleMem>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/registration">
                <Registration></Registration>
              </Route>

            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </AuthProvider>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}

export default App;
