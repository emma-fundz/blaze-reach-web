
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember = ({
  name,
  role,
  bio,
  image,
  linkedin,
  twitter,
  email
}: TeamMemberProps) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden group">
      <div className="relative overflow-hidden h-80">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
          <div className="flex gap-3">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors duration-300"
                aria-label={`${name}'s LinkedIn`}
              >
                <Linkedin size={18} />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors duration-300"
                aria-label={`${name}'s Twitter`}
              >
                <Twitter size={18} />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-accent transition-colors duration-300"
                aria-label={`Email ${name}`}
              >
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-accent font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
