
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({
  name,
  role,
  company,
  quote,
  rating,
  image
}: TestimonialCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-gray-100 h-full flex flex-col">
      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className={`${
              index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className="text-gray-700 italic mb-6 flex-grow">
        "{quote}"
      </blockquote>
      
      {/* Client Info */}
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">
              {name.split(" ").map(n => n[0]).join("")}
            </div>
          )}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
