import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  color: string;
}

export default function ActionCard({ title, description, icon: Icon, to, color }: ActionCardProps) {
  return (
    <Link to={to} className={`${color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <Icon className="h-12 w-12 text-white" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </Link>
  );
}