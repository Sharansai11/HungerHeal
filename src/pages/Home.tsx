import React from 'react';
import ActionCard from '../components/ActionCard';
import { Utensils, Search, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Connecting Surplus Food with Those in Need
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our mission to reduce food waste and fight hunger by connecting food donors
            with local organizations and volunteers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ActionCard
            title="Donate Food"
            description="Restaurants, caterers, and individuals can contribute surplus food"
            icon={Utensils}
            to="/donate"
            color="bg-emerald-600"
          />
          <ActionCard
            title="Find Food"
            description="NGOs and people in need can check available food donations"
            icon={Search}
            to="/find"
            color="bg-blue-600"
          />
          <ActionCard
            title="Volunteer"
            description="Help with food pickup and distribution in your area"
            icon={Users}
            to="/volunteer"
            color="bg-purple-600"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Live Food Availability</h2>
          <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Google Maps integration will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
}