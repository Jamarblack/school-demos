import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Sparkles, CheckCircle } from 'lucide-react';
import { MOCK_FEES } from './data';
import crest from './assets/crest.png';

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
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-yellow-400 blob-shape-2 mx-auto flex items-center justify-center mb-6 shadow-lg shadow-yellow-400/20 animate-float-gentle">
            <img src={crest} className="text-yellow-900 blob-1 w-10 h-10" />
          </div>
          <h1 className="text-4xl font-black text-blue-900 mb-4">Fee Processing Portal</h1>
          <p className="text-slate-500 font-semibold text-lg">Securely manage tuition and activity fees for your wards.</p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl p-6 md:p-10 border border-slate-100">
          <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center justify-between">
            <span>Outstanding Items</span>
            <span className="bg-red-100 text-red-600 text-sm py-1 px-3 rounded-full">Due in 14 days</span>
          </h2>
          
          <div className="space-y-4 mb-8">
            {MOCK_FEES.map((fee) => (
              <label 
                key={fee.id} 
                className={`flex items-center p-5 rounded-2xl cursor-pointer border-2 transition-all duration-200 ${
                  selectedFees.includes(fee.id) ? 'border-blue-500 bg-blue-50/50' : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center h-6">
                  <input 
                    type="checkbox" 
                    checked={selectedFees.includes(fee.id)}
                    onChange={() => toggleFeeSelection(fee.id)}
                    className="w-6 h-6 text-blue-600 bg-slate-100 border-slate-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer" 
                  />
                </div>
                <div className="ml-5 flex-1 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${fee.color}`}>
                    <fee.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-800">{fee.title}</h3>
                    <p className="text-slate-500 font-bold text-sm">{fee.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-slate-800">
                    ₦{fee.amount.toLocaleString()}
                  </span>
                </div>
              </label>
            ))}
          </div>

          <div className="border-t-2 border-dashed border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-slate-500 font-bold mb-1">Total Selected Amount</p>
              <p className="text-4xl font-black text-blue-900">
                ₦{totalAmount.toLocaleString()}
              </p>
            </div>
            
            <button 
              onClick={() => setIsPaymentModalOpen(true)}
              disabled={totalAmount === 0}
              className="w-full md:w-auto bg-red-500 text-white px-10 py-4 rounded-full font-black text-xl shadow-lg shadow-red-500/30 hover:bg-red-600 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              Pay Now Securely
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => paymentStatus === 'idle' && setIsPaymentModalOpen(false)}
          ></div>

          <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden animate-pop-in">
            {paymentStatus === 'idle' && (
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-black text-slate-800">Checkout</h3>
                  <ShieldCheck className="text-green-500 w-8 h-8" />
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100 text-center">
                  <p className="text-slate-500 font-bold mb-2">Amount to Pay</p>
                  <p className="text-4xl font-black text-blue-900">₦{totalAmount.toLocaleString()}</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-sm font-bold text-slate-600 mb-2">Card Number</label>
                    <div className="relative">
                      <input type="text" disabled placeholder="**** **** **** 4242" className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-600 cursor-not-allowed" />
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-slate-600 mb-2">Expiry</label>
                      <input type="text" disabled placeholder="12/28" className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-600 cursor-not-allowed" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-600 mb-2">CVV</label>
                      <input type="text" disabled placeholder="***" className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-3 font-bold text-slate-600 cursor-not-allowed" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setIsPaymentModalOpen(false)}
                    className="flex-1 py-4 font-bold text-slate-500 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handlePaymentSubmit}
                    className="flex-2 w-2/3 bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg hover:bg-blue-800 transition-colors"
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>
            )}

            {paymentStatus === 'processing' && (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 border-8 border-blue-100 rounded-full"></div>
                  <div className="absolute inset-0 border-8 border-yellow-400 rounded-full border-t-transparent animate-spin"></div>
                  <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-600 w-8 h-8 animate-pulse" />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2">Processing...</h3>
                <p className="text-slate-500 font-bold">Connecting to bank, please wait.</p>
              </div>
            )}

            {paymentStatus === 'success' && (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-b from-white to-green-50">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-500/30 animate-pop-in">
                  <CheckCircle className="text-white w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black text-green-600 mb-4">Payment Successful!</h3>
                <p className="text-slate-600 font-bold mb-8">
                  Thank you! ₦{totalAmount.toLocaleString()} has been securely processed for your wards.
                </p>
                <button 
                  onClick={resetPayment}
                  className="bg-white border-2 border-green-500 text-green-600 font-black px-8 py-3 rounded-xl hover:bg-green-50 transition-colors"
                >
                  Return to Dashboard
                </button>
                <div className="absolute top-10 left-10 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-20 right-12 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-20 left-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}