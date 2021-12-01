import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import SingleMem from './Pages/Home/Team/SingleMem';
import ScrollToTop from './Shared/ScrollToTop';


function App() {
  const [showButton, setShowButton] = useState(false);
  const [scroll, setScroll] = useState(0);

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

  // progress bar
  useEffect(() => {

    let progressBarHandler = () => {

      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    }

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  return (
    <div className="App">
      <div id="progressBarContainer">
        <div id="progressBar" style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }} />
      </div>
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
