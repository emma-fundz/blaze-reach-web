
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CaseStudyCard from "@/components/CaseStudyCard";
import CallToAction from "@/components/CallToAction";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  // Sample case studies data
  const caseStudies = [
    {
      id: "fitness-brand",
      title: "400% Social Media Growth",
      client: "FitLife Gym",
      category: "Social Media Marketing",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3",
      results: "400% follower growth, 2x lead generation",
      tags: ["social-media", "content"]
    },
    {
      id: "tech-startup",
      title: "1st Page Google Ranking",
      client: "InnovateTech",
      category: "SEO & Content",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      results: "300% organic traffic increase, 15 keywords on page 1",
      tags: ["seo", "content"]
    },
    {
      id: "ecommerce",
      title: "5x ROAS PPC Campaign",
      client: "Urban Style Shop",
      category: "PPC & Google Ads",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3",
      results: "5.2x return on ad spend, 140% conversion increase",
      tags: ["ppc"]
    },
    {
      id: "real-estate",
      title: "Lead Generation Website",
      client: "Premier Properties",
      category: "Web Design & SEO",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3",
      results: "85% more leads, 65% lower cost per acquisition",
      tags: ["web-design", "seo"]
    },
    {
      id: "restaurant-chain",
      title: "Local SEO Campaign",
      client: "Taste of Africa",
      category: "Local SEO & Social Media",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3",
      results: "250% increase in 'near me' searches, 180% more foot traffic",
      tags: ["seo", "social-media"]
    },
    {
      id: "beauty-brand",
      title: "Email Marketing Revamp",
      client: "Glow Cosmetics",
      category: "Email Marketing",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3",
      results: "320% higher open rate, 75% increase in online sales",
      tags: ["email"]
    },
    {
      id: "finance-app",
      title: "App Launch Campaign",
      client: "MoneyWise",
      category: "PPC & Content Marketing",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3",
      results: "50,000+ downloads in first month, $2.10 cost per install",
      tags: ["ppc", "content"]
    },
    {
      id: "wellness-brand",
      title: "Influencer Marketing",
      client: "Zenlife",
      category: "Influencer & Social Media",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3",
      results: "1.2M impressions, 28% engagement rate, 340% ROI",
      tags: ["social-media"]
    },
    {
      id: "b2b-software",
      title: "B2B Lead Generation",
      client: "CloudSolutions",
      category: "Content & SEO",
      image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3",
      results: "213% more qualified leads, 35% lower CAC",
      tags: ["content", "seo"]
    }
  ];

  // Filter categories
  const filters = [
    { id: "all", name: "All Projects" },
    { id: "social-media", name: "Social Media" },
    { id: "seo", name: "SEO" },
    { id: "ppc", name: "PPC" },
    { id: "content", name: "Content" },
    { id: "web-design", name: "Web Design" },
    { id: "email", name: "Email Marketing" }
  ];

  // Filter case studies based on selected filter
  const filteredCaseStudies = filter === "all"
    ? caseStudies
    : caseStudies.filter(study => study.tags.includes(filter));

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Work"
        subtitle="Explore our portfolio of successful digital marketing campaigns and discover how we've helped businesses like yours achieve their goals."
        ctaText="Get Similar Results"
        ctaLink="/contact"
      />
      
      {/* Filter Section */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4 -mx-4 px-4 md:justify-center md:flex-wrap md:overflow-visible">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-5 py-3 rounded-full whitespace-nowrap font-medium transition-all ${
                  filter === filterItem.id
                    ? "bg-accent text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {filterItem.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container-custom">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  id={caseStudy.id}
                  title={caseStudy.title}
                  client={caseStudy.client}
                  category={caseStudy.category}
                  image={caseStudy.image}
                  results={caseStudy.results}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700">No projects found with this filter.</h3>
              <button 
                onClick={() => setFilter("all")} 
                className="mt-4 text-accent font-medium hover:underline"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Results That <span className="text-accent">Speak For Themselves</span></h2>
              <p className="text-white/90 mb-8 text-lg">
                Our campaigns consistently deliver exceptional results across various industries and marketing channels. Here's what our clients have achieved working with us.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2 text-accent">400%</div>
                  <p className="text-white/80">Average social media growth for clients</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-accent">5.3x</div>
                  <p className="text-white/80">Average return on ad spend</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-accent">85%</div>
                  <p className="text-white/80">Client conversion rate increase</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-accent">250%</div>
                  <p className="text-white/80">Average organic traffic growth</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-auto">
              <div className="absolute inset-0 bg-accent/10 rounded-3xl -rotate-3 transform"></div>
              <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-3 transform"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full">
                <div className="h-full flex flex-col justify-center">
                  <div className="text-2xl font-bold mb-4 text-accent">"</div>
                  <p className="text-white/90 text-lg italic mb-6">
                    BlazeReach Digital completely transformed our online presence. Their strategic approach to our digital marketing has resulted in a 300% increase in qualified leads and a significant boost in revenue.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/20 mr-4"></div>
                    <div>
                      <div className="font-semibold">James Wilson</div>
                      <div className="text-sm text-white/70">CEO, TechNova Solutions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction
        title="Ready to Be Our Next Success Story?"
        description="Get in touch with our team to discuss how we can help your business achieve similar results."
        buttonText="Start Your Journey"
        buttonLink="/contact"
      />
    </>
  );
};

export default Portfolio;
