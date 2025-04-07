
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Let's Talk About Your Project"
        subtitle="Have questions or ready to start your next digital marketing campaign? Get in touch with our team."
        ctaText="Contact Us Now"
        ctaLink="#contact-form"
      />
      
      {/* Contact Info & Form Section */}
      <section id="contact-form" className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="heading-md mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8 text-lg">
                Whether you're looking to start a new project or enhance your existing marketing efforts, our team is here to help. Fill out the form or contact us directly using the information below.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Office Address</h3>
                    <p className="text-gray-600">
                      123 Victoria Island<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+2341234567890" className="hover:text-accent transition-colors">
                        +234 123 456 7890
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email Address</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@blazereach.com" className="hover:text-accent transition-colors">
                        info@blazereach.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center text-navy hover:bg-accent hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center text-navy hover:bg-accent hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center text-navy hover:bg-accent hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center text-navy hover:bg-accent hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-10">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29342.666666666676!2d3.4064775!3d6.4272656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x5e34fe6a84cdbb89!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1627904372549!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="BlazeReach Digital Office Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-700 text-lg">
              Have questions? We've got answers. If you don't see what you're looking for, feel free to contact us directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">How long does it take to see results?</h3>
              <p className="text-gray-700">
                Results vary depending on the services and your starting point. Some channels like PPC can show results almost immediately, while SEO typically takes 3-6 months to see significant improvements. We'll provide clear timelines during our initial consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Do you offer customized packages?</h3>
              <p className="text-gray-700">
                Absolutely! We don't believe in one-size-fits-all solutions. We'll work with you to create a tailored digital marketing strategy that aligns with your business goals, target audience, and budget.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">How do you measure success?</h3>
              <p className="text-gray-700">
                We establish clear KPIs based on your business goals before starting any campaign. We provide regular reports with transparent metrics showing progress toward these goals, whether that's leads, sales, traffic, engagement, or other key measures.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4">What industries do you specialize in?</h3>
              <p className="text-gray-700">
                We've worked successfully with clients across many industries including e-commerce, professional services, fitness, real estate, tech startups, and hospitality. Our strategies are tailored to the specific needs and audiences of each industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
