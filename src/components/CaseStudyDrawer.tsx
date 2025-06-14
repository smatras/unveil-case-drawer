
import React from 'react';
import { X } from 'lucide-react';

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
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="absolute inset-x-0 bottom-0 h-[94vh] bg-white rounded-t-3xl shadow-2xl animate-slide-up overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                {caseStudy.category}
              </span>
              <h1 className="text-2xl font-bold text-slate-900">{caseStudy.title}</h1>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-full pb-20">
          {/* Hero Image */}
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={`https://images.unsplash.com/${caseStudy.heroImage}?auto=format&fit=crop&w=1600&q=80`}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="px-6 py-8 max-w-4xl mx-auto">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {caseStudy.content.overview}
              </p>
            </section>

            {/* Challenge */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {caseStudy.content.challenge}
              </p>
            </section>

            {/* Images Grid */}
            {caseStudy.content.images.length > 0 && (
              <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.content.images.map((image, index) => (
                    <div key={index} className="aspect-[4/3] overflow-hidden rounded-xl">
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
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {caseStudy.content.solution}
              </p>
            </section>

            {/* Video */}
            {caseStudy.content.videoId && (
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Demo Video</h2>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
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

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Results</h2>
              <ul className="space-y-4">
                {caseStudy.content.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-slate-700 leading-relaxed">{result}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Testimonial */}
            {caseStudy.content.testimonial && (
              <section className="mb-12">
                <blockquote className="bg-slate-50 p-8 rounded-2xl border-l-4 border-blue-600">
                  <p className="text-xl italic text-slate-800 leading-relaxed mb-4">
                    "{caseStudy.content.testimonial}"
                  </p>
                  <footer className="text-slate-600 font-medium">
                    — Client Testimonial
                  </footer>
                </blockquote>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDrawer;
