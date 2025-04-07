
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CallToAction from "@/components/CallToAction";
import { Link } from "react-router-dom";
import { 
  Users, 
  Search, 
  MousePointerClick, 
  Mail, 
  PenTool, 
  Globe, 
  Award, 
  CheckCircle, 
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("social-media");

  const services = [
    {
      id: "social-media",
      title: "Social Media Marketing",
      icon: <Users size={28} />,
      description: "Build a strong brand presence across major social platforms with targeted campaigns that engage and convert.",
      features: [
        "Strategic social media account management",
        "Content creation and curation",
        "Community management and engagement",
        "Paid social media advertising",
        "Performance tracking and analytics",
        "Competitor analysis"
      ],
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3"
    },
    {
      id: "seo",
      title: "Search Engine Optimization",
      icon: <Search size={28} />,
      description: "Improve your website's visibility on search engines with proven SEO strategies that drive organic traffic.",
      features: [
        "Comprehensive SEO audit",
        "Keyword research and strategy",
        "On-page and technical SEO",
        "Content optimization",
        "Link building",
        "Local SEO",
        "Regular performance reporting"
      ],
      image: "https://images.unsplash.com/photo-1571437599137-55442acede5c?ixlib=rb-4.0.3"
    },
    {
      id: "ppc",
      title: "PPC Advertising",
      icon: <MousePointerClick size={28} />,
      description: "Generate immediate traffic and leads with expertly managed pay-per-click campaigns on Google and social media.",
      features: [
        "Google Ads management",
        "Social media advertising",
        "Display and remarketing campaigns",
        "Ad copywriting and design",
        "Landing page optimization",
        "Budget management",
        "A/B testing"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3"
    },
    {
      id: "email",
      title: "Email Marketing",
      icon: <Mail size={28} />,
      description: "Nurture leads and retain customers with personalized email campaigns that deliver the right message at the right time.",
      features: [
        "Email campaign strategy and planning",
        "Template design and development",
        "List management and segmentation",
        "Automated email workflows",
        "A/B testing",
        "Performance analysis",
        "CRM integration"
      ],
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3"
    },
    {
      id: "content",
      title: "Content Creation",
      icon: <PenTool size={28} />,
      description: "Engage your audience with compelling visuals, videos, and written content that tells your brand story.",
      features: [
        "Blog post and article writing",
        "Social media graphics",
        "Video production and editing",
        "Infographics and visual content",
        "Photography",
        "Content strategy development",
        "Content calendar planning"
      ],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
    },
    {
      id: "web-design",
      title: "Website Design",
      icon: <Globe size={28} />,
      description: "Create stunning, responsive websites and landing pages that convert visitors into customers.",
      features: [
        "Custom website design",
        "Landing page design and optimization",
        "E-commerce websites",
        "Mobile responsiveness",
        "User experience (UX) design",
        "Website maintenance and support",
        "Speed optimization"
      ],
      image: "https://images.unsplash.com/photo-1494447122076-e8d66bd87d86?ixlib=rb-4.0.3"
    }
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    
    // Scroll to the service details section
    const element = document.getElementById("service-details");
    if (element) {
      const offset = 100; // Offset from the top to account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Find the active service
  const activeService = services.find(service => service.id === activeTab);

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Digital Marketing Services That Drive Results"
        subtitle="Our comprehensive suite of digital marketing services helps businesses of all sizes achieve their growth objectives."
        ctaText="Get a Free Consultation"
        ctaLink="/contact"
      />

      {/* Services Navigation */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4 -mx-4 px-4 md:justify-center md:flex-wrap md:overflow-visible">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleTabChange(service.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full whitespace-nowrap font-medium transition-all ${
                  activeTab === service.id
                    ? "bg-accent text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="flex-shrink-0">{service.icon}</span>
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section id="service-details" className="py-20">
        {activeService && (
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-md mb-6">{activeService.title}</h2>
                <p className="text-gray-700 mb-8 text-lg">{activeService.description}</p>
                
                <div className="space-y-4 mb-8">
                  {activeService.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/contact" className="btn btn-primary">
                  Request this Service <ArrowRight size={18} />
                </Link>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Why Choose BlazeReach Digital</h2>
            <p className="text-gray-700 text-lg">
              We're not just another marketing agency. Here's what makes our approach different.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 text-accent flex items-center justify-center rounded-lg mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Results-Driven Approach</h3>
              <p className="text-gray-700">
                We focus on metrics that matter to your business and develop strategies that deliver measurable results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 text-accent flex items-center justify-center rounded-lg mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Dedicated Team</h3>
              <p className="text-gray-700">
                You'll work with a team of specialists who understand your industry and are committed to your success.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 text-accent flex items-center justify-center rounded-lg mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Expertise</h3>
              <p className="text-gray-700">
                With experience across multiple industries, we bring a wealth of knowledge to your marketing campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Industries We Serve</h2>
            <p className="text-gray-700 text-lg">
              We have experience working with clients across various industries, tailoring our strategies to meet their unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="font-bold">Retail & E-commerce</h3>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏋️</span>
              </div>
              <h3 className="font-bold">Fitness & Wellness</h3>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-bold">Real Estate</h3>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="font-bold">Professional Services</h3>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="font-bold">Food & Hospitality</h3>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="font-bold">Tech Startups</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction
        title="Ready to Elevate Your Digital Marketing?"
        description="Let's create a custom strategy tailored to your business goals and budget."
        buttonText="Get a Free Proposal"
        buttonLink="/contact"
        secondaryButtonText="View Our Work"
        secondaryButtonLink="/portfolio"
      />
    </>
  );
};

export default Services;
