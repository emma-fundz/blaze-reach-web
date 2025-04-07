
import HeroSection from "@/components/HeroSection";
import TeamMember from "@/components/TeamMember";
import CallToAction from "@/components/CallToAction";
import { CheckCircle } from "lucide-react";

const About = () => {
  // Sample team members data
  const teamMembers = [
    {
      id: 1,
      name: "David Rodriguez",
      role: "CEO & Founder",
      bio: "David brings over 15 years of digital marketing experience, having previously led marketing teams at major tech companies.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      linkedin: "#",
      twitter: "#",
      email: "david@blazereach.com",
    },
    {
      id: 2,
      name: "Amara Johnson",
      role: "Head of SEO",
      bio: "Amara is a certified SEO expert with a track record of helping businesses achieve top rankings for competitive keywords.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
      linkedin: "#",
      twitter: "#",
      email: "amara@blazereach.com",
    },
    {
      id: 3,
      name: "Marcus Chen",
      role: "Lead PPC Specialist",
      bio: "Marcus specializes in creating high-ROI paid advertising campaigns across Google, Facebook, and other platforms.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      linkedin: "#",
      twitter: "#",
      email: "marcus@blazereach.com",
    },
    {
      id: 4,
      name: "Sofia Patel",
      role: "Creative Director",
      bio: "Sofia leads our content creation team, bringing brands to life through compelling visuals, videos, and written content.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
      linkedin: "#",
      twitter: "#",
      email: "sofia@blazereach.com",
    },
  ];

  // Company values data
  const companyValues = [
    {
      id: 1,
      title: "Results First",
      description: "We focus on metrics that matter and strategies that deliver measurable business growth.",
    },
    {
      id: 2,
      title: "Transparency",
      description: "We believe in honest communication and full visibility into our processes and results.",
    },
    {
      id: 3,
      title: "Innovation",
      description: "We constantly adapt to changing digital landscapes to keep our clients ahead of the curve.",
    },
    {
      id: 4,
      title: "Partnership",
      description: "We view ourselves as an extension of your team, aligned with your business goals.",
    },
    {
      id: 5,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to execution.",
    },
    {
      id: 6,
      title: "Continuous Learning",
      description: "We invest in ongoing education to stay at the forefront of digital marketing innovations.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="We Turn Digital Potential Into Real Results"
        subtitle="Meet the passionate team behind BlazeReach Digital and discover our mission to help businesses thrive online."
        ctaText="Meet Our Team"
        ctaLink="#team"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
      />
      
      {/* Our Story Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Our Story</h2>
              <p className="text-gray-700 mb-6">
                BlazeReach Digital was founded in 2018 with a simple mission: to help small and medium-sized businesses thrive in the digital landscape without breaking the bank.
              </p>
              <p className="text-gray-700 mb-6">
                Our founder, David Rodriguez, had witnessed firsthand how many talented entrepreneurs struggled to navigate the complex world of digital marketing. Too often, they were either stuck with generic, ineffective strategies or priced out by large agencies that catered primarily to big corporations.
              </p>
              <p className="text-gray-700">
                Today, BlazeReach Digital has grown into a full-service digital marketing agency with a team of specialists across all digital disciplines. We've helped over 250 businesses transform their online presence and achieve sustainable growth through smart, data-driven strategies that deliver measurable results.
              </p>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"
                  alt="BlazeReach Digital team meeting"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-accent rounded-2xl p-6 shadow-lg text-white">
                <div className="text-3xl font-bold">5+</div>
                <p className="text-white/90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full mb-6">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses of all sizes with digital marketing strategies that drive real, measurable results and sustainable growth, while providing exceptional value and transparency.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full mb-6">
                <div className="w-8 h-8 bg-accent rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted digital marketing partner for small and medium-sized businesses, known for our integrity, innovation, and consistent delivery of outstanding results.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Our Core Values</h2>
            <p className="text-gray-700 text-lg">
              These principles guide every aspect of our work and relationships with clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((value) => (
              <div key={value.id} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-accent" size={24} />
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Meet Our Experts</h2>
            <p className="text-gray-700 text-lg">
              Our diverse team of digital marketing specialists brings together expertise from across the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                linkedin={member.linkedin}
                twitter={member.twitter}
                email={member.email}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CallToAction
        title="Ready to Work With Us?"
        description="Let's discuss how BlazeReach Digital can help transform your online presence and drive business growth."
        buttonText="Start a Conversation"
        buttonLink="/contact"
      />
    </>
  );
};

export default About;
