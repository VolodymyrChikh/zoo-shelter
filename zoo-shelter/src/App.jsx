import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/signup" element={<Register />} /> */}
        {/* <Route path="/signin" element={<Authenticate />} /> */}
        <Route path="/main" element={<MainPage />} />
        <Route path="*" element={<div style={{ color: 'red', fontSize: '48px', }}>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
