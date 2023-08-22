import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Home/Homepage.jsx';
import Layout from './component/Layout/Layout.jsx';
import './assets/styles/index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
        <Route path="/" index element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App