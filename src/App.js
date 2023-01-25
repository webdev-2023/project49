/*Requirement Statement: 
 Find a published web page that you particularly like. 
 It could be anything from Netflix, Takealot, UCook, or any other website you like!
  ● Create a ReactJS application that’s a clone of the website. Don’t worry about adding state changes to your application.
  ● Using only function components and custom CSS rules, try to recreate the webpage as best you can.
  ● Ensure at least one function component passes props to the applicable component and renders the information suited to your webpage.
  ● Add the URL of the webpage you are recreating as a link at the bottom of your webpage.

Note 1: I cloned the landing (first) page of the website https://www.ucook.com/
Note 2: I have created other dummy webpages for the navigation menu to work properly
*/

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import LandingPage from "./components/LandingPage"
import Racepies from "./components/Racepies"
import SavingCenter from './components/SavingCenter';
import Videos from './components/Videos';
import ContactUS from './components/ContactUS';
import logo from './images/UCook-official-logo.png'


import Footer from "./components/Footer"

function App() {

  return (
    <div className="page-container">
      <Header logo={logo} />
      <div className='content-wrap'>
        {/* React Route for defining navigation between pages */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/recipe" element={<Racepies />} />
          <Route exact path="/saving" element={<SavingCenter />} />
          <Route exact path="/videos" element={<Videos />} />
          <Route path="/contactus" element={<ContactUS />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App

