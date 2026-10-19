import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import crest from '../../assets/crest.png';

const PortalLogin: React.FC = () => {
  const navigate = useNavigate();
  const [loginRole, setLoginRole] = useState<'admin' | 'parent'>('admin');

  const handleDemoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Route to the respective dashboard based on the selected demo role
    if (loginRole === 'admin') {
      navigate('/portal/admin');
    } else {
      navigate('/portal/parent');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="mx-auto w-16 h-16 rounded-xl flex items-center justify-center shadow-lg mb-6">
          <img src={crest} alt="Maldino Divine Academy Crest" className="w-10 h-10" />
        </div>
        <h2 className="text-center text-3xl font-serif font-bold text-maldino-navy">
          Sign in to your portal
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          {loginRole === 'admin' ? 'Admin & Staff Management Access' : 'Parent & Guardian Access'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-2xl sm:px-10 border border-slate-100">
          
          {/* Role Toggle for Demo Purposes */}
          <div className="flex p-1 bg-slate-100 rounded-lg mb-6">
            <button
              onClick={() => setLoginRole('admin')}
              className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                loginRole === 'admin' 
                  ? 'bg-white text-maldino-navy shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Staff / Admin
            </button>
            <button
              onClick={() => setLoginRole('parent')}
              className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${
                loginRole === 'parent' 
                  ? 'bg-white text-maldino-navy shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Parent
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleDemoLogin}>
            <div>
              <label className="block text-sm font-medium text-slate-700">
                {loginRole === 'admin' ? 'Staff ID / Email' : 'Registered Phone / Email'}
              </label>
              <div className="mt-1">
                <input 
                  type="text" 
                  key={loginRole} // Forces re-render to update defaultValue when switching roles
                  defaultValue={loginRole === 'admin' ? 'admin@maldinoacademy.com' : 'parent.johnson@email.com'}
                  className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-maldino-blue focus:border-maldino-blue sm:text-sm" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <div className="mt-1">
                <input 
                  type="password" 
                  defaultValue="********"
                  className="appearance-none block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-maldino-blue focus:border-maldino-blue sm:text-sm" 
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-maldino-blue focus:ring-maldino-blue border-slate-300 rounded" defaultChecked />
                <label className="ml-2 block text-sm text-slate-700">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-maldino-blue hover:text-maldino-navy">Forgot password?</a>
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-maldino-blue hover:bg-maldino-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maldino-blue transition-colors"
              >
                Access {loginRole === 'admin' ? 'Dashboard' : 'Portal'}
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center">
             <span className="text-xs text-slate-400">Demo Mode Active • Darkieson Code Studio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalLogin;