import '../src/App.css';
import '../src/Main.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Locations from './pages/Locations'
import Menu from './pages/Menu';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from '../src/Components/Footer';
import Contact from './pages/Contact';
import About from './pages/About';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <div className="flex-column justify-flex-start min-100-vh">
      <Navbar />
      <div className="container">
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/menu"
            element={<Menu />}
          />
          <Route 
            path="/contact"
            element={<Contact />}
          />
          <Route 
            path="/about"
            element={<About />}
          />
           <Route 
            path="/locations"
            element={<Locations />}
          />
        </Routes>
      </div>
    </div>
    <Footer/>
  </Router>
  </ApolloProvider>
  );
}

export default App;
