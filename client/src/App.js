import './App.css';
import Header from './components/Header'; // anything exported as default does not require {}
import GetAll from './components/AllProfiles';
import New from './components/CreateProfile';
import Edit from './components/EditProfile';
import Details from './components/ProfileDetails';
import { Router } from '@reach/router'; // since router is not exported as default {} are required

function App() {
  return (
    <div className="App">
      <Header className="header"></Header>
      <Router>
        <GetAll path="/" />
        <New path="/profile/new" />
        <Details path="/profile/:id" />
        <Edit path="/profile/:id/edit" />
      </Router>
    </div>
  );
}
export default App;