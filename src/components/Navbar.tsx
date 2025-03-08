import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Home, Users, LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

export default function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Signed out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  return (
    <nav className="bg-emerald-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8" />
            <span className="font-bold text-xl">HungerHealers</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/volunteer" className="flex items-center space-x-1 hover:text-emerald-200 transition">
              <Users className="h-5 w-5" />
              <span>Volunteer</span>
            </Link>
            {user ? (
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-1 hover:text-emerald-200 transition"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 hover:text-emerald-200 transition">
                <LogIn className="h-5 w-5" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}