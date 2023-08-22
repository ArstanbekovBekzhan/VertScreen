import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Events from './pages/Events.jsx';
import Layout from './component/Layout/Layout.jsx';
import './assets/styles/index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
        <Route path="/" index element={<Homepage/>} />
        <Route path="/" index element={<Events/>} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App