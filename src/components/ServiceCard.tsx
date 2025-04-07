
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, link, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-2xl shadow-lg card-hover border border-gray-100"
      style={{ 
        animationDelay: `${delay}ms`,
        transform: "translateY(20px)",
        opacity: 0,
        animation: "fadeIn 0.7s ease-out forwards"
      }}
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-accent/10 text-accent flex items-center justify-center rounded-lg mb-6">
        {icon}
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      {/* Link */}
      <Link 
        to={link} 
        className="inline-flex items-center text-accent font-semibold group"
      >
        Learn More 
        <ArrowRight 
          size={16} 
          className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
