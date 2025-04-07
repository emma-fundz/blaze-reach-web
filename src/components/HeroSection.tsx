
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  image
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/80 z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Background image (optional) */}
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
      
      <div className="container-custom relative z-20 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="heading-xl font-extrabold">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to={ctaLink} className="btn btn-primary">
                {ctaText} <ArrowRight size={18} />
              </Link>
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink} className="btn btn-outline">
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center relative">
            <div className="relative w-full max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -left-4 -top-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute -right-4 -bottom-4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
              
              {/* Mockup image */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-24 bg-gradient-to-br from-accent to-accent/70 rounded-lg"></div>
                    <div className="h-24 bg-white/10 rounded-lg"></div>
                    <div className="h-24 bg-white/10 rounded-lg"></div>
                  </div>
                  <div className="h-40 bg-white/10 rounded-lg mb-6"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/10 rounded-lg"></div>
                    <div className="h-24 bg-gradient-to-br from-accent to-accent/70 rounded-lg"></div>
                  </div>
                  <div className="mt-6 p-4 border border-white/20 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-white/30 rounded mb-2"></div>
                        <div className="h-2 w-32 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
        <div className="h-12 w-0.5 bg-white/20 mb-2"></div>
        <span className="text-sm">Scroll Down</span>
      </div>
    </section>
  );
};

export default HeroSection;
