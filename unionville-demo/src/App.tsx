import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

// Public Components
import UnionvilleNavbar from './components/UnionvilleNavbar';
import UnionvilleHero from './components/UnionvilleHero';
// import UnionvilleBento from './components/UnionvilleBento';
import UnionvilleCTA from './components/UnionvilleCTA';
import UnionvilleFooter from './components/UnionvilleFooter';

// Portal Pages
import UnionvillePortalLogin from './pages/portal/UnionvillePortalLogin';
import UnionvilleAdminDashboard from './pages/portal/UnionvilleAdminDashboard';
import UnionvilleParentDashboard from './pages/portal/UnionvilleParentDashboard';

const PublicLayout = () => (
  <div className="min-h-screen bg-stone-50 font-sans selection:bg-union-teal selection:text-white">
    <UnionvilleNavbar />
    <main>
      <UnionvilleHero />
      {/* <UnionvilleBento /> */}
      <UnionvilleCTA />
    </main>
    <UnionvilleFooter />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />} />
        
        {/* Portal Routes */}
        <Route path="/portal/login" element={<UnionvillePortalLogin />} />
        <Route path="/portal/admin" element={<UnionvilleAdminDashboard />} />
        <Route path="/portal/parent" element={<UnionvilleParentDashboard />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;