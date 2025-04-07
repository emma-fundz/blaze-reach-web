
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CaseStudyCard from "@/components/CaseStudyCard";
import CallToAction from "@/components/CallToAction";
import { 
  BarChart3, 
  Search, 
  MousePointerClick, 
  Mail, 
  PenTool, 
  Globe, 
  Award, 
  CheckCircle, 
  LineChart, 
  Users, 
  Clock 
} from "lucide-react";

const Index = () => {
  // Sample data
  const services = [
    {
      id: 1,
      title: "Social Media Marketing",
      description: "Build a strong brand presence across major social platforms with targeted campaigns that engage and convert.",
      icon: <Users size={28} />,
      link: "/services#social-media",
      delay: 100
    },
    {
      id: 2,
      title: "Search Engine Optimization",
      description: "Improve your website's visibility on search engines with proven SEO strategies that drive organic traffic.",
      icon: <Search size={28} />,
      link: "/services#seo",
      delay: 200
    },
    {
      id: 3,
      title: "PPC Advertising",
      description: "Generate immediate traffic and leads with expertly managed pay-per-click campaigns on Google and social media.",
      icon: <MousePointerClick size={28} />,
      link: "/services#ppc",
      delay: 300
    },
    {
      id: 4,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that deliver the right message at the right time.",
      icon: <Mail size={28} />,
      link: "/services#email",
      delay: 400
    },
    {
      id: 5,
      title: "Content Creation",
      description: "Engage your audience with compelling visuals, videos, and written content that tells your brand story.",
      icon: <PenTool size={28} />,
      link: "/services#content",
      delay: 500
    },
    {
      id: 6,
      title: "Website Design",
      description: "Create stunning, responsive websites and landing pages that convert visitors into customers.",
      icon: <Globe size={28} />,
      link: "/services#web-design",
      delay: 600
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Apex Fitness",
      quote: "BlazeReach transformed our online presence. Our social media engagement increased by 300% and we're seeing a steady stream of qualified leads every month.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "TechStart Solutions",
      quote: "Their SEO expertise helped us climb from page 5 to the top 3 results for our main keywords. Our organic traffic has doubled in just three months.",
      rating: 5,
    },
    {
      id: 3,
      name: "Olivia Williams",
      role: "Founder",
      company: "Bloom Boutique",
      quote: "The PPC campaigns they ran for our e-commerce store delivered an amazing 400% ROI. They truly understand digital marketing for small businesses.",
      rating: 5,
    },
  ];

  const caseStudies = [
    {
      id: "fitness-brand",
      title: "400% Social Media Growth",
      client: "FitLife Gym",
      category: "Social Media Marketing",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3",
      results: "400% follower growth, 2x lead generation"
    },
    {
      id: "tech-startup",
      title: "1st Page Google Ranking",
      client: "InnovateTech",
      category: "SEO & Content",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      results: "300% organic traffic increase, 15 keywords on page 1"
    },
    {
      id: "ecommerce",
      title: "5x ROAS PPC Campaign",
      client: "Urban Style Shop",
      category: "PPC & Google Ads",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3",
      results: "5.2x return on ad spend, 140% conversion increase"
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Ignite Your Brand. Dominate Your Market."
        subtitle="We help small to mid-sized businesses grow their online presence and convert clicks into customers using smart, result-driven digital strategies."
        ctaText="Get a Free Consultation"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
      />
      
      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">We Help Businesses Grow <span className="text-accent">Their Digital Presence</span></h2>
              <p className="text-gray-700 mb-6 text-lg">
                BlazeReach Digital is a full-service digital marketing agency that specializes in helping small to medium-sized businesses establish a powerful online presence and drive meaningful results.
              </p>
              <p className="text-gray-700 mb-8">
                Our team of experts combines data-driven strategies with creative execution to deliver campaigns that not only reach your target audience but convert them into loyal customers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Result-Focused</h4>
                    <p className="text-gray-600">We're obsessed with metrics that matter to your business growth.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <LineChart className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Data-Driven</h4>
                    <p className="text-gray-600">Every strategy is backed by comprehensive analysis and research.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Timely Delivery</h4>
                    <p className="text-gray-600">We meet deadlines and keep your campaigns on schedule.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold">Industry Expertise</h4>
                    <p className="text-gray-600">Our team has deep experience across multiple industries.</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                About BlazeReach
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-navy p-6 rounded-2xl text-white">
                  <div className="text-5xl font-bold mb-2 text-accent">97%</div>
                  <p className="text-white/80">Client satisfaction rate</p>
                </div>
                <div className="rounded-2xl overflow-hidden h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3" 
                    alt="Team brainstorming" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="rounded-2xl overflow-hidden h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3" 
                    alt="Team working" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-accent p-6 rounded-2xl text-white">
                  <div className="text-5xl font-bold mb-2">5+</div>
                  <p className="text-white/80">Years of excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Our Digital Marketing Services</h2>
            <p className="text-gray-700 text-lg">
              We offer comprehensive digital marketing solutions tailored to your business goals. From social media management to SEO and content creation, we've got you covered.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                delay={service.delay}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-3 text-accent">250+</div>
              <p className="text-white/80">Clients Served</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3 text-accent">500+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3 text-accent">15M+</div>
              <p className="text-white/80">Digital Impressions</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3 text-accent">98%</div>
              <p className="text-white/80">Client Retention</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Success Stories</h2>
            <p className="text-gray-700 text-lg">
              Take a look at some of the results we've achieved for our clients through strategic digital marketing campaigns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
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
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn btn-primary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">What Our Clients Say</h2>
            <p className="text-gray-700 text-lg">
              Don't just take our word for it. Here's what our clients have to say about working with BlazeReach Digital.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction 
        title="Ready to Grow Your Business Online?"
        description="Book a free consultation with our digital marketing experts and discover how we can help you achieve your business goals."
        buttonText="Get Free Consultation"
        buttonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default Index;
