import Landing from './component/landingpage'
import { Routes, Route } from 'react-router-dom';
import Record from './component/record'
import Signup from './component/signup'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/record/:videoId" element={<Record />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
