
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
  onClick
}) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden border-transparent hover:border-gray-400 hover:bg-white transition-all duration-300"
      style={{ backgroundColor: '#dddddd' }}
      onClick={onClick}
    >
      <div className="p-6 flex gap-6 items-start">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-medium mb-3 swiss-heading leading-tight max-w-[680px] transition-colors duration-200">
            {title}
          </h3>
          <p className="text-sm swiss-text text-muted-foreground leading-relaxed max-w-[680px]">
            {description}
          </p>
        </div>
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden bg-muted">
          <img
            src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=200&q=80`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          />
        </div>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
