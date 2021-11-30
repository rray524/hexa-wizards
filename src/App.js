import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import SingleMem from './Pages/Home/Team/SingleMem';
import ScrollToTop from './Shared/ScrollToTop';


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
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/members/:memID">
              <SingleMem></SingleMem>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
}

export default App;
