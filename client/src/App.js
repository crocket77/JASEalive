import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';


const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header />
          
          <Routes>
            <Route
                path="/" 
                element={<Home />} 
            />
            <Route 
                path="/login" 
                element={<Login />} 
            />
            <Route 
                path="/signup" 
                element={<Signup />} 
            />
            <Route 
                path="/profile/:username" 
                element={<Profile />} 
            />
            <Route 
                path="/profile/:username" 
                element={<Profile />} 
            />
          </Routes>

          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
