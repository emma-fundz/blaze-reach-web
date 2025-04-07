
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgColor?: string;
  textColor?: string;
}

const CallToAction = ({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
  bgColor = "bg-navy",
  textColor = "text-white"
}: CallToActionProps) => {
  return (
    <section className={`${bgColor} ${textColor} py-16 md:py-24`}>
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">{title}</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">{description}</p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={buttonLink} className="btn btn-primary">
              {buttonText} <ArrowRight size={18} />
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink} className="btn btn-outline">
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hidden md:block absolute right-0 top-0 w-64 h-64 bg-accent/10 rounded-full -z-10"></div>
      <div className="hidden md:block absolute left-0 bottom-0 w-40 h-40 bg-accent/10 rounded-full -z-10"></div>
    </section>
  );
};

export default CallToAction;
