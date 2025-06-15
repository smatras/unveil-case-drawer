
import React from 'react';
import { Button } from '@carbon/react';
import { Close } from '@carbon/icons-react';

interface CaseStudyContent {
  id: string;
  title: string;
  category: string;
  heroImage: string;
  content: {
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    testimonial?: string;
    images: string[];
    videoId?: string;
  };
}

interface CaseStudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudyContent | null;
}

const CaseStudyDrawer: React.FC<CaseStudyDrawerProps> = ({
  isOpen,
  onClose,
  caseStudy
}) => {
  if (!isOpen || !caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-sm"
        style={{ backgroundColor: 'rgba(22, 22, 22, 0.8)' }}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[94vh] border-t animate-slide-up overflow-hidden"
        style={{ 
          backgroundColor: 'var(--cds-background)',
          borderColor: 'var(--cds-layer-02)'
        }}
      >
        {/* Header */}
        <div 
          className="sticky top-0 z-10 border-b px-8 py-6"
          style={{ 
            backgroundColor: 'var(--cds-background)',
            borderColor: 'var(--cds-layer-02)'
          }}
        >
          <div className="flex items-start justify-between max-w-7xl mx-auto">
            <h1 className="text-3xl font-medium portfolio-heading max-w-[680px]">{caseStudy.title}</h1>
            <Button
              kind="ghost"
              size="sm"
              renderIcon={Close}
              iconDescription="Close"
              hasIconOnly
              onClick={onClose}
            />
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-full pb-20">
          {/* Hero Image */}
          <div 
            className="aspect-[21/9] overflow-hidden"
            style={{ backgroundColor: 'var(--cds-layer-01)' }}
          >
            <img
              src={`https://images.unsplash.com/${caseStudy.heroImage}?auto=format&fit=crop&w=1600&q=80`}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-8 py-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-12 gap-8">
              {/* Overview */}
              <section className="col-span-12 lg:col-span-8 mb-16">
                <h2 className="text-lg font-medium mb-6 portfolio-heading max-w-[680px]">Overview</h2>
                <p className="text-base portfolio-text leading-relaxed max-w-[680px]">
                  {caseStudy.content.overview}
                </p>
              </section>

              {/* Challenge */}
              <section className="col-span-12 lg:col-span-8 mb-16">
                <h2 className="text-lg font-medium mb-6 portfolio-heading max-w-[680px]">Challenge</h2>
                <p className="text-base portfolio-text leading-relaxed max-w-[680px]">
                  {caseStudy.content.challenge}
                </p>
              </section>

              {/* Results */}
              <section className="col-span-12 lg:col-span-8 mb-16">
                <h2 className="text-lg font-medium mb-6 portfolio-heading max-w-[680px]">Results</h2>
                <ul className="space-y-3 max-w-[680px]">
                  {caseStudy.content.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span 
                        className="w-4 h-px mt-3 flex-shrink-0"
                        style={{ backgroundColor: 'var(--cds-text-primary)' }}
                      ></span>
                      <p className="text-base portfolio-text leading-relaxed">{result}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Images Grid */}
              {caseStudy.content.images.length > 0 && (
                <section className="col-span-12 mb-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {caseStudy.content.images.map((image, index) => (
                      <div 
                        key={index} 
                        className="aspect-[4/3] overflow-hidden"
                        style={{ backgroundColor: 'var(--cds-layer-01)' }}
                      >
                        <img
                          src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=800&q=80`}
                          alt={`${caseStudy.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Solution */}
              <section className="col-span-12 lg:col-span-8 mb-16">
                <h2 className="text-lg font-medium mb-6 portfolio-heading max-w-[680px]">Solution</h2>
                <p className="text-base portfolio-text leading-relaxed max-w-[680px]">
                  {caseStudy.content.solution}
                </p>
              </section>

              {/* Video */}
              {caseStudy.content.videoId && (
                <section className="col-span-12 mb-16">
                  <h2 className="text-lg font-medium mb-6 portfolio-heading max-w-[680px]">Demo</h2>
                  <div 
                    className="aspect-video overflow-hidden"
                    style={{ backgroundColor: 'var(--cds-layer-01)' }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${caseStudy.content.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </section>
              )}

              {/* Testimonial */}
              {caseStudy.content.testimonial && (
                <section className="col-span-12 lg:col-span-8 mb-16">
                  <blockquote 
                    className="border-l-2 pl-6 max-w-[680px]"
                    style={{ borderColor: 'var(--cds-text-primary)' }}
                  >
                    <p className="text-lg italic portfolio-text leading-relaxed mb-4">
                      "{caseStudy.content.testimonial}"
                    </p>
                    <footer 
                      className="text-sm font-medium"
                      style={{ color: 'var(--cds-text-helper)' }}
                    >
                      Client Testimonial
                    </footer>
                  </blockquote>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDrawer;
