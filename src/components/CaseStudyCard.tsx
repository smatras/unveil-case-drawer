
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
      className="group cursor-pointer overflow-hidden swiss-card hover:shadow-sm transition-shadow duration-200"
      onClick={onClick}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=800&q=80`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase tracking-wide font-medium text-muted-foreground">
            {category}
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            →
          </span>
        </div>
        <h3 className="text-xl font-medium mb-3 swiss-heading leading-tight">
          {title}
        </h3>
        <p className="text-sm swiss-text text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
