import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog';
import SignUpAs from './components/SignUpAs/SignUpAs';
import SignUpAsShelter from './components/SignUpAsShelter/SignUpAsShelter';
import SignUpAsVolunteer from './components/SignUpAsVolunteer/SignUpAsVolunteer';
import AskForm from './pages/AskForm/AskForm';
import SendAnnouncment from './pages/SendAnnouncment/SendAnnouncment';
import AnimalDetails from './pages/AnimalDetails/AnimalDetails';
import VolunteerProfile from './pages/VolunteerProfile/VolunteerProfile';
import VolunteerProfileToSee from './pages/VolunteerProfile/Edit/VolunteerProfileToSee';
import ShelterProfile from './pages/ShelterProfile/ShelterProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/signup-as" element={<SignUpAs />}/>
        <Route path="/signup-as/shelter" element={<SignUpAsShelter />} />
        <Route path="/signup-as/volunteer" element={<SignUpAsVolunteer />} />
        <Route path="/ask-form" element={<AskForm />} />
        <Route path="/send-announcment" element={<SendAnnouncment />} />
        <Route path="/animal/:id" element={<AnimalDetails />} />
        <Route path="/volunteer-profile/me" element={<VolunteerProfile />} />
        <Route path="/volunteer-profile" element={<VolunteerProfileToSee />} />
        <Route path="/shelter-profile" element={<ShelterProfile />} />
        {/* Redirect to SignUpAs if no match */}
        <Route path="*" element={<div style={{ color: 'red', fontSize: '48px', }}>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
