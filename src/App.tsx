import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { IntroPage } from './pages/IntroPage/IntoPage';

function App() {
   
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="intro" element={true ? <IntroPage /> : null} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
