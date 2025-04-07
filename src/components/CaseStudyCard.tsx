
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  results: string;
}

const CaseStudyCard = ({
  id,
  title,
  client,
  category,
  image,
  results
}: CaseStudyCardProps) => {
  return (
    <Link 
      to={`/portfolio/${id}`} 
      className="group block overflow-hidden rounded-2xl bg-white shadow-lg relative card-hover"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <span className="inline-block bg-accent/90 text-white text-xs font-medium px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            View Case Study <ArrowUpRight size={12} className="inline ml-1" />
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <span className="text-sm text-accent font-medium">{category}</span>
        <h3 className="font-bold text-lg mt-2 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">Client: {client}</p>
        <p className="text-gray-700 font-medium">{results}</p>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
