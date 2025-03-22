import React from 'react';
import { Container, Grid } from '@mui/material';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="App">
      <Container className= "top_60">
        <Grid container spacing={7}>    
          <Grid 
          item 
          xs={12} 
          sm={12} 
          lg={3} 
          md={4}>
            <Profile />
          </Grid>

          <Grid item xs>
            <Router>
              <Header />
              <div className='main-content container_shadow'>
              <Switch>
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/" component={Resume} />
              </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>

        </Grid>
      </Container>
    </div>
  );
}

export default App;