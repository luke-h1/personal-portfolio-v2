import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import FourOhFour from './components/FourOhFour/FourOhFour';
import Automation from './components/Projects/Automation/Automation';
import DrinkApp from './components/Projects/DrinkApp/DrinkApp';
import FormValidator from './components/Projects/FormValidator/FormValidator';
import Quotes from './components/Projects/Quotes/Quotes';
import PersonalSite from './components/Projects/PersonalSite/PersonalSite';
import BlogTest from './components/Blog/BlogTest';
import Home from './Pages/Home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route exact path="/Automation" component={Automation} />
          <Route exact path="/personal-site" component={PersonalSite} />
          <Route exact path="/drink-app" component={DrinkApp} />
          <Route exact path="/form-validator" component={FormValidator} />
          <Route exact path="/quotes-app" component={Quotes} />
          <Route exact path="/blog/postone" component={BlogTest} />
          <Route default component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
