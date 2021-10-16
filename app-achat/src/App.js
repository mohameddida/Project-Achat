import './App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'; 
import NavBar from './Components/NavBar.js/NavBar';
import HomeScreen from './View/HomeScreen';
import Laptopscreen from './View/Laptopscreen';
import PhoneScreen from './View/PhoneScreen';
import AccessoiresScreen from './View/AccessoiresScreen';
import ContactScreen from './View/ContactScreen';
import SettingScreen from './View/SettingScreen';
import ProfileScreen from './View/ProfileScreen';
import Header from './models/Header';
import Footer from './models/Footer';
function App() {
  return (
    <Router>
      <Header />
      <div className="App bg-gray-900">
        <NavBar className="shadow" />
         
            <Switch>
              <Route exact path="/" >
                <HomeScreen />
              </Route>
              <Route  path="/Home" >
                <HomeScreen />
              </Route>
              <Route path="/Laptops" component={Laptopscreen}>
                <Laptopscreen />
              </Route>
              <Route path="/Phones" component={PhoneScreen}>
                <PhoneScreen />
              </Route>
              <Route path="/Accessoires" component={AccessoiresScreen}>
                <AccessoiresScreen />
              </Route>
              <Route path="/Contacts" component={ContactScreen}>
                <ContactScreen />
              </Route>
              <Route path="/Setting" component={SettingScreen}>
                <SettingScreen />
              </Route>
              <Route path="/Profile" component={ProfileScreen}>
                <ProfileScreen />
              </Route>
            </Switch>
          </div>
          <Footer />
    </Router>
  );
}

export default App;
