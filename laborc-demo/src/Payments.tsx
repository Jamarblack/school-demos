import { useState } from 'react';
import { ShieldCheck, CheckCircle, Receipt, CreditCard } from 'lucide-react';
import { MOCK_FEES } from './data';

export default function Payments() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [selectedFees, setSelectedFees] = useState<string[]>(MOCK_FEES.map(f => f.id));

  const totalAmount = MOCK_FEES
    .filter(fee => selectedFees.includes(fee.id))
    .reduce((sum, fee) => sum + fee.amount, 0);

  const handlePaymentSubmit = () => {
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2500);
  };

  const resetPayment = () => {
    setIsPaymentModalOpen(false);
    setTimeout(() => setPaymentStatus('idle'), 500); 
  };

  const toggleFeeSelection = (id: string) => {
    setSelectedFees(prev => 
      prev.includes(id) ? prev.filter(feeId => feeId !== id) : [...prev, id]
    );
  };

  return (
    <>
      <div className="animate-pop-in space-y-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-slate-900 mb-2 flex items-center gap-3">
              
              Fee Processing
            </h1>
            <p className="text-slate-500 font-semibold text-lg">Manage tuition and administrative levies securely.</p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 font-bold px-6 py-3 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
            <Receipt size={18} />
            Payment History
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-slate-200">
          <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
            <span>Outstanding Items</span>
            <span className="bg-amber-100 text-amber-700 text-xs py-1 px-3 rounded-md uppercase tracking-wider font-bold">Due in 14 days</span>
          </h2>
          
          <div className="space-y-4 mb-8">
            {MOCK_FEES.map((fee) => (
              <label 
                key={fee.id} 
                className={`flex items-center p-5 rounded-xl cursor-pointer border-2 transition-all duration-200 ${
                  selectedFees.includes(fee.id) ? 'border-emerald-600 bg-emerald-50/30' : 'border-slate-100 hover:border-emerald-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center h-6">
                  <input 
                    type="checkbox" 
                    checked={selectedFees.includes(fee.id)}
                    onChange={() => toggleFeeSelection(fee.id)}
                    className="w-5 h-5 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-emerald-500 focus:ring-2 cursor-pointer" 
                  />
                </div>
                <div className="ml-5 flex-1 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${fee.color}`}>
                    <fee.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{fee.title}</h3>
                    <p className="text-slate-500 font-medium text-sm">{fee.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-slate-900">
                    ₦{fee.amount.toLocaleString()}
                  </span>
                </div>
              </label>
            ))}
          </div>

          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-slate-500 font-bold mb-1 uppercase tracking-wider text-xs">Total Selected</p>
              <p className="text-4xl font-black text-slate-900">
                ₦{totalAmount.toLocaleString()}
              </p>
            </div>
            
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              disabled={totalAmount === 0}
              className="w-full md:w-auto bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Pay Securely
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => paymentStatus === 'idle' && setIsPaymentModalOpen(false)}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-pop-in border border-slate-100">
            {paymentStatus === 'idle' && (
              <div className="p-8">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                  <h3 className="text-xl font-black text-slate-900">Secure Checkout</h3>
                  <ShieldCheck className="text-emerald-600 w-6 h-6" />
                </div>

                <div className="bg-emerald-50 p-6 rounded-xl mb-8 border border-emerald-100 text-center">
                  <p className="text-emerald-700 font-bold mb-1 text-sm uppercase tracking-wider">Amount Due</p>
                  <p className="text-4xl font-black text-emerald-900">₦{totalAmount.toLocaleString()}</p>
                </div>

                <div className="space-y-5 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Card Number</label>
                    <div className="relative">
                      <input type="text" disabled placeholder="**** **** **** 4242" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 font-medium text-slate-600 cursor-not-allowed" />
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Expiry</label>
                      <input type="text" disabled placeholder="12/28" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 font-medium text-slate-600 cursor-not-allowed" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">CVV</label>
                      <input type="text" disabled placeholder="***" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 font-medium text-slate-600 cursor-not-allowed" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsPaymentModalOpen(false)}
                    className="flex-1 py-4 font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handlePaymentSubmit}
                    className="flex-2 w-2/3 bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-md hover:bg-emerald-700 transition-colors"
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>
            )}

            {paymentStatus === 'processing' && (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="relative w-20 h-20 mb-8">
                  <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin"></div>
                  <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-300 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">Processing</h3>
                <p className="text-slate-500 font-medium">Authenticating transaction securely...</p>
              </div>
            )}

            {paymentStatus === 'success' && (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px] bg-slate-50">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/20 animate-pop-in">
                  <CheckCircle className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Payment Successful</h3>
                <p className="text-slate-600 font-medium mb-8">
                  Receipt for ₦{totalAmount.toLocaleString()} has been sent to your registered email address.
                </p>
                <button 
                  onClick={resetPayment}
                  className="w-full bg-white border border-slate-200 text-slate-700 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-sm"
                >
                  Return to Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}