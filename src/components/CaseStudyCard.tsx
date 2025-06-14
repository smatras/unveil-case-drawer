
import React from 'react';
import { Card } from '@/components/ui/card';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  onClick: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  image,
  category,
  onClick
}) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden hover-lift bg-white border-0 shadow-lg"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=800&q=80`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
          <span>View Case Study</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
