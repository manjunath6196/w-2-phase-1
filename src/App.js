//import logo from './logo.svg';
import './App.css';
//Get homepage component to main component
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';
//import Header from './components/header/header.component'

//RENDERING
function App() {
  return (
    <div>
      
      <Route exact path="/" component={HomePage}/>
      
    </div>
  );
}

export default App;