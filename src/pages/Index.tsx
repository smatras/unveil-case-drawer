import React, { useState } from 'react';
import CaseStudyCard from '@/components/CaseStudyCard';
import CaseStudyDrawer from '@/components/CaseStudyDrawer';

const caseStudiesData = [
  {
    id: 'ecommerce-redesign',
    title: 'E-commerce Platform Redesign',
    description: 'Complete redesign of a luxury fashion e-commerce platform, focusing on user experience and conversion optimization.',
    image: 'photo-1441986300917-64674bd600d8',
    category: 'UI/UX Design',
    heroImage: 'photo-1441986300917-64674bd600d8',
    content: {
      overview: 'This project involved a complete overhaul of a luxury fashion e-commerce platform. The goal was to create a modern, intuitive shopping experience that would increase user engagement and drive conversions while maintaining the brand\'s premium aesthetic.',
      challenge: 'The existing platform had a dated design with poor mobile responsiveness and a confusing checkout process. Users were abandoning their carts at a high rate, and the overall user experience was hindering sales growth.',
      solution: 'We implemented a mobile-first design approach with streamlined navigation, improved product discovery features, and a simplified checkout process. The new design emphasized high-quality imagery and clean typography to showcase the luxury products effectively.',
      results: [
        'Increased conversion rate by 45% within the first month',
        'Reduced cart abandonment rate from 68% to 32%',
        'Improved mobile traffic engagement by 60%',
        'Enhanced overall user satisfaction scores by 40%'
      ],
      testimonial: 'The new design has transformed our online presence. We\'ve seen incredible improvements in user engagement and sales. The team truly understood our brand vision.',
      images: ['photo-1556742049-0cfed4f6a45d', 'photo-1542744173-8e7e53415bb0'],
      videoId: 'dQw4w9WgXcQ'
    }
  },
  {
    id: 'mobile-app-development',
    title: 'Fitness Tracking Mobile App',
    description: 'Design and development of a comprehensive fitness tracking app with social features and AI-powered workout recommendations.',
    image: 'photo-1571019613454-1cb2f99b2d8b',
    category: 'Mobile Development',
    heroImage: 'photo-1571019613454-1cb2f99b2d8b',
    content: {
      overview: 'Developed a comprehensive fitness tracking mobile application that combines workout logging, progress tracking, and social features. The app uses AI to provide personalized workout recommendations based on user goals and performance data.',
      challenge: 'Creating an engaging fitness app in a saturated market required innovative features and exceptional user experience. The challenge was to build something that would keep users motivated and engaged long-term.',
      solution: 'We integrated gamification elements, social challenges, and AI-powered personalization to create a unique experience. The app features real-time workout tracking, progress visualization, and community features to keep users motivated.',
      results: [
        'Achieved 100K+ downloads in the first 6 months',
        'Maintained 85% user retention rate after 30 days',
        'Generated 4.8/5 app store rating',
        'Created active community of 50K+ users'
      ],
      testimonial: 'This app has completely changed how I approach fitness. The AI recommendations are spot-on and the community features keep me motivated every day.',
      images: ['photo-1434494878577-86c23bcb06b9', 'photo-1583500178330-cc6e71b65f4d']
    }
  },
  {
    id: 'brand-identity-system',
    title: 'Tech Startup Brand Identity',
    description: 'Complete brand identity system for an innovative AI startup, including logo design, brand guidelines, and marketing materials.',
    image: 'photo-1542744173-8e7e53415bb0',
    category: 'Brand Design',
    heroImage: 'photo-1542744173-8e7e53415bb0',
    content: {
      overview: 'Created a comprehensive brand identity system for an emerging AI technology startup. The project encompassed logo design, color palette, typography, brand guidelines, and application across various marketing materials and digital platforms.',
      challenge: 'The startup needed to establish credibility and stand out in the competitive AI space while communicating complex technology in an approachable way. The brand needed to appeal to both technical and non-technical audiences.',
      solution: 'Developed a modern, clean visual identity that balances professionalism with innovation. The design system uses geometric elements and a tech-forward color palette while maintaining accessibility and clarity across all touchpoints.',
      results: [
        'Successfully launched brand received industry recognition',
        'Increased brand awareness by 200% in first quarter',
        'Secured $2M in Series A funding with new brand identity',
        'Improved website conversion rate by 35%'
      ],
      testimonial: 'The brand identity perfectly captures our vision and has been instrumental in our fundraising success. It communicates our technical expertise while remaining approachable.',
      images: ['photo-1611224923853-80b023f02d71', 'photo-1460925895917-afdab827c52f']
    }
  }
];

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
              <p className="text-base swiss-text leading-relaxed text-muted-foreground max-w-[680px]">
                Focused on user-centered design methodology, technical precision, and functional aesthetics across digital platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Clean Grid */}
      <section className="px-8 pb-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-medium mb-2 swiss-heading max-w-[680px]">
            Selected Work
          </h2>
          <div className="w-16 h-px bg-foreground"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
