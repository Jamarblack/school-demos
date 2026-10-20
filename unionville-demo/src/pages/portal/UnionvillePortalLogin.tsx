import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import crest from '../../assets/crest.png';

const UnionvillePortalLogin: React.FC = () => {
  const navigate = useNavigate();
  const [loginRole, setLoginRole] = useState<'admin' | 'parent'>('admin');

  const handleDemoLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginRole === 'admin') {
      navigate('/portal/admin');
    } else {
      navigate('/portal/parent');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* Background Accent from the uniform's thin stripes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-union-red via-union-gold to-union-teal"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center animate-fade-in-up relative z-10">
        <div className="mx-auto w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center shadow-lg shadow-union-navy/20 mb-6 border-b-4 border-union-navy">
          <img src={crest} alt="Unionville Crest" className="w-10 h-10" />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-stone-900 tracking-tight">
          Welcome to the Portal
        </h2>
        <p className="mt-2 text-center text-sm font-medium text-stone-500">
          {loginRole === 'admin' ? 'Staff & Administration Access' : 'Parent & Guardian Access'}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md animate-fade-in-up relative z-10">
        <div className="bg-white py-8 px-4 shadow-xl shadow-stone-200/50 sm:rounded-3xl sm:px-10 border border-stone-100">
          
          <div className="flex p-1 bg-stone-100 rounded-xl mb-6">
            <button
              onClick={() => setLoginRole('admin')}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                loginRole === 'admin' 
                  ? 'bg-white text-union-teal shadow-sm border-b-2 border-union-teal' 
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              Staff / Admin
            </button>
            <button
              onClick={() => setLoginRole('parent')}
              className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                loginRole === 'parent' 
                  ? 'bg-white text-union-teal shadow-sm border-b-2 border-union-teal' 
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              Parent
            </button>
          </div>

          <form className="space-y-5" onSubmit={handleDemoLogin}>
            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1.5">
                {loginRole === 'admin' ? 'Staff Email' : 'Registered Phone / Email'}
              </label>
              <input 
                type="text" 
                key={loginRole} 
                defaultValue={loginRole === 'admin' ? 'admin@unionville.edu.ng' : 'parent.okeke@email.com'}
                className="appearance-none block w-full px-4 py-3.5 border border-stone-200 rounded-xl shadow-sm text-sm focus:outline-none focus:border-union-teal focus:ring-1 focus:ring-union-teal bg-stone-50" 
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-stone-700 mb-1.5">Password</label>
              <input 
                type="password" 
                defaultValue="********"
                className="appearance-none block w-full px-4 py-3.5 border border-stone-200 rounded-xl shadow-sm text-sm focus:outline-none focus:border-union-teal focus:ring-1 focus:ring-union-teal bg-stone-50" 
              />
            </div>

            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-md shadow-union-teal/20 text-sm font-bold text-white bg-union-teal hover:bg-union-navy focus:outline-none transition-all hover:-translate-y-0.5"
              >
                Access {loginRole === 'admin' ? 'Dashboard' : 'Portal'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UnionvillePortalLogin;