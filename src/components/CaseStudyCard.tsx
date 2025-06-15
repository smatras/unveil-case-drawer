
import React from 'react';
import { Tile, ClickableTile } from '@carbon/react';

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
    <ClickableTile 
      className="portfolio-card cursor-pointer overflow-hidden p-6"
      onClick={onClick}
    >
      <div className="flex gap-6 items-start">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl portfolio-heading mb-3 leading-tight max-w-[680px]">
            {title}
          </h3>
          <p className="text-sm portfolio-text leading-relaxed max-w-[680px]">
            {description}
          </p>
        </div>
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded" style={{ backgroundColor: 'var(--cds-layer-02)' }}>
          <img
            src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=200&q=80`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.05]"
          />
        </div>
      </div>
    </ClickableTile>
  );
};

export default CaseStudyCard;
