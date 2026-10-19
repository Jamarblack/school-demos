
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

// Public Components
import MaldinoNavbar from './components/MaldinoNavbar';
import MaldinoHero from './components/MaldinoHero';
import MaldinoFeatures from './components/MaldinoFeatures';
import MaldinoCTA from './components/MaldinoCTA';
import MaldinoFooter from './components/MaldinoFooter';

// Portal Pages
import PortalLogin from './pages/portal/PortalLogin';
import AdminDashboard from './pages/portal/AdminDashboard';
import ParentDashboard from './pages/portal/ParentDashboard';

const PublicLayout = () => (
  <div className="min-h-screen bg-slate-50 font-sans selection:bg-maldino-gold selection:text-maldino-navy">
    <MaldinoNavbar />
    <main>
      <MaldinoHero />
      <MaldinoFeatures />
      <MaldinoCTA />
    </main>
    <MaldinoFooter />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />} />
        
        {/* Portal Routes */}
        <Route path="/portal/login" element={<PortalLogin />} />
        <Route path="/portal/admin" element={<AdminDashboard />} />
        <Route path="/portal/parent" element={<ParentDashboard />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;