import React from 'react';
import './App.css';
import '../src/bootstrap/dist/css/bootstrap.min.css';
import '../src/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';
import Admin from './pages/Admin';
import RoomTableDetail from './pages/RoomTableDetail';
import RoomTableEdit from './pages/RoomTableEdit'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/roomtabledetail/:id" component={RoomTableDetail} />
          <Route exact path="/roomtableedit/:id" component={RoomTableEdit} />
          <Route exact path="/admin/" component={Admin} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
