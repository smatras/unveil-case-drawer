
import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';
import CaseStudyCard from '@/components/CaseStudyCard';
import CaseStudyDrawer from '@/components/CaseStudyDrawer';
import { caseStudiesData } from '@/data/caseStudies';

const Index = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<typeof caseStudiesData[0] | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCaseStudyClick = (caseStudy: typeof caseStudiesData[0]) => {
    setSelectedCaseStudy(caseStudy);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedCaseStudy(null), 400);
  };

  return (
    <div className="min-h-screen">
      {/* Hero/About Section - Swiss Grid Layout */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="swiss-grid">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium mb-8 swiss-heading max-w-[680px]">
              Portfolio
            </h1>
            <div className="mb-16">
              <p className="text-lg md:text-xl swiss-text mb-6 leading-relaxed max-w-[680px]">
                Designer and developer creating digital experiences through systematic design thinking and precise execution.
              </p>
              <p className="text-base swiss-text leading-relaxed text-muted-foreground max-w-[680px] mb-8">
                Focused on user-centered design methodology, technical precision, and functional aesthetics across digital platforms.
              </p>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm swiss-text hover:text-foreground transition-colors duration-200"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Single Column Layout */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-2 swiss-heading max-w-[680px]">
            Selected Work
          </h2>
        </div>
        <div className="flex flex-col gap-8 max-w-[780px]">
          {caseStudiesData.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              title={caseStudy.title}
              description={caseStudy.description}
              image={caseStudy.image}
              category={caseStudy.category}
              onClick={() => handleCaseStudyClick(caseStudy)}
            />
          ))}
        </div>
      </section>

      {/* Case Study Drawer */}
      <CaseStudyDrawer
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        caseStudy={selectedCaseStudy}
      />
    </div>
  );
};

export default Index;
