import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ethers } from 'ethers';

import {
  Briefcase,
  DollarSign,
  MapPin,
  Clock,
  Tag,
  Building2,
  Users,
  Calendar,
  Save
} from 'lucide-react';
import axios from 'axios';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const PostJob: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [paymentDone, setPaymentDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: '',
    location: 'Remote',
    jobType: 'full-time',
    experienceLevel: 'mid',
    requiredSkills: '',
    tags: '',
    minBudget: '',
    maxBudget: '',
    currency: 'USD',
    deadline: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!paymentDone) {
      alert('Please complete the blockchain payment first!');
      return;
    }

    setLoading(true);
    try {
      const skillsArray = formData.requiredSkills.split(',').map(skill => skill.trim()).filter(Boolean);
      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean);

      const jobData = {
        title: formData.title,
        description: formData.description,
        company: formData.company,
        location: formData.location,
        jobType: formData.jobType,
        experienceLevel: formData.experienceLevel,
        requiredSkills: skillsArray,
        tags: tagsArray,
        budget: {
          min: parseInt(formData.minBudget),
          max: parseInt(formData.maxBudget),
          currency: formData.currency
        },
        deadline: formData.deadline ? new Date(formData.deadline).toISOString() : null
      };

      await axios.post('/jobs', jobData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Job creation error:', error);
    } finally {
      setLoading(false);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask');
        return;
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
    } catch (err) {
      console.error('Wallet connect error:', err);
    }
  };

  const makePayment = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({
        to: '0x000000000000000000000000000000000000dead', // Replace with your real admin address
        value: ethers.parseEther('0.001'),
      });
      await tx.wait();
      setPaymentDone(true);
      alert('✅ Payment successful!');
    } catch (err) {
      console.error('Payment failed:', err);
      alert('❌ Payment failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center">
          <div className="bg-blue-600 p-3 rounded-full mr-4">
            <Briefcase className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Post a New Job</h1>
            <p className="text-gray-600">Find the perfect candidate for your position</p>
          </div>
        </div>

        {/* Blockchain Section */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
          <h2 className="text-lg font-semibold text-yellow-800 mb-3">Blockchain Payment Required</h2>
          {!walletAddress ? (
            <button onClick={connectWallet} className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
              🔗 Connect Wallet
            </button>
          ) : paymentDone ? (
            <p className="text-green-700">✅ Payment complete from {walletAddress}</p>
          ) : (
            <button onClick={makePayment} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              💰 Pay 0.001 ETH to Post Job
            </button>
          )}
        </div>

        {/* Job Form */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Form fields (title, company, location, etc.) */}
            {/* --- Keep your existing form content here unchanged --- */}
            {/* Submit Button */}
            <div className="flex justify-end pt-6 border-t border-gray-200 space-x-4">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || !paymentDone}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
