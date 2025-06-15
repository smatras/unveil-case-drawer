
import React, { useState } from 'react';
import { Grid, Column, Button } from '@carbon/react';
import { LogoLinkedin } from '@carbon/icons-react';
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cds-background)' }}>
      {/* Hero/About Section */}
      <section className="py-24">
        <Grid>
          <Column lg={12} md={8} sm={4}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl portfolio-heading mb-8">
              Portfolio
            </h1>
            <div className="mb-16">
              <p className="text-lg md:text-xl portfolio-text mb-6 leading-relaxed max-w-[680px]">
                Designer and developer creating digital experiences through systematic design thinking and precise execution.
              </p>
              <p className="text-base portfolio-text leading-relaxed mb-8 max-w-[680px]" style={{ color: 'var(--cds-text-helper)' }}>
                Focused on user-centered design methodology, technical precision, and functional aesthetics across digital platforms.
              </p>
              <Button 
                kind="ghost"
                size="sm"
                renderIcon={LogoLinkedin}
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                Connect on LinkedIn
              </Button>
            </div>
          </Column>
        </Grid>
      </section>

      {/* Case Studies Section */}
      <section className="pb-24">
        <Grid>
          <Column lg={12} md={8} sm={4}>
            <div className="mb-16">
              <h2 className="text-2xl portfolio-heading mb-2">
                Case studies
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
          </Column>
        </Grid>
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
